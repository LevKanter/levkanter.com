import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import Layout from '../components/layout';
import BannerImage from '../components/banner-image';
import Shelf from '../components/shelf';
import LinksBlock from '../components/links-block';


const Hero = () => {
  const { image } = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "art/profiles-1.png" }) {
        childImageSharp {
          fluid(maxWidth: 2000, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <BannerImage fluid={image.childImageSharp.fluid} alt='Artwork: "Profiles 1"' />
  );
};


export default () => (
  <Layout>
    <Hero />
    <Shelf variants={['bright']}>
      <h2 className='for-screenreader-only'>External Links</h2>
      <LinksBlock links={[
        { href: 'https://www.linkedin.com/in/levkanter/', text: 'LinkedIn' },
        { href: 'https://angel.co/u/lev-kanter', text: 'AngelList' },
        { href: 'https://github.com/LevKanter', text: 'GitHub' },
        { href: 'https://www.instagram.com/levkanter/', text: 'Instagram' }
      ]} />
    </Shelf>
  </Layout>
);
