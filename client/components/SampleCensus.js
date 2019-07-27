import React from 'react';
import { FormattedMessage } from 'react-intl';

export default class SampleCensus extends React.PureComponent {
  render () {
    return (
      <div>
        <header>
          <FormattedMessage
            id="components.SampleCensus.header"
            description="Sample Census page header"
            defaultMessage="Sample Census"
          />
        </header>
      </div>
    );
  }
}
