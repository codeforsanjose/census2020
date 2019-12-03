import React from 'react';
import { injectIntl } from 'react-intl';
import PropTypes from 'prop-types';
import Markdown from 'react-remarkable';

const FormattedMarkdownMessage = ({ intl, id, description, defaultMessage, values }) => {
  const markdown = intl.formatMessage(
    {
      id,
      description,
      defaultMessage
    },
    values
  );

  if (Array.isArray(markdown)) {
    for (let i = 0; i < markdown.length; i++) {
      const part = markdown[i];
      if (React.isValidElement(part) && !part.props.key) {
        markdown[i] = React.cloneElement(markdown[i], {
          key: i
        });
      }
    }
  }

  return (
    <Markdown container={React.Fragment}>
      {markdown}
    </Markdown>
  );
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
