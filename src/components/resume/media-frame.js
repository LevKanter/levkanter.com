import './media-frame.scss';

import PropTypes from 'prop-types';
import React, { useRef, useEffect } from 'react';


const MediaFrame = ({ children }) => {
  const mainRef = useRef(null);

  useEffect(() => {
    mainRef.current.scrollTop = 0;
  }, [children]);

  return (
    <div className='res-media-frame'>
      <div className='res-media-frame__main' ref={mainRef}>
        {children}
      </div>
    </div>
  );
};


MediaFrame.propTypes = {
  children: PropTypes.node
};


export default MediaFrame;
