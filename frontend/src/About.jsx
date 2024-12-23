import React from 'react'
import './About.css'
import { useTranslation } from 'react-i18next';
import i18n from "i18next";

const About = () => {
    const { t } = useTranslation();
    const currentLanguage = i18n.language;
    const isArabic = currentLanguage === 'ar';

    return (
        <div className='container'dir={isArabic?'rtl':'trl'}>
            <div className='container-p'>
                <h2>{t('ziel2')}</h2>
                <p>{t('ziel')}</p>
            </div>
            <div>
                <div className='container-p'>
                    <h2>{t('nachricht')}</h2>
                    <p>{t('nachricht1')}</p>
                </div>
            </div>
        </div>
    );
}

export default About;
