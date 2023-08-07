import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './header.css';
import brazilFlag from '/brazilian_flag.webp';
import usaFlag from '/circle-flag-of-usa.webp';
import espanhaFlag from '/flag-spain-circle.webp';

const languageFlags: Record<string, string> = {
    en: usaFlag,
    pt: brazilFlag,
    es: espanhaFlag,
};

export function Header() {
    const { t, i18n } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);
    const [selectedLanguage, setSelectedLanguage] = useState("pt");

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const selectLanguage = (language: string) => {
        setSelectedLanguage(language);
        i18n.changeLanguage(language);
        setIsOpen(false);
    };

    return (
        <header>
            <h1>{t("title")}</h1>

            <div className="dropdown">
                <div className="dropdown-toggle" onClick={toggleDropdown}>
                    <img src={languageFlags[selectedLanguage]} alt={selectedLanguage} />
                    <span>{selectedLanguage}</span>
                    <FontAwesomeIcon icon={isOpen ? faChevronUp : faChevronDown} color='#fff' />
                </div>

                {isOpen && (
                    <div className="dropdown-menu">
                        {Object.keys(languageFlags).map((language) => (
                            <div className="dropdown-item" key={language} onClick={() => selectLanguage(language)}>
                                <img src={languageFlags[language]} alt={language} />
                                <span>{language}</span>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </header>
    );
}
