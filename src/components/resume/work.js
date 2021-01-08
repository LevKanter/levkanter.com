import './work.scss';

import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { graphql } from 'gatsby';

import Toolbar from '../toolbar';
import Button from '../button';
import ExternalIcon from '../icons/external';
import MediaFrame from './media-frame';
import MediaControls from './media-controls';


const Media = ({ media }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const current = media[currentIndex];

  if (!current) {
    return null;
  }

  const prev = () => setCurrentIndex(currentIndex === 0 ? media.length - 1 : currentIndex - 1);
  const next = () => setCurrentIndex(currentIndex === media.length - 1 ? 0 : currentIndex + 1);

  return (
    <div
      role='presentation'
      tabIndex='-1'
      className='res-work__media'
      onKeyDown={(e) => {
        if (e.key === 'ArrowLeft' || e.keyCode === 37) {
          prev();
        } else if (e.key === 'ArrowRight' || e.keyCode === 39) {
          next();
        }
      }}>
      <MediaFrame>{current.el}</MediaFrame>
      <MediaControls
        media={media}
        currentIndex={currentIndex}
        setCurrentIndex={setCurrentIndex}
      />
    </div>
  );
};


const Work = ({ media, link, linkLabel, children }) => (
  <div className='res-work'>
    <div className='res-work__main'>
      {children}
      {link && (
        <Toolbar>
          <Button link={link} variants={['big']}>
            <span>{linkLabel}</span>
            <ExternalIcon />
          </Button>
        </Toolbar>
      )}
    </div>
    <Media media={media} />
  </div>
);

Work.propTypes = {
  media: PropTypes.arrayOf(PropTypes.shape({
    el: PropTypes.node.isRequired,
    caption: PropTypes.node.isRequired
  })),
  children: PropTypes.node.isRequired
};

Work.defaultProps = {
  media: [],
  linkLabel: 'Live Site'
};


const fragments = graphql`
  fragment workScreenshot on File {
    childImageSharp {
      fluid(maxWidth: 1600, quality: 100) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`;


export default Work;

export {
  fragments
};
