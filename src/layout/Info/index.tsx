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
                <h2>Marcas de Telefones Compatíveis</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Marca</th>
                            <th>Compatível?</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>iPhone (Apple)</td>
                            <td>Sim</td>
                        </tr>
                        <tr>
                            <td>Samsung</td>
                            <td>Sim</td>
                        </tr>
                        <tr>
                            <td>Motorola</td>
                            <td>Sim</td>
                        </tr>
                        <tr>
                            <td>Xiaomi</td>
                            <td>Sim</td>
                        </tr>
                        <tr>
                            <td>Huawei</td>
                            <td>Sim</td>
                        </tr>
                        <tr>
                            <td>Google Pixel</td>
                            <td>Sim</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>
    )
}