import { useTranslation } from 'react-i18next'
import './info.css'

export function Info() {
    const { t } = useTranslation()

    return (
        <section id='info'>
            <div>
                <h2>{t('description.title')}</h2>
                <p>{t('description.text')}</p>
            </div>

            <div>
                <h2>{t('titleTable')}</h2>

                <table>
                    <thead>
                        <tr>
                            <th>{t('Marca')}</th>
                            <th>{t('Compatível')}</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{t('Apple')}</td>
                            <td>{t('Sim')}</td>
                        </tr>
                        <tr>
                            <td>{t('Samsung')}</td>
                            <td>{t('Sim')}</td>
                        </tr>
                        <tr>
                            <td>{t('Motorola')}</td>
                            <td>{t('Sim')}</td>
                        </tr>
                        <tr>
                            <td>{t('Xiaomi')}</td>
                            <td>{t('Sim')}</td>
                        </tr>
                        <tr>
                            <td>{t('Huawei')}</td>
                            <td>{t('Sim')}</td>
                        </tr>
                        <tr>
                            <td>{t('Google Pixel')}</td>
                            <td>{t('Sim')}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>
    )
}