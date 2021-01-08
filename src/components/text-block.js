import "./text-block.scss";

import PropTypes from "prop-types";
import React from "react";

const TextBlock = ({ children }) => (
  <div className="text-block">{children}</div>
);

TextBlock.propTypes = {
  children: PropTypes.node.isRequired,
};

export default TextBlock;
