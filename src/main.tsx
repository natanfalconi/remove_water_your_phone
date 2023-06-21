import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import ReactDOM from 'react-dom/client';
import { I18nextProvider } from 'react-i18next';
import enTranslations from '../language/en.json';
import ptTranslations from '../language/pt_br.json';
import { App } from './App.tsx';
import './index.css';

i18n
  .use(LanguageDetector)
  .init({
    resources: {
      en: { translation: enTranslations },
      pt: { translation: ptTranslations }
    },
    fallbackLng: 'en', // Idioma padrão
    debug: true, // Ative o modo de depuração para ver mensagens no console
    interpolation: {
      escapeValue: false // Não escapar strings traduzidas
    }
  });

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <I18nextProvider i18n={i18n}>
    <App />
  </I18nextProvider>,
)
