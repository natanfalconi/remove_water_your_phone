import { useTranslation } from 'react-i18next';
import './footer.css';

export function Footer() {
    const { t } = useTranslation()
    const fullYear = new Date().getFullYear();

    return (
        <footer>
            <p>&copy; {fullYear} {t('footer.title')} <a href='https://www.linkedin.com/in/natan-falconi' target='__blank'>Falconi</a>.</p>
        </footer>
    )
}