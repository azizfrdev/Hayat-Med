import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import BasicButtonExample from "../lang/LangButton";

function Navbar() {
  const { t } = useTranslation();
  return (
    <div className="nav">
      <div className="nav__inner">
        <ul className="nav__list">
          <li>
            <Link to="/about" className="nav-link">{t("about")}</Link>
          </li>
          <li>
            <Link to="/services" className="nav-link">{t("services")}</Link>
          </li>
          <li>
            <Link to="/doctors" className="nav-link">{t("doctors")}</Link>
          </li>
          <li>
            <Link to="/news" className="nav-link">{t("news")}</Link>
          </li>
          <li>
            <Link to="/team" className="nav-link">{t("team")}</Link>
          </li>
          <li>
            <Link to="/media" className="nav-link">{t("media")}</Link>
          </li>
          <li>
            <Link to="/contact" className="nav-link">{t("contact")}</Link>
          </li>
        </ul>
        <BasicButtonExample />
        <Link to='/results' className="nav__link-know">{t("results")}</Link>
      </div>
    </div>
  );
}

export default Navbar;
