import React from "react";
import { useStaticQuery, graphql, Link } from "gatsby";

import Layout from "../components/layout";
import BannerImage from "../components/banner-image";
import Shelf from "../components/shelf";
import LinksBlock from "../components/links-block";

export default () => {
  const { heroImage } = useStaticQuery(graphql`
    query {
      heroImage: file(relativePath: { eq: "art/profiles-1.png" }) {
        ...bannerImage
      }
    }
  `);

  return (
    <Layout>
      <Link to="/art/1">
        <BannerImage
          fluid={heroImage.childImageSharp.fluid}
          alt='Artwork: "Profiles 1"'
        />
      </Link>
      <Shelf variants={["bright"]}>
        <h2 className="for-screenreader-only">External Links</h2>
        <LinksBlock
          links={[
            {
              href: "https://www.linkedin.com/in/levkanter/",
              text: "LinkedIn",
            },
            { href: "https://angel.co/u/lev-kanter", text: "AngelList" },
            { href: "https://github.com/LevKanter", text: "GitHub" },
            { href: "https://www.instagram.com/levkanter/", text: "Instagram" },
          ]}
        />
      </Shelf>
    </Layout>
  );
};
