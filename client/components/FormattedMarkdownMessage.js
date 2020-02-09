import React from 'react';
import { injectIntl } from 'react-intl';
import PropTypes from 'prop-types';
import unified from 'unified';
import markdown from 'remark-parse';
import remark2rehype from 'remark-rehype';
import findAndReplace from 'hast-util-find-and-replace';

import { SampleTextbox } from './SampleTextbox';
import { SampleCheckbox } from './SampleCheckbox';
import './FormattedMarkdownMessage.scss';

function collapse (parts) {
  if (!Array.isArray(parts)) {
    return {
      collapsed: parts,
      values: null
    };
  }
  parts = [...parts];
  const values = [];
  let partIndex = 0;
  for (let i = 0; i < parts.length; i++) {
    if (typeof parts[i] === 'string') {
      continue;
    }
    const value = parts[i];
    parts[i] = `\u001A${partIndex++}\u001A`;
    values.push([parts[i], value]);
  }

  return {
    collapsed: parts.join(''),
    values
  };
}

function textboxTokenizer (eat, value, silent) {
  const regex = /^\[\|([\w\d\s]*)\|\]/;
  const matches = regex.exec(value);
  if (!matches) {
    return;
  }

  if (silent) {
    return true;
  }

  const [fullMatch, text] = matches;
  return eat(fullMatch)({
    type: 'textbox',
    text
  });
}

textboxTokenizer.locator = (value, fromIndex) => {
  return value.indexOf('[|', fromIndex);
};

let checkboxIdNumber = 0;

function compileToReact (node, index = undefined) {
  const processChildren = (children) => {
    return (children || []).map(compileToReact);
  };
  if (node.type === 'root') {
    return (<span {...node.properties}>
      {processChildren(node.children)}
    </span>);
  } else if (React.isValidElement(node)) {
    if (index !== undefined && !node.key) {
      return React.cloneElement(node, {
        key: index
      });
    }
    return node;
  } else if (node.type === 'element') {
    const props = {
      ...node.properties
    };
    if (!props.key) {
      props.key = index;
    }
    if (node.tagName === 'input' && node.properties.type === 'checkbox') {
      if (!props.id) {
        props.id = `_md_generated_checkbox__${checkboxIdNumber++}`;
      }
      return (
        <SampleCheckbox
          {...props}
        />
      );
    }
    const children = processChildren(node.children);
    if (children.length > 0) {
      return React.createElement(node.tagName, props, children);
    } else {
      return React.createElement(node.tagName, props);
    }
  } else if (node.type === 'textbox') {
    return (
      <SampleTextbox
        key={index}
        value={node.text}
      />
    );
  } else if (node.type === 'text') {
    return node.value;
  }
}

function replaceWithPlaceholders (valueMap) {
  return function () {
    return function transformer (tree) {
      return findAndReplace(tree, valueMap);
    };
  };
}

const FormattedMarkdownMessage = ({ intl, id, description, defaultMessage, values, className }) => {
  const translated = intl.formatMessage(
    {
      id,
      description,
      defaultMessage
    },
    values
  );

  const { collapsed, values: valueMap } = collapse(translated);

  let processor = unified()
    .use(markdown)
    .use(function () {
      this.Parser.prototype.inlineTokenizers.textbox = textboxTokenizer;
      this.Parser.prototype.inlineMethods.unshift('textbox');
    })
    .use(remark2rehype, {
      handlers: {
        // Pass textbox through--React plugin will transform it correctly
        textbox: (h, node) => node
      }
    }).use(function () {
      // Adds class to root node of message
      return function (node) {
        if (!node.properties) {
          node.properties = {};
        }
        node.properties.className = ['c_formatted-markdown-message'];
        if (className) {
          node.properties.className.push(className);
        }
      };
    });

  if (valueMap) {
    processor = processor.use(replaceWithPlaceholders(valueMap));
  }
  processor.Compiler = compileToReact;

  return processor.processSync(collapsed).contents;
};

FormattedMarkdownMessage.propTypes = {
  intl: PropTypes.shape({
    formatMessage: PropTypes.func.isRequired
  }).isRequired,
  id: PropTypes.string.isRequired,
  description: PropTypes.string,
  defaultMessage: PropTypes.string,
  values: PropTypes.object,
  className: PropTypes.string
};

const WrappedFormattedMarkdownMessage = injectIntl(FormattedMarkdownMessage);

export { WrappedFormattedMarkdownMessage as FormattedMarkdownMessage };
