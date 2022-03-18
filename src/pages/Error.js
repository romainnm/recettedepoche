import React from "react";
import { Link } from "react-router-dom";
import warning from "../assets/images/warning.svg";
const Error = () => {
  return (
    <main className="construction">
      <p>Error</p>
      <Link to="/">Go to Home Page</Link>
      <img src={warning} alt="404" className="construction" />
    </main>
  );
};

export default Error;
