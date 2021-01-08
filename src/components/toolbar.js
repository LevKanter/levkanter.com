import "./toolbar.scss";

import PropTypes from "prop-types";
import React from "react";

const Toolbar = ({ children }) => <div className="toolbar">{children}</div>;

Toolbar.propTypes = {
  children: PropTypes.node.isRequired,
};

const ToolbarGroup = ({ children }) => (
  <div className="toolbar__group">{children}</div>
);

ToolbarGroup.propTypes = {
  children: PropTypes.node.isRequired,
};

Toolbar.Group = ToolbarGroup;

export default Toolbar;
