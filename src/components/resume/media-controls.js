import "./media-controls.scss";

import PropTypes from "prop-types";
import React from "react";
import classNames from "classnames";

const MediaControls = ({ media, currentIndex, setCurrentIndex }) => (
  <div className="res-media-controls">
    <div className="res-media-controls__main">
      <ol className="res-media-controls__item-list">
        {media.map(({ caption }, idx) => (
          <li
            key={idx}
            className={classNames("res-media-controls__item", {
              "res-media-controls__item--active": currentIndex === idx,
            })}
          >
            <button
              className="res-media-controls__item-button"
              onClick={() => setCurrentIndex(idx)}
            >
              {caption}
            </button>
          </li>
        ))}
      </ol>
    </div>
  </div>
);

MediaControls.propTypes = {
  media: PropTypes.array.isRequired,
  currentIndex: PropTypes.number.isRequired,
  setCurrentIndex: PropTypes.func.isRequired,
};

export default MediaControls;
