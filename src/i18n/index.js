import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// Translations
import translationEN from "./messages/en.json";
import translationES from "./messages/es.json";

const resources = {
  en: {
    translation: translationEN,
  },
  es: {
    translation: translationES,
  },
};

i18n.use(initReactI18next).init({
  resources,
  fallbackLng: "en",
  debug: false,
  interpolation: {
    escapeValue: false, // not needed for react as it escapes by default
  },
});

export default i18n;
