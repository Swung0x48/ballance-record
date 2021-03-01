import LanguageDetector from 'i18next-browser-languagedetector'
import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import Backend from 'i18next-http-backend'

const resources = {
    en: {
        translation: {
            "LOGIN": "Login",
            "LOG_IN": "Log In"
        }
    },
    zh: {
        translation: {
            "LOGIN": "登录",
            "LOG_IN": "登录"
        }
    }
};

i18n
    .use(Backend)
    .use(LanguageDetector)
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
        resources,
        fallbackLng: 'en',
        keySeparator: false, // we do not use keys in form messages.welcome
        interpolation: {
            escapeValue: false // react already safes from xss
        }
    });

export default i18n