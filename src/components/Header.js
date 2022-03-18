import React from "react";
import { Link } from "react-router-dom";
import { RiAdminLine, IoFastFoodOutline } from "../utils/icons";

const Header = () => {
  return (
    <header>
      <nav>
        <div className="center-nav nav-top">
          <Link to={"/recettedepoche"} className="logo">
            <IoFastFoodOutline className="logo-icon" />
            <h1>
              Recette <br />
              de poche
            </h1>
          </Link>
          <Link to={"/recettedepoche/login"} className="login-icon">
            <RiAdminLine />
          </Link>
        </div>
      </nav>
      <div className="nav-bottom"></div>
    </header>
  );
};

export default Header;
