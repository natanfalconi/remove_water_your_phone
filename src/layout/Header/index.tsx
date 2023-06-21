import { useTranslation } from 'react-i18next';
import './header.css';

export function Header() {
    const { t } = useTranslation();
    const { i18n } = useTranslation();

    const changeLanguage = (event: any) => {
        const selectedLanguage = event.target.value;
        i18n.changeLanguage(selectedLanguage);
    };

    return (
        <header>
            <h1>{t('welcomeMessage')}</h1>

            <div>
                <select onChange={changeLanguage}>
                    <option value="en">English</option>
                    <option value="pt">Português</option>
                </select>
            </div>
        </header>
    )
}