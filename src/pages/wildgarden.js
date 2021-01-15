import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

import Layout from "../components/layout";
import Shelf from "../components/shelf";
import Rack from "../components/rack";
import CompFrame from "../components/comp-frame";

export default () => {
  const imageData = useStaticQuery(graphql`
    query {
      comp1: file(relativePath: { eq: "art/wildgarden/paint-strokes-1.png" }) {
        ...compImage
      }
      comp2: file(relativePath: { eq: "art/wildgarden/paint-strokes-2.png" }) {
        ...compImage
      }
      comp3: file(relativePath: { eq: "art/wildgarden/paint-strokes-3.png" }) {
        ...compImage
      }
      comp4: file(relativePath: { eq: "art/wildgarden/paint-strokes-4.png" }) {
        ...compImage
      }
      comp5: file(relativePath: { eq: "art/wildgarden/paint-strokes-5.png" }) {
        ...compImage
      }
      comp6: file(relativePath: { eq: "art/wildgarden/paint-strokes-6.png" }) {
        ...compImage
      }
    }
  `);

  return (
    <Layout title="WildGarden">
      <Shelf Tag="header" variants={["header", "bright"]}>
        <h1>WildGarden</h1>
        <p>
          Still comps from{" "}
          <a href="https://code.google.com/archive/p/lk-wildgarden/">
            my college thesis
          </a>
          .
        </p>
      </Shelf>
      <Rack>
        <Shelf>
          <CompFrame>
            <Img
              fluid={imageData.comp1.childImageSharp.fluid}
              alt="Paint Strokes Comp 1"
            />
          </CompFrame>
        </Shelf>
        <Shelf>
          <CompFrame variants={["alt1"]}>
            <Img
              fluid={imageData.comp2.childImageSharp.fluid}
              alt="Paint Strokes Comp 2"
            />
          </CompFrame>
        </Shelf>
        <Shelf>
          <CompFrame variants={["alt2"]}>
            <Img
              fluid={imageData.comp3.childImageSharp.fluid}
              alt="Paint Strokes Comp 3"
            />
          </CompFrame>
        </Shelf>
        <Shelf>
          <CompFrame>
            <Img
              fluid={imageData.comp4.childImageSharp.fluid}
              alt="Paint Strokes Comp 4"
            />
          </CompFrame>
        </Shelf>
        <Shelf>
          <CompFrame variants={["alt1"]}>
            <Img
              fluid={imageData.comp5.childImageSharp.fluid}
              alt="Paint Strokes Comp 5"
            />
          </CompFrame>
        </Shelf>
        <Shelf>
          <CompFrame variants={["alt2"]}>
            <Img
              fluid={imageData.comp6.childImageSharp.fluid}
              alt="Paint Strokes Comp 6"
            />
          </CompFrame>
        </Shelf>
      </Rack>
    </Layout>
  );
};
