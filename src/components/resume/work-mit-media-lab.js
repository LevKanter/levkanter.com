import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

import TextBlock from "../text-block";
import Work from "./work";

export default () => {
  const mediaData = useStaticQuery(graphql`
    query {
      home: file(relativePath: { eq: "resume/mit-ml-home.png" }) {
        ...workScreenshot
      }
      group: file(relativePath: { eq: "resume/mit-ml-group.png" }) {
        ...workScreenshot
      }
      groupAdmin: file(relativePath: { eq: "resume/mit-ml-group-admin.png" }) {
        ...workScreenshot
      }
      damIndex: file(relativePath: { eq: "resume/mit-ml-dam-index.png" }) {
        ...workScreenshot
      }
    }
  `);

  const media = [
    {
      el: <Img fluid={mediaData.home.childImageSharp.fluid} />,
      caption: "Homepage",
    },
    {
      el: <Img fluid={mediaData.group.childImageSharp.fluid} />,
      caption: "Research group (public view)",
    },
    {
      el: <Img fluid={mediaData.groupAdmin.childImageSharp.fluid} />,
      caption: "Research group (admin view)",
    },
    {
      el: <Img fluid={mediaData.damIndex.childImageSharp.fluid} />,
      caption: "DAM index",
    },
  ];

  return (
    <Work media={media} link="https://media.mit.edu">
      <TextBlock>
        <p>
          Public site and content management system for the{" "}
          <a href="https://sharptype.co/">MIT Media Lab</a>, designed by
          Type/Code and developed by Type/Code in collaboration with{" "}
          <a href="https://www.media.mit.edu/groups/necsys/overview/">
            NeCSys (the lab's IT department)
          </a>
          .
        </p>
        <h4>My role:</h4>
        <ul>
          <li>
            <p>
              Initially participated purely as a developer on the engineering
              team, which included myself and eight other developers.
            </p>
          </li>
          <li>
            <p>
              Helped develop app backend using Django, Celery, Django REST
              framework,{" "}
              <a href="https://www.elastic.co/elasticsearch/">Elasticsearch</a>.
            </p>
          </li>
          <li>
            <p>
              Helped develop app frontend using{" "}
              <a href="https://jquery.com/">jQuery</a>,{" "}
              <a href="https://requirejs.org/">RequireJS</a>, Sass.
            </p>
          </li>
          <li>
            <p>
              Took over as the technical lead shortly after the project's
              initial <abbr title="minimum viable product">MVP</abbr> launch.
            </p>
          </li>
          <li>
            <p>
              Worked with the design team and the Media Lab to help prioritize
              new features, bug fixes, and performance improvements, as well as
              spec requirements.
            </p>
          </li>
          <li>
            <p>
              Oversaw development of major new features, including the site's
              digital asset management system (DAM) and video pages.
            </p>
          </li>
        </ul>
      </TextBlock>
    </Work>
  );
};
