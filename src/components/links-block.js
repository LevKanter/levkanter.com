import "./links-block.scss";

import PropTypes from "prop-types";
import React from "react";

const LinksBlock = ({ links }) => (
  <div className="links-block">
    <ul className="links-block__list">
      {links.map(({ href, text }) => (
        <li key={href} className="links-block__item">
          <a href={href} className="links-block__link">
            {text}
          </a>
        </li>
      ))}
    </ul>
  </div>
);

LinksBlock.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      href: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
    })
  ),
};

export default LinksBlock;
