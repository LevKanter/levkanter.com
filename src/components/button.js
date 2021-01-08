import "./button.scss";

import PropTypes from "prop-types";
import React from "react";
import classNames from "classnames";
import { Link } from "gatsby";

const Button = ({ children, variants, link, action, forceNativeLink }) => {
  const cl = classNames(
    "button",
    variants.map((v) => `button--${v}`)
  );
  const inner = <span className="button__main">{children}</span>;

  if (link) {
    if (forceNativeLink || link.startsWith("http")) {
      return (
        <a className={cl} href={link}>
          {inner}
        </a>
      );
    }

    return (
      <Link className={cl} to={link}>
        {inner}
      </Link>
    );
  }

  return (
    <button className={cl} onClick={action}>
      {inner}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  variants: PropTypes.arrayOf(PropTypes.string),
  link: PropTypes.string,
  action: PropTypes.func,
  forceNativeLink: PropTypes.bool,
};

Button.defaultProps = {
  variants: [],
  action: () => {},
  forceNativeLink: false,
};

export default Button;
