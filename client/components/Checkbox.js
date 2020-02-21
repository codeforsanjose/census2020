import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';

export default class Checkbox extends React.PureComponent {
  render () {
    const {
      className,
      checked,
      readOnly,
      labelMessageId,
      name,
      value,
      onCheck,
      id
    } = this.props;

    let checkbox = (
      <span className={className}>
        <input
          type="checkbox"
          id={id}
          checked={checked}
          readOnly={readOnly}
          name={name}
          value={value}
          onChange={onCheck}
        />
        <label htmlFor={id}>
          <FormattedMessage id={labelMessageId} />
        </label>
      </span>
    );

    return (
      <div>
        {checkbox}
      </div>
    );
  }
}

Checkbox.propTypes = {
  checked: PropTypes.bool,
  readOnly: PropTypes.bool,
  className: PropTypes.string.isRequired,
  labelMessageId: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  onCheck: PropTypes.func.isRequired
};

Checkbox.defaultProps = {
  readOnly: false
};
