import React from "react";
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPhone} from '@fortawesome/free-solid-svg-icons';
import YandexMap from "../api/YandexMap";

const phone = <FontAwesomeIcon icon={faPhone} style={{color: "#ffffff",}} />

function Footer() {
  const { t } = useTranslation();
  return (
    <footer>
      <div className="container footer__inner">
        <div className="footer__contacts">
          <h2 className="title footer__title">{t("contact")}</h2>
          <div className="footer__item">
            <h3 className="footer__title-small">{t("phone")}</h3>
            <a href="#!" className="footer__text">
              <span>Callcentre: </span> +998 71 200-88-66
            </a>
            <a href="#!" className="footer__text">
              <span>Hayat Hospital: </span> +998 71 209-88-66
            </a>
          </div>
          <div className="footer__item">
            <h3 className="footer__title-small">{t("address")}</h3>
            <p className="footer__text">{t("region")}</p>
          </div>
          <div className="footer__item">
            <h3 className="footer__title-small">{t("social")}</h3>
            <p className="footer__text">{t("subscribe")}</p>
            <div className="footer__social-wrap">
              <a href="https://www.facebook.com/hayatmed.uz/" className="footer__social-link" target={"_blank"}>
                <img src="https://hayatmed.uz/themes/app-en/images/icon/social/face.png" alt="#!" className="footer__social-img"/>
              </a>
              <a href="https://www.instagram.com/hayatmedcentre/ " className="footer__social-link" target={"_blank"}>
                <img src="https://hayatmed.uz/themes/app-en/images/icon/social/insta.png" alt="#!" className="footer__social-img"/>
              </a>
              <a href="https://t.me/HAYAT_Medical_Centre" className="footer__social-link" target={"_blank"}>
                <img src="https://hayatmed.uz/themes/app-en/images/icon/social/telegram.png" alt="#!" className="footer__social-img"/>
              </a>
            </div>
          </div>
          <a href="tel:+998712008866" className="btn-accent doctor__info-btn">
            {t('call')} <span>{phone}</span>
          </a>
          <div className="footer__bottom-item" style={{marginTop: 50}}>
            <span>© 2024 Copyright |</span>
            <a href="https://www.limon.uz">Website developement: <span>Limon</span></a>
          </div>
        </div>
        <div className="footer__map">
          <div id="myMap">
            <YandexMap />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
