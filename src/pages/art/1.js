import React from "react";
import { useStaticQuery, graphql, Link } from "gatsby";
import Img from "gatsby-image";

import Layout from "../../components/layout";
import Shelf from "../../components/shelf";
import Rack from "../../components/rack";
import CompFrame from "../../components/comp-frame";
import BannerImage from "../../components/banner-image";

const NextLink = ({ children }) => <Link to="/art/2">{children}</Link>;

export default () => {
  const imageData = useStaticQuery(graphql`
    query {
      collage1: file(relativePath: { eq: "art/collage-1.jpg" }) {
        ...compImage
      }
      cityscape: file(relativePath: { eq: "art/cityscape.jpg" }) {
        ...bannerImage
      }
      profiles2: file(relativePath: { eq: "art/profiles-2.jpg" }) {
        ...compImage
      }
    }
  `);

  return (
    <Layout title="1">
      <Rack>
        <Shelf>
          <CompFrame variants={["alt1"]}>
            <NextLink>
              <Img
                fluid={imageData.collage1.childImageSharp.fluid}
                alt='Artwork: "Collage 1"'
              />
            </NextLink>
          </CompFrame>
        </Shelf>
      </Rack>
      <NextLink>
        <BannerImage
          fluid={imageData.cityscape.childImageSharp.fluid}
          alt='Artwork: "Cityscape"'
        />
      </NextLink>
      <Rack>
        <Shelf>
          <CompFrame variants={["alt1"]}>
            <NextLink>
              <Img
                fluid={imageData.profiles2.childImageSharp.fluid}
                alt='Artwork: "Profiles 2"'
              />
            </NextLink>
          </CompFrame>
        </Shelf>
      </Rack>
    </Layout>
  );
};
