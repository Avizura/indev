import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';

import { processStringQuery } from '../../utils';
import { fetchWorkersByQuery } from '../../../common/api/workers';

import styles from './filter.less';

class Filter extends Component {
  static propTypes = {
    dispatch: PropTypes.func
  };

  filterQuery = '';

  handleFilterQueryChange = (e) => {
    this.filterQuery = processStringQuery(e.target.value);
  }

  handleClick = (event) => {
    event.preventDefault();
    this.props.dispatch(fetchWorkersByQuery(this.filterQuery));
  }

  render() {
    return (
      <form styleName="filter" onSubmit={this.handleClick}>
        <div styleName="filter--icon" />
        <input
          type="search"
          styleName="filter--input"
          placeholder="Поиск"
          onChange={this.handleFilterQueryChange}
        />
      </form>
    );
  }
}

export default CSSModules(Filter, styles);
