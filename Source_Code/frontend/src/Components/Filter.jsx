import React from "react";
import {FaSearch, } from "react-icons/fa"

const Filter = () => {
  return (
    <div className="">
      <div className="experience">
      </div>
      <div className="work-mode">
        <p>Work from Home</p>
        <p>Work on Site</p>
        <p>Hybrid</p>
      </div>
      <div className="location">
        <p>Delhi</p>
        <p>Mumbai</p>
        <p>Bangaluru</p>
      </div>
      <div className="education">
        <p>PHD</p>
        <p>Btech</p>
        <p>BCA</p>
        <p>Mtech</p>
      </div>
    </div>
  );
};

export default Filter;
