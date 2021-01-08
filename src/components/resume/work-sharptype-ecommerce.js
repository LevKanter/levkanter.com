import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

import TextBlock from "../text-block";
import Work from "./work";

export default () => {
  const mediaData = useStaticQuery(graphql`
    query {
      typefaceBuy: file(
        relativePath: { eq: "resume/sharptype-typeface-buy.png" }
      ) {
        ...workScreenshot
      }
      checkoutConfirm: file(
        relativePath: { eq: "resume/sharptype-checkout-confirm.png" }
      ) {
        ...workScreenshot
      }
      productAdmin: file(
        relativePath: { eq: "resume/sharptype-product-admin.png" }
      ) {
        ...workScreenshot
      }
    }
  `);

  const media = [
    {
      el: <Img fluid={mediaData.typefaceBuy.childImageSharp.fluid} />,
      caption: "Typeface buy section",
    },
    {
      el: <Img fluid={mediaData.checkoutConfirm.childImageSharp.fluid} />,
      caption: "Checkout (confirm step)",
    },
    {
      el: <Img fluid={mediaData.productAdmin.childImageSharp.fluid} />,
      caption: "Product admin",
    },
  ];

  return (
    <Work media={media} link="https://sharptype.co/typefaces/cart/">
      <TextBlock>
        <p>
          Ecommerce platform for the type foundry{" "}
          <a href="https://sharptype.co/">Sharp Type</a>, designed and developed
          by Type/Code.
        </p>
        <h4>My role:</h4>
        <ul>
          <li>
            <p>
              Worked with the design team and Sharp Type to help spec
              requirements.
            </p>
          </li>
          <li>
            <p>
              Led development on the engineering team which included myself and
              three other developers.
            </p>
          </li>
          <li>
            <p>
              Developed system to support ecommerce flows specific to typeface
              products, including: font bundling, end-user license agreement
              generation, cart sharing, and license upgrades.
            </p>
          </li>
          <li>
            <p>
              Developed app backend using Django, Celery,{" "}
              <a href="https://www.django-rest-framework.org/">
                Django REST framework
              </a>
              , <a href="https://www.princexml.com/">Prince</a>.
            </p>
          </li>
          <li>
            <p>
              Developed app frontend using Vue.js,{" "}
              <a href="https://vuex.vuejs.org/">Vuex</a>,{" "}
              <a href="https://sass-lang.com/">Sass</a>.
            </p>
          </li>
          <li>
            <p>Oversaw deployment architecture on AWS.</p>
          </li>
          <li>
            <p>
              Oversaw development of{" "}
              <abbr title="extract, transform, load">ETL</abbr> pipeline to
              migrate customer and order data from Sharp Type's previous
              ecommerce system (<a href="https://www.shopify.com/">Shopify</a>).
            </p>
          </li>
          <li>
            <p>Oversaw development of CI/CD pipeline using Jenkins.</p>
          </li>
        </ul>
      </TextBlock>
    </Work>
  );
};
