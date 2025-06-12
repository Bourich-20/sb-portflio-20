import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enTranslations from '/public/locales/en/translation.json';
import frTranslations from '/public/locales/fr/translation.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: enTranslations },
      fr: { translation: frTranslations }
    },
    lng: 'fr', // default language
    fallbackLng: 'fr',
    interpolation: {
      escapeValue: false // react already safe from xss
    }
  });

export default i18n;
