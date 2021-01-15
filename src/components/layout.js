import "../styles/global.scss";
import "./layout.scss";

import "what-input";
import React from "react";
import PropTypes from "prop-types";

import Meta from "./meta";
import TitleBar from "./titlebar";

const MAIN_ID = "main-content";

const Layout = ({ title, children }) => (
  <div className="layout">
    <Meta title={title} />
    <div className="layout__skipnav">
      <a href={`#${MAIN_ID}`}>Skip to content</a>
    </div>
    <TitleBar />
    <main id={MAIN_ID}>{children}</main>
  </div>
);

Layout.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default Layout;
