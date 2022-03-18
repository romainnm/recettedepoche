import React from "react";
import hungry from "../assets/images/hungry.jpeg";

const NoResults = () => {
  return (
    <div className="no-results">
      <p className="hungry-text">No result found!</p>
      <img src={hungry} alt="hungry" className="hungry" />
    </div>
  );
};

export default NoResults;
