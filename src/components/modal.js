import "./modal.scss";

import PropTypes from "prop-types";
import React, { useRef, useEffect } from "react";
import classNames from "classnames";
import FocusTrap from "focus-trap-react";
import {
  disableBodyScroll,
  enableBodyScroll,
  clearAllBodyScrollLocks,
} from "body-scroll-lock";

import CloseIcon from "./icons/close";

const Modal = ({ children, isOpen, close, variants, label, labelledby }) => {
  const rootRef = useRef(null);
  const mainRef = useRef(null);
  const mainPointerGuard = useRef(false);

  const maybeClose = () => !!close && close();

  useEffect(() => {
    const scrollTarget = rootRef.current;
    if (isOpen) {
      disableBodyScroll(scrollTarget);
      scrollTarget.scrollTop = 0;
    } else {
      enableBodyScroll(scrollTarget);
    }
    return () => clearAllBodyScrollLocks();
  }, [isOpen]);

  const content = (
    // eslint-disable-next-line jsx-a11y/mouse-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions
    <div
      ref={rootRef}
      role="dialog"
      tabIndex="-1"
      aria-hidden={!isOpen}
      aria-modal={isOpen}
      aria-label={label}
      aria-labelledby={labelledby}
      className={classNames(
        "modal",
        variants.map((v) => `modal--${v}`),
        { "modal--open": isOpen }
      )}
      onKeyDown={(e) => {
        if (e.key === "Escape" || e.keyCode === 27) {
          maybeClose();
        }
      }}
      onClick={(e) => {
        if (!mainRef.current.contains(e.target)) {
          if (mainPointerGuard.current) {
            mainPointerGuard.current = false;
          } else {
            maybeClose();
          }
        }
      }}
      onMouseOut={(e) => {
        if (e.target === rootRef.current) {
          mainPointerGuard.current = false;
        }
      }}
    >
      <div
        ref={mainRef}
        role="presentation"
        className="modal__main"
        onMouseDown={() => (mainPointerGuard.current = true)}
        onMouseUp={() => (mainPointerGuard.current = false)}
      >
        {children}
        {!!close && (
          <button
            className="modal__close-button"
            title="Close"
            onClick={() => close()}
          >
            <CloseIcon />
          </button>
        )}
      </div>
    </div>
  );

  if (isOpen) {
    return (
      <FocusTrap
        focusTrapOptions={{
          fallbackFocus: ".modal",
          escapeDeactivates: !!close,
          allowOutsideClick: true,
          preventScroll: true,
        }}
      >
        {content}
      </FocusTrap>
    );
  }
  return <>{content}</>;
};

Modal.propTypes = {
  children: PropTypes.node,
  isOpen: PropTypes.bool.isRequired,
  close: PropTypes.func,
  variants: PropTypes.arrayOf(PropTypes.string),
  label: PropTypes.string,
  labelledby: PropTypes.string,
};

Modal.defaultProps = {
  variants: [],
};

export default Modal;
