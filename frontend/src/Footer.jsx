import React from 'react';
import './Footer.css';
import { Nav } from 'react-bootstrap'; 
import { useTranslation } from 'react-i18next';
import i18n from "i18next";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const Footer = () => {
  const { t } = useTranslation();
  const currentLanguage = i18n.language;
  const isArabic = currentLanguage === 'ar';

  return (
    <div className='footer' dir={isArabic ? 'rtl' : 'ltr'}>
      <div className="footer-content">
        <Nav className="footer-nav">
          <Nav.Link href="#about">{t('privaicy')}</Nav.Link>
          <Nav.Link href="#about">{t('Contact Us')}</Nav.Link>
          <Nav.Link href="#services">{t('About Us')}</Nav.Link>
          <Nav.Link href="#contact">{t('Voraussetzung')}</Nav.Link>
          <Nav.Link href="#privacy">{t('Sections')}</Nav.Link>  
        </Nav>
        <div className='footer-icons'>
          <FacebookIcon />
          <InstagramIcon />
          <WhatsAppIcon />
        </div>
      </div>
      <hr className='footer-line'/>
      <p>{t('footerline')}</p>
    </div>
  );
};

export default Footer;
