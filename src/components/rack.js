import "./rack.scss";

import React from "react";

import { arrayOfComponent } from "../utils/prop-types";
import Shelf from "./shelf";

const Rack = ({ children }) => <div className="rack">{children}</div>;

Rack.propTypes = {
  children: arrayOfComponent(Shelf).isRequired,
};

export default Rack;
