import { useTranslation } from 'react-i18next'
import './info.css'

export function Info() {
    const { t } = useTranslation()
    return (
        <section id='info'>
            <h2>{t('description.title')}</h2>

            <p>
                {t('description.text')}
            </p>
        </section>
    )
}