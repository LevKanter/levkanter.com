import "./comp-frame.scss";

import PropTypes from "prop-types";
import React from "react";
import classNames from "classnames";
import { graphql } from "gatsby";

const CompFrame = ({ children, variants, maxWidth }) => (
  <div
    className={classNames(
      "comp-frame",
      variants.map((v) => `comp-frame--${v}`)
    )}
    style={
      maxWidth
        ? {
            maxWidth: `${maxWidth / 16}rem`,
          }
        : null
    }
  >
    <div className="comp-frame__main">{children}</div>
  </div>
);

CompFrame.propTypes = {
  children: PropTypes.node.isRequired,
  variants: PropTypes.arrayOf(PropTypes.string),
  maxWidth: PropTypes.number,
};

CompFrame.defaultProps = {
  variants: [],
};

export default CompFrame;

export const fragments = graphql`
  fragment compImage on File {
    childImageSharp {
      fluid(maxWidth: 1000, quality: 100) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`;
