import React from "react";
import { Link } from "react-router-dom";
import warning from "../assets/images/warning.svg"

const Login = () => {
  return (
    <main className="construction">
      <p>Page Under Construction</p>
      <Link to="/recettedepoche">Go to Home Page</Link>
      <img
        src={warning}
        alt="404"
        className="construction"
      />
    </main>
  );
};

export default Login;
