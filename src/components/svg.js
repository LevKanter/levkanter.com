import './svg.scss';

import PropTypes from 'prop-types';
import React from 'react';


const SVG = ({ title, viewBox, className, children }) => (
  <svg xmlns='http://www.w3.org/2000/svg' viewBox={viewBox} className={className}>
    {title && <title>{title}</title>}
    {children}
  </svg>
);

SVG.propTypes = {
  title: PropTypes.string,
  viewBox: PropTypes.string,
  children: PropTypes.node.isRequired
};

SVG.defaultProps = {
  title: '',
  viewBox: '0 0 24 24'
};

const Icon = ({ title, children }) => (
  <SVG title={title} className='svg-icon'>
    {children}
  </SVG>
);

SVG.Icon = Icon;


export default SVG;
