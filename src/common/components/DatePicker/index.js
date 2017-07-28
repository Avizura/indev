import React from 'react';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';
import DatePicker from "material-ui/DatePicker";
import { injectIntl, intlShape } from 'react-intl';

import styles from "./datepicker.less";

class renderDatePicker extends React.PureComponent {
  static propTypes = {
    input: PropTypes.shape({
      onChange: PropTypes.func.isRequired,
      value: PropTypes.string.isRequired,
    }).isRequired,
    intl: intlShape,
    label: PropTypes.string,
    meta: PropTypes.shape({
      touched: PropTypes.bool,
      error: PropTypes.string,
    })
  }

  handleChange = (event, date) => {
    this.props.input.onChange(new Date(date).toISOString());
  }

  render() {
    const {
      input, label,
      meta: { touched, error }
    } = this.props;

    return (
      <div>
        <DatePicker
          value={new Date(input.value)}
          formatDate={(date) =>
            this.props.intl.formatDate(date, { day: "numeric", month: "long", year: "numeric" })
          }
          onDismiss={input.onBlur}
          onChange={this.handleChange}
          autoOk
          container="inline"
          floatingLabelFixed
          floatingLabelText={label}
          fullWidth
          style={{ height: '50px', cursor: 'pointer' }}
          textFieldStyle={{ height: '50px', cursor: 'pointer', fontSize: '14px' }}
          inputStyle={{ marginTop: '0px' }}
          floatingLabelStyle={{ top: '20px' }}
        />
        {touched && error && <span styleName="datepicker--error">{error}</span>}
      </div>
    );
  }
}

const styledDatePicker = CSSModules(renderDatePicker, styles);

export default injectIntl(styledDatePicker);
