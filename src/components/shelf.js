import "./shelf.scss";

import PropTypes from "prop-types";
import React from "react";
import classNames from "classnames";

const Shelf = ({ children, variants, id, className, Tag }) => (
  <Tag
    id={id}
    className={classNames(
      "shelf",
      variants.map((v) => `shelf--${v}`),
      className
    )}
  >
    <div className="shelf__main">{children}</div>
  </Tag>
);

Shelf.propTypes = {
  children: PropTypes.node.isRequired,
  variants: PropTypes.arrayOf(PropTypes.string),
  Tag: PropTypes.string,
};

Shelf.defaultProps = {
  variants: [],
  Tag: "div",
};

export default Shelf;
