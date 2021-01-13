import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import BannerImage from "../banner-image";

export default () => {
  const { image } = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "art/profiles-1.png" }) {
        childImageSharp {
          fluid(maxWidth: 2000, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <BannerImage
      fluid={image.childImageSharp.fluid}
      alt='Artwork: "Profiles 1"'
    />
  );
};
