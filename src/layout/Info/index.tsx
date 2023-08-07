import { useTranslation } from 'react-i18next'
import './info.css'

export function Info() {
    const { t } = useTranslation()
    return (
        <section id='info'>
            <div>
                <h2>{t('description.title')}</h2>

                <p>
                    {t('description.text')}
                </p>
            </div>

            <div>
                <h2>{t('table.title')}</h2>

                <table>
                    <thead>
                        <tr>
                            <th>{t('table.thead.titleThead')}</th>
                            <th>{t('table.thead.question')}</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Object.keys(t('table.brands')).map((brandKey) => (
                            <tr key={brandKey}>
                                <td>{t(`table.brands.${brandKey}`)}</td>
                                <td>{t('table.compatibility')}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </section>
    )
}