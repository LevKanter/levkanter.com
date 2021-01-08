import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

import TextBlock from "../text-block";
import Work from "./work";

export default () => {
  const mediaData = useStaticQuery(graphql`
    query {
      catalog: file(
        relativePath: { eq: "resume/google-books-publisher-catalog.jpg" }
      ) {
        ...workScreenshot
      }
      analytics: file(
        relativePath: { eq: "resume/google-books-publisher-analytics.jpg" }
      ) {
        ...workScreenshot
      }
    }
  `);

  const media = [
    {
      el: <Img fluid={mediaData.catalog.childImageSharp.fluid} />,
      caption: "Book catalog index",
    },
    {
      el: <Img fluid={mediaData.analytics.childImageSharp.fluid} />,
      caption: "Analytics six month overview",
    },
  ];

  return (
    <Work media={media}>
      <TextBlock>
        <p>
          Administrative dashboard for publishers on{" "}
          <a href="https://books.google.com/">Google Books</a>, designed by
          Type/Code and developed by Google, with frontend support from
          Type/Code. Allowed publishers who partnered with Google to manage
          their e-book catalog, pricing and distribution settings, view
          analytics, etc.
        </p>
        <h4>My role:</h4>
        <ul>
          <li>
            <p>
              Participated alongside members of the Google Books engineering
              team as a frontend developer.
            </p>
          </li>
          <li>
            <p>
              Was responsible for markup and styling of all UI components
              throughout the app. Provided stylesheets for standard{" "}
              <a href="https://developers.google.com/closure/library">
                Closure Library
              </a>{" "}
              components using{" "}
              <a href="https://github.com/google/closure-stylesheets">
                Closure Stylesheets
              </a>
              .
            </p>
          </li>
          <li>
            <p>
              Developed prototypes of miscellaneous Javascript components later
              integrated into production by the Google team.
            </p>
          </li>
        </ul>
      </TextBlock>
    </Work>
  );
};
