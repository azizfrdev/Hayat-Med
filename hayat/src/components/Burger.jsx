import React, { useState } from "react"; 
import "../assets/css/Burger.css";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import BasicButtonExample from "../lang/LangButton";

const App = () => {
  const { t } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setMenuOpen(false)
  }

  return (
    <div className="app">
      <div className="header2">
        <div className="burger-logo" onClick={toggleMenu}>
          {menuOpen ? "✖" : "☰"} 
        </div>
        {menuOpen && (
          <nav className="nav-menu open">
            <div className="nav__inner">
              <ul className="nav__list">
                <li>
                  <Link to="/about" className="nav-link" onClick={closeMenu}>
                    {t("about")}
                  </Link>
                </li>
                <li>
                  <Link to="/services" className="nav-link" onClick={closeMenu}>
                    {t("services")}
                  </Link>
                </li>
                <li>
                  <Link to="/doctors" className="nav-link" onClick={closeMenu}>
                    {t("doctors")}
                  </Link>
                </li>
                <li>
                  <Link to="/news" className="nav-link" onClick={closeMenu}>
                    {t("news")}
                  </Link>
                </li>
                <li>
                  <Link to="/team" className="nav-link" onClick={closeMenu}>
                    {t("team")}
                  </Link>
                </li>
                <li>
                  <Link to="/media" className="nav-link" onClick={closeMenu}>
                    {t("media")}
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="nav-link" onClick={closeMenu}>
                    {t("contact")}
                  </Link>
                </li>
              </ul>
              <BasicButtonExample />
              <Link to="/results" className="nav__link-know" onClick={closeMenu}>
                {t("results")}
              </Link>
            </div>
          </nav>
        )}
      </div>
    </div>
  );
};

export default App;
