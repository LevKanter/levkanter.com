import "./meta-list.scss";

import PropTypes from "prop-types";
import React from "react";

const MetaList = ({ items }) => (
  <ol className="res-meta-list">
    {items.map(({ title, content }, idx) => (
      <li key={idx} className="res-meta-list__item">
        <div className="res-meta-list__title">{title}</div>
        {content && <div className="res-meta-list__content">{content}</div>}
      </li>
    ))}
  </ol>
);

MetaList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.node.isRequired,
      content: PropTypes.node,
    })
  ),
};

export default MetaList;
