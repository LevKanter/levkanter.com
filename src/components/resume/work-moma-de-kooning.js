import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import TextBlock from '../text-block';
import Work from './work';


export default () => {
  const mediaData = useStaticQuery(graphql`
    query {
      period: file(relativePath: { eq: "resume/moma-de-kooning-period.jpg" }) {
        ...workScreenshot
      }
    }
  `);

  const media = [
    {
      el: <Img fluid={mediaData.period.childImageSharp.fluid} />,
      caption: 'Period page'
    }
  ];

  return (
    <Work media={media} link='https://wayback.archive-it.org/4387/20140926171851/http://www.moma.org/interactives/exhibitions/2011/dekooning/' linkLabel='Archived Site'>
      <TextBlock>
        <p>Companion website for MoMA's <a href='https://www.moma.org/calendar/exhibitions/1135'>de Kooning: a Retrospective</a> exhibition, designed by Kiss Me I'm Polish and developed by Type/Code.</p>
        <h4>My role:</h4>
        <ul>
          <li><p>Worked with the design team and MoMA's digital media and curatorial departments to help spec requirements.</p></li>
          <li><p>Led development on the engineering team which included myself and two other developers.</p></li>
          <li><p>Developed app backend using <a href='https://wordpress.org/'>Wordpress</a>.</p></li>
          <li><p>Developed app frontend using jQuery.</p></li>
        </ul>
      </TextBlock>
    </Work>
  );
};
