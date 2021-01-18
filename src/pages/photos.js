import React, { useState } from "react";
import { useStaticQuery, graphql } from "gatsby";

import "../components/comp-frame"; // `compImage` GraphQL fragment dependency
import Layout from "../components/layout";
import Shelf from "../components/shelf";
import Showcase from "../components/showcase";
import Modal from "../components/modal";
import Slideshow from "../components/slideshow";

const filenameToAltText = (name) => {
  const parts = name.split("--");
  const target = parts.length > 1 ? parts[1] : parts[0];
  return target
    .replace(/-/g, " ")
    .replace(/(?:^|\s)\S/g, (w) => w.toUpperCase());
};

export default () => {
  const { allFile } = useStaticQuery(graphql`
    query {
      allFile(
        sort: { fields: name, order: ASC }
        filter: {
          dir: { regex: "/photos/" }
          extension: { regex: "/(jpg)|(jpeg)|(png)/" }
        }
      ) {
        nodes {
          name
          ...compImage
        }
      }
    }
  `);

  const fileNodes = allFile.nodes;
  const [modalViewIndex, setModalViewIndex] = useState(null);
  const currentModalNode =
    typeof modalViewIndex === "number" ? fileNodes[modalViewIndex] : null;

  return (
    <Layout title="Photos">
      <Shelf Tag="header" variants={["header", "bright"]}>
        <h1>Photos</h1>
        <p>
          Selected favorites (mostly a subset from{" "}
          <a href="https://www.instagram.com/levkanter/">my Instagram</a>).
        </p>
      </Shelf>
      <Showcase>
        {fileNodes.map(({ name, childImageSharp }, idx) => (
          <Showcase.Item key={name}>
            <Showcase.ItemButton action={() => setModalViewIndex(idx)}>
              <Showcase.Img
                fluid={childImageSharp.fluid}
                alt={filenameToAltText(name)}
              />
            </Showcase.ItemButton>
          </Showcase.Item>
        ))}
      </Showcase>

      <Modal
        variants={["gallery"]}
        isOpen={!!currentModalNode}
        close={() => setModalViewIndex(null)}
        label="Gallery slideshow"
      >
        {currentModalNode && (
          <Slideshow
            prev={
              modalViewIndex > 0
                ? () => setModalViewIndex(modalViewIndex - 1)
                : undefined
            }
            next={
              modalViewIndex < fileNodes.length - 1
                ? () => setModalViewIndex(modalViewIndex + 1)
                : undefined
            }
          >
            <Slideshow.Viewport>
              <Slideshow.Img
                fluid={currentModalNode.childImageSharp.fluid}
                alt={filenameToAltText(currentModalNode.name)}
              />
            </Slideshow.Viewport>
          </Slideshow>
        )}
      </Modal>
    </Layout>
  );
};
