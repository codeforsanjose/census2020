import React from 'react';
import { FormattedMessage } from 'react-intl';

export default class FAQ extends React.PureComponent {
  render () {
    return (
      <div>
        <header>
          <FormattedMessage
            id="components.FAQ.header"
            description="FAQ page header text"
            defaultMessage="FAQ"
          />
        </header>
      </div>
    );
  }
}
