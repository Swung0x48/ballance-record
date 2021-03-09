import LanguageDetector from 'i18next-browser-languagedetector'
import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import Backend from 'i18next-http-backend'
import resources from './lang'

i18n
    .use(Backend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources,
        fallbackLng: 'en',
        keySeparator: false,
        react: {
            useSuspense: false
        },
        interpolation: {
            escapeValue: false
        }
    });

export default i18n