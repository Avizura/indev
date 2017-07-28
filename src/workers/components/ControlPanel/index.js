import React from 'react';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';

import Filter from '../Filter';
import Sorter from '../Sorter';

import styles from './control-panel.less';

const ControlPanel = (props) => (
  <div styleName="control-panel">
    <Filter dispatch={props.dispatch} />
    <Sorter dispatch={props.dispatch} />
  </div>
);

ControlPanel.propTypes = {
  dispatch: PropTypes.func
};

export default CSSModules(ControlPanel, styles);
