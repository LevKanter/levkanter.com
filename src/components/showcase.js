import "./showcase.scss";

import PropTypes from "prop-types";
import React from "react";
import Img from "gatsby-image";

const Showcase = ({ children }) => <div className="showcase">{children}</div>;

Showcase.propTypes = {
  children: PropTypes.node.isRequired,
};

const ShowcaseItem = ({ children }) => (
  <div className="showcase__item">
    <div className="showcase__item-main">{children}</div>
  </div>
);

ShowcaseItem.propTypes = {
  children: PropTypes.node.isRequired,
};

const ShowcaseImg = (props) => (
  <Img
    {...props}
    imgStyle={{ objectFit: "contain" }}
    className="showcase__img"
  />
);

Showcase.Item = ShowcaseItem;
Showcase.Img = ShowcaseImg;

export default Showcase;
