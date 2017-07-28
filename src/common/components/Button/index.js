import React from 'react';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';

import styles from './button.less';

const ButtonComponent = ({ children, onClick, color, type, style }) => {
  return (
    <button styleName={`button--${color}`} type={type} onClick={onClick} style={style}>
      {children}
    </button>
  );
};

ButtonComponent.propTypes = {
  children: PropTypes.string,
  color: PropTypes.string,
  onClick: PropTypes.func,
  style: PropTypes.object,
  type: PropTypes.string
};

export default CSSModules(ButtonComponent, styles);
