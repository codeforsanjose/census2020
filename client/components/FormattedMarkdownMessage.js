import React from 'react';
import { injectIntl } from 'react-intl';
import PropTypes from 'prop-types';
import unified from 'unified';
import markdown from 'remark-parse';
import remark2rehype from 'remark-rehype';
import findAndReplace from 'hast-util-find-and-replace';

import { SampleTextbox } from './SampleTextbox';

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

function compileToReact (node, index = undefined) {
  const processChildren = (children) => {
    return (children || []).map(compileToReact);
  };
  if (node.type === 'root') {
    if (node.children.length === 1) {
      let child = node.children[0];
      if (child.type === 'element' && child.tagName === 'p') {
        child = {
          ...child,
          tagName: React.Fragment
        };
      }
      return compileToReact(child);
    } else {
      return (<React.Fragment>
        {processChildren(node.children)}
      </React.Fragment>);
    }
  } else if (React.isValidElement(node)) {
    if (index !== undefined && !node.key) {
      return React.cloneElement(node, {
        key: index
      });
    }
    return node;
  } else if (node.type === 'element') {
    if (!node.properties.key) {
      node.properties.key = index;
    }
    const children = processChildren(node.children);
    if (children.length > 0) {
      return React.createElement(node.tagName, node.properties, children);
    } else {
      return React.createElement(node.tagName, node.properties);
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

const FormattedMarkdownMessage = ({ intl, id, description, defaultMessage, values }) => {
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
  values: PropTypes.object
};

const WrappedFormattedMarkdownMessage = injectIntl(FormattedMarkdownMessage);

export { WrappedFormattedMarkdownMessage as FormattedMarkdownMessage };
