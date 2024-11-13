import React from "react";
import Navbar from "./NavBar";
import { Link } from "react-router-dom";
import App from "./Burger";

function Header() {
  return (
    <header>
      <div className="container header__inner">
        <Link to="/home" className="logo">
          <img src="https://hayatmed.uz/uploads/logo.svg" alt="#!" />
        </Link>
        <Navbar />
        <App />
      </div>
    </header>
  );
}

export default Header;
