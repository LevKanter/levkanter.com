import "./banner-image.scss";

import PropTypes from "prop-types";
import React from "react";
import Img from "gatsby-image";

const BannerImage = ({ fluid, alt }) => (
  <div className="banner-image">
    <div className="banner-image__main">
      <Img fluid={fluid} alt={alt} />
    </div>
  </div>
);

BannerImage.propTypes = {
  fluid: PropTypes.object.isRequired,
  alt: PropTypes.string.isRequired,
};

export default BannerImage;
