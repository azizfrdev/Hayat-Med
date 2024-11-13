import { useTranslation } from "react-i18next";
import '../App.css'

function BasicButtonExample() {
  const { i18n } = useTranslation();

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <ul className="lang-list">
      <li className="lang-list__item" onClick={() => changeLanguage("uz")} style={{ cursor: "pointer" }}>
        <p className="lang-list__link" style={{ width: 26 }}> UZ </p>
      </li>
      <li className="lang-list__item" onClick={() => changeLanguage("ru")} style={{ cursor: "pointer" }}>
        <p className="lang-list__link"  style={{ width: 26 }}> Ру </p>
      </li>
      <li className="lang-list__item" onClick={() => changeLanguage("en")} style={{ cursor: "pointer" }}>
        <p className="lang-list__link" style={{ width: 26 }}> EN </p>
      </li>
    </ul>
  );
}

export default BasicButtonExample;
