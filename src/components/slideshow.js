import "./slideshow.scss";

import PropTypes from "prop-types";
import React from "react";
import classNames from "classnames";
import Img from "gatsby-image";

import LeftArrowIcon from "./icons/left-arrow";
import RightArrowIcon from "./icons/right-arrow";

const SlideshowNavButton = ({ children, action, variant, title }) => (
  <button
    className={classNames(
      "slideshow__nav-button",
      `slideshow__nav-button--${variant}`
    )}
    title={title}
    onClick={action}
  >
    {children}
  </button>
);

const SlideshowNext = ({ action }) => (
  <SlideshowNavButton action={action} variant="next" title="Next">
    <RightArrowIcon />
  </SlideshowNavButton>
);

const SlideshowPrev = ({ action }) => (
  <SlideshowNavButton action={action} variant="prev" title="Previous">
    <LeftArrowIcon />
  </SlideshowNavButton>
);

SlideshowNext.propTypes = SlideshowPrev.propTypes = {
  action: PropTypes.func,
};

SlideshowNext.defaultProps = SlideshowPrev.defaultProps = {
  action: () => {},
};

const Slideshow = ({ children, prev, next }) => (
  <div
    role="presentation"
    tabIndex="-1"
    className="slideshow"
    onKeyDown={(e) => {
      if (prev && (e.key === "ArrowLeft" || e.keyCode === 37)) {
        prev();
      } else if (next && (e.key === "ArrowRight" || e.keyCode === 39)) {
        next();
      }
    }}
  >
    {children}
    {prev && <SlideshowPrev action={prev} />}
    {next && <SlideshowNext action={next} />}
  </div>
);

Slideshow.propTypes = {
  prev: PropTypes.func,
  next: PropTypes.func,
};

const SlideshowViewport = ({ children }) => (
  <div className="slideshow__viewport">{children}</div>
);

const SlideshowImg = (props) => (
  <Img
    {...props}
    imgStyle={{ objectFit: "contain" }}
    className="slideshow__img"
  />
);

Slideshow.Viewport = SlideshowViewport;
Slideshow.Img = SlideshowImg;
Slideshow.Next = SlideshowNext;
Slideshow.Prev = SlideshowPrev;

export default Slideshow;
