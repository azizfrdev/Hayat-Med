import React, { useEffect, useState } from 'react';
import '../assets/css/Home.css';
import { useTranslation } from 'react-i18next';
import Services from './Services';
import axios from 'axios';
import { useParams } from 'react-router-dom/dist';

const api = 'https://hayatm.onrender.com';

function Home() {
  const [activeIndex, setActiveIndex] = useState(null);
  const { t } = useTranslation();
  const { id } = useParams();
  const [doctor, setDoctor] = useState(null);

  const fetchDoctor = async () => {
    try {
      const response = await axios.get(`${api}/doctor/${id}`);
      setDoctor(response.data.doctor);
    } catch (error) {
      console.error("Error fetching doctor details:", error);
    }
  };

  useEffect(() => {
    if (id) fetchDoctor();
  }, [id]);

  const images = [
    'https://hayatmed.uz/en/uploads/gallery/big-30639e.jpg',
    'https://hayatmed.uz/en/uploads/gallery/big-7e8a5a.jpg',
    'https://hayatmed.uz/en/uploads/gallery/big-a6e7b5.jpg',
  ];

  const buttonImages = [
    { white: 'https://hayatmed.uz/themes/app-en/images/btn/btn_white.png', blue: 'https://hayatmed.uz/themes/app-en/images/btn/btn_blue.png' },
    { white: 'https://hayatmed.uz/themes/app-en/images/btn/btn_white.png', blue: 'https://hayatmed.uz/themes/app-en/images/btn/btn_blue.png' },
    { white: 'https://hayatmed.uz/themes/app-en/images/btn/btn_white.png', blue: 'https://hayatmed.uz/themes/app-en/images/btn/btn_blue.png' },
  ];

  return (
    <main className="main">
      <div className="intro">
        <div className="intro__inner">
          <div className="intro__img-container">
            {images.map((src, index) => (
              <div
                key={index}
                className={`intro__img-wrap ${activeIndex === index ? 'no-gradient' : ''}`}
              >
                <img className="intro__img" src={src} alt="#!" />
              </div>
            ))}
            <img className="intro__line-img" src='https://hayatmed.uz/themes/app/images/bg/index/puls.svg' alt='#!'></img>
          </div>

          <div className="intro__btn-container">
            {['diagnostics', 'hospital', 'children'].map((key, index) => (
              <a
                href="#!"
                className="intro__btn"
                key={index}
                onMouseOver={() => setActiveIndex(index)}
                onMouseOut={() => setActiveIndex(null)}
              >
                <div className="intro__btn-img-wrap">
                  <img
                    src={buttonImages[index].white}
                    alt="#!"
                    className="intro__btn-img"
                  />
                  <img
                    src={buttonImages[index].blue}
                    alt="#!"
                    className="intro__btn-img intro__btn-img-second"
                  />
                </div>
                {t(key)}
              </a>
            ))}
          </div>
        </div>
      </div>
      <section className='free-cons'>
        <div className="free-cons__inner">
          <div className="container free-cons__slier-menu">
            <button className="free-cons__slier-arrow free-cons__slier-arrow-prev">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#007aff" d="M512 256A256 256 0 1 0 0 256a256 256 0 1 0 512 0zM271 135c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-87 87 87 87c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0L167 273c-9.4-9.4-9.4-24.6 0-33.9L271 135z"/></svg>
            </button>
            <div className="free-cons__dots-container swiper-pagination-clickable swiper-pagination-bullets">
              <button className="free-cons__dot"></button>
              <button className="free-cons__dot"></button>
              <button className="free-cons__dot"></button>
              <button className="free-cons__dot"></button>
            </div>
            <button className='free-cons__slier-arrow free-cons__slier-arrow-next'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#007aff" d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM241 119c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l31 31L120 184c-13.3 0-24 10.7-24 24s10.7 24 24 24l118.1 0-31 31c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l72-72c9.4-9.4 9.4-24.6 0-33.9l-72-72z"/></svg>
            </button>
          </div>
          <div className="swiper free-slider free-slider--start swiper-container-initialized swiper-container-horizontal">
            <div className="swiper-wrapper">
              <div className="swiper-slide free-slider__item swiper-slide-duplicate">
                <img src="https://hayatmed.uz/en/uploads/sliders/10/slide-original-1920x508.jpg" alt="#!" className="free-slider__item-img" />
                <div className="container free-slider__item-contant">
                  <h2 className="free-slider__item-title">{t("peditarion")}</h2>
                  <p className="free-slider__item-text">
                  {t('carouselText')}
                  </p>
                  <a href="#!" className="free-slider__item-btn">
                    <span className="free-slider__item-btn-text" style={{color: 'white'}}>{t("more")}</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Services />
      <section className="specialist">
        <h2 className="title specialist__title">{t('specialist')}</h2>
        <div className="container specialist__intro">
        {doctor ? (
        <div>
          <p><strong>Name:</strong> {doctor.name}</p>
          <p><strong>Position:</strong> {doctor.position}</p>
          <p><strong>Phone:</strong> {doctor.phone}</p>
        </div>
        ) : (
          <p>Loading doctor details...</p>
        )}
        </div>
      </section>
    </main>
  );
}

export default Home;
