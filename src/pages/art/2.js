import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import "../../components/comp-frame"; // `compImage` GraphQL fragment dependency
import Layout from "../../components/layout";
import Showcase from "../../components/showcase";

export default () => {
  const imageData = useStaticQuery(graphql`
    query {
      spirit1: file(relativePath: { eq: "art/spirits/spirit-1.png" }) {
        ...compImage
      }
      spirit2: file(relativePath: { eq: "art/spirits/spirit-2.png" }) {
        ...compImage
      }
      spirit3: file(relativePath: { eq: "art/spirits/spirit-3.png" }) {
        ...compImage
      }
      spirit4: file(relativePath: { eq: "art/spirits/spirit-4.png" }) {
        ...compImage
      }
      spirit5: file(relativePath: { eq: "art/spirits/spirit-5.png" }) {
        ...compImage
      }
      spirit6: file(relativePath: { eq: "art/spirits/spirit-6.png" }) {
        ...compImage
      }
      spirit7: file(relativePath: { eq: "art/spirits/spirit-7.png" }) {
        ...compImage
      }
      spirit8: file(relativePath: { eq: "art/spirits/spirit-8.png" }) {
        ...compImage
      }
    }
  `);

  return (
    <Layout title="2">
      <Showcase>
        <Showcase.Item>
          <Showcase.Img
            fluid={imageData.spirit1.childImageSharp.fluid}
            alt='Artwork: "Spirit 1"'
          />
        </Showcase.Item>
        <Showcase.Item>
          <Showcase.Img
            fluid={imageData.spirit2.childImageSharp.fluid}
            alt='Artwork: "Spirit 2"'
          />
        </Showcase.Item>
        <Showcase.Item>
          <Showcase.Img
            fluid={imageData.spirit3.childImageSharp.fluid}
            alt='Artwork: "Spirit 3"'
          />
        </Showcase.Item>
        <Showcase.Item>
          <Showcase.Img
            fluid={imageData.spirit4.childImageSharp.fluid}
            alt='Artwork: Spirit 4"'
          />
        </Showcase.Item>
        <Showcase.Item>
          <Showcase.Img
            fluid={imageData.spirit5.childImageSharp.fluid}
            alt='Artwork: Spirit 5"'
          />
        </Showcase.Item>
        <Showcase.Item>
          <Showcase.Img
            fluid={imageData.spirit6.childImageSharp.fluid}
            alt='Artwork: Spirit 6"'
          />
        </Showcase.Item>
        <Showcase.Item>
          <Showcase.Img
            fluid={imageData.spirit7.childImageSharp.fluid}
            alt='Artwork: "Spirit 7"'
          />
        </Showcase.Item>
        <Showcase.Item>
          <Showcase.Img
            fluid={imageData.spirit8.childImageSharp.fluid}
            alt='Artwork: "Spirit 8"'
          />
        </Showcase.Item>
      </Showcase>
    </Layout>
  );
};
