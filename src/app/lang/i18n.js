import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: require('/public/locales/en/translation.json') },
      fr: { translation: require('/public/locales/fr/translation.json') }
    },
    lng: 'en', // default language
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false // react already safe from xss
    }
  });

export default i18n;
