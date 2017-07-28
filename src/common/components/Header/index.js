import React, { PropTypes } from 'react';
import CSSModules from 'react-css-modules';

import styles from './header.less';

const Header = () => (
  <div styleName="header" />
);

export default CSSModules(Header, styles);
