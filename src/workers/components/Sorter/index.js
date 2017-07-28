import React from 'react';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';
import SelectField from "material-ui/SelectField";
import MenuItem from "material-ui/MenuItem";

import { sortWorkers } from '../../../common/actions/workers';


import styles from './sorter.less';

class Sorter extends React.PureComponent {
  static propTypes = {
    dispatch: PropTypes.func
  };

  constructor() {
    super();
    this.state = {
      sortField: 'birth_date',
      reverse: false
    };
  }

  handleChange = (value) => {
    this.setState({
      sortField: value
    });
  }

  handleOrderDirectionChange = () => {
    const { sortField, reverse } = this.state;
    this.props.dispatch(sortWorkers(sortField, reverse));
    this.setState((prevState) => ({
      reverse: !prevState.reverse
    }));
  }

  render() {
    return (
      <div styleName="sorter">
        <SelectField
          value={this.state.sortField}
          onChange={(event, index, value) => this.handleChange(value)}
          underlineShow={false}
          style={{ height: '43px', maxWidth: '140px' }}
          inputStyle={{ marginTop: '0px', top: '0px', color: 'rgba(0, 0, 0, 0.3)' }}
          labelStyle={{ color: 'rgba(0, 0, 0, 0.3)', paddingRight: '0px' }}
          listStyle={{ border: '2px solid #2196f3', paddingTop: '0px', paddingBottom: '0px' }}
          menuItemStyle={{ padding: '0px' }}
          selectedMenuItemStyle={{ color: '#ffffff', background: '#2196f3' }}
        >
          <MenuItem key={1} value="first_name" primaryText="По имени" />
          <MenuItem key={2} value="last_name" primaryText="По фамилии" />
          <MenuItem key={3} value="birth_date" primaryText="По возрасту" />
          <MenuItem key={4} value="post" primaryText="По званию" />
        </SelectField>
        <div
          styleName={`icon--${this.state.reverse ? 'arrow-up' : 'arrow-down'}`}
          onClick={this.handleOrderDirectionChange}
        />
      </div>
    );
  }
}

export default CSSModules(Sorter, styles);
