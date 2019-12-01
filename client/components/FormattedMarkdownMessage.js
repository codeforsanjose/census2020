import React from 'react';
import { useIntl } from 'react-intl';
import PropTypes from 'prop-types';
import Markdown from 'react-remarkable';

export const FormattedMarkdownMessage = ({ id, description, defaultMessage, values }) => {
  const intl = useIntl();
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
    <Markdown>
      {markdown}
    </Markdown>
  );
};

FormattedMarkdownMessage.propTypes = {
  id: PropTypes.string.isRequired,
  description: PropTypes.string,
  defaultMessage: PropTypes.string,
  values: PropTypes.object
};
