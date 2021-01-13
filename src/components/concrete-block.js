import "./concrete-block.scss";

import PropTypes from "prop-types";
import React from "react";

const ConcreteBlock = ({ children }) => (
  <div className="concrete-block">{children}</div>
);

ConcreteBlock.propTypes = {
  children: PropTypes.node.isRequired,
};

const ConcreteBlockRow = ({ children }) => (
  <div className="concrete-block__row">{children}</div>
);

ConcreteBlock.Row = ConcreteBlockRow;

export default ConcreteBlock;
