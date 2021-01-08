import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

import TextBlock from "../text-block";
import Work from "./work";

export default () => {
  const mediaData = useStaticQuery(graphql`
    query {
      closedAuction: file(
        relativePath: { eq: "resume/a24-auctions-closed-auction.png" }
      ) {
        ...workScreenshot
      }
      openLot: file(relativePath: { eq: "resume/a24-auctions-open-lot.png" }) {
        ...workScreenshot
      }
      adminLots: file(
        relativePath: { eq: "resume/a24-auctions-admin-lots.png" }
      ) {
        ...workScreenshot
      }
    }
  `);

  const media = [
    {
      el: <Img fluid={mediaData.closedAuction.childImageSharp.fluid} />,
      caption: "Auction page (after bidding closed)",
    },
    {
      el: <Img fluid={mediaData.openLot.childImageSharp.fluid} />,
      caption: "Lot page (during bidding)",
    },
    {
      el: <Img fluid={mediaData.adminLots.childImageSharp.fluid} />,
      caption: "Lots admin",
    },
  ];

  return (
    <Work media={media} link="https://a24auctions.com/">
      <TextBlock>
        <p>
          Online live auction platform for{" "}
          <a href="https://a24films.com/">A24 Films</a>, designed and developed
          by Type/Code.
        </p>
        <h4>My role:</h4>
        <ul>
          <li>
            <p>
              Worked with the design team and A24 Films to help spec
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
              Developed system for real-time scheduling of auctions and lots.
            </p>
          </li>
          <li>
            <p>
              Developed integrations with{" "}
              <a href="https://stripe.com/">Stripe</a>,{" "}
              <a href="https://goshippo.com/">Shippo</a>, and{" "}
              <a href="https://www.taxjar.com/">TaxJar</a> for payment
              processing, shipping label automation, and sales tax recording.
            </p>
          </li>
          <li>
            <p>
              Developed app backend using{" "}
              <a href="https://www.djangoproject.com/">Django</a>,{" "}
              <a href="https://docs.celeryproject.org/en/stable/index.html">
                Celery
              </a>
              ,{" "}
              <a href="https://channels.readthedocs.io/en/stable/">Channels</a>,{" "}
              <a href="https://docs.graphene-python.org/en/latest/">Graphene</a>
              .
            </p>
          </li>
          <li>
            <p>
              Developed app frontend using{" "}
              <a href="https://vuejs.org/">Vue.js</a>,{" "}
              <a href="https://www.apollographql.com/">Apollo</a>.
            </p>
          </li>
          <li>
            <p>
              Oversaw development of deployment and container orchestration
              architecture using{" "}
              <a href="https://aws.amazon.com/ecs/">Amazon ECS</a> (along with
              other AWS services).
            </p>
          </li>
          <li>
            <p>
              Oversaw development of AWS infrastructure management code using{" "}
              <a href="https://www.terraform.io/">Terraform</a>.
            </p>
          </li>
          <li>
            <p>
              Oversaw development of{" "}
              <abbr title="continuous integration / continuous delivery">
                CI/CD
              </abbr>{" "}
              pipeline using <a href="https://www.jenkins.io/">Jenkins</a>.
            </p>
          </li>
        </ul>
      </TextBlock>
    </Work>
  );
};
