import "./titlebar.scss";

import whatInput from "what-input";
import React, { useState } from "react";
import classNames from "classnames";
import { useStaticQuery, graphql, Link } from "gatsby";

import MenuIcon from "./icons/menu";
import CloseIcon from "./icons/close";

const TitleBar = () => {
  const meta = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  const [isSubnavOpen, setSubnavOpen] = useState(false);

  return (
    <div
      role="menubar"
      tabIndex="-1"
      className={classNames("titlebar", {
        "titlebar--subnav-open": isSubnavOpen,
      })}
      onKeyDown={(e) => {
        if (isSubnavOpen && (e.key === "Escape" || e.keyCode === 27)) {
          setSubnavOpen(false);
        }
      }}
    >
      <nav className="titlebar__nav">
        <Link
          to="/"
          className="titlebar__nav-item titlebar__link"
          activeClassName="titlebar__link--active"
        >
          {meta.site.siteMetadata.title}
        </Link>
        <button
          className="titlebar__nav-item titlebar__link"
          title={isSubnavOpen ? "Close" : "Menu"}
          onClick={() => setSubnavOpen(!isSubnavOpen)}
        >
          {isSubnavOpen ? <CloseIcon /> : <MenuIcon />}
        </button>

        <div
          role="menu"
          className="titlebar__subnav"
          onFocus={() => !isSubnavOpen && setSubnavOpen(true)}
          onBlur={() => whatInput.ask() === "keyboard" && setSubnavOpen(false)}
        >
          <ul className="titlebar__subnav-list">
            <li className="titlebar__subnav-item">
              <Link to="/resume" className="titlebar__link">
                Résumé
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default TitleBar;
