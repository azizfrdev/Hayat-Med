import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

i18n.use(LanguageDetector).use(initReactI18next).init({
  debug: true,
  lng: "en",
  resources: {
    en: {
      translation: {
        about: 'About us',
        services: 'Services',
        doctors: 'Doctors',
        news: 'News',
        team: 'Our team',
        media: 'Media',
        contact: 'Contact',
        results: 'Test Results',
        phone: 'Phone',
        address: 'Address',
        region: 'Tashkent region, Kibrai district, Salar urban settlement, Gulimamur Street, 5/1',
        social: 'Social Network',
        subscribe: 'Subscribe',
        call: 'Call us'
      },
    },
    ru: {
      translation: {
        about: 'О нас',
        services: 'Услуги',
        doctors: 'Bрачи',
        news: 'Новости',
        team: 'Наша команда',
        media: 'Медиа',
        contact: 'Контакты',
        results: 'Результаты анализов',
        phone: 'Tелефон',
        address: 'Адрес',
        region: 'Ташкентская область, Кибрайский район, городской посёлок Салар, улица Гулимамур, 5/1',
        social: 'Социальная сеть',
        subscribe: 'Подписаться',
        call: 'Позвоните нам',
      }
    },
    uz: {
      translation: {
        about: 'Biz haqimizda',
        services: 'Xizmatlar',
        doctors: 'Shifokorlar',
        news: "Yangiliklar",
        team: 'Bizning jamoamiz',
        media: 'OAV',
        contact: "Aloqa",
        results: 'Tahlil natijalari',
        phone: 'Telefon',
        address: 'Manzil',
        region: "Toshkent viloyati, Qibray tumani, Salar shaharchasi, Gulimamur ko'chasi, 5/1",
        social: 'Ijtimoiy tarmoq',
        subscribe: "Obuna bo'ling",
        call: "Bizga qo‘ng‘iroq qiling",
      }
    },
  }
})

export default i18n;