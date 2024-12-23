import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import LanguageIcon from '@mui/icons-material/Language';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom'; 
import i18n from "i18next";
import './NavBar.css';

const NavBar = () => {
    const { t } = useTranslation();
    const currentLanguage = i18n.language;
    const isArabic = currentLanguage === 'ar';
  
    return (
        <Navbar expand="lg" dir={isArabic ? 'rtl' : 'ltr'}>
            <Container>
                <Navbar.Brand href="#home">
                    <img src='./Foto/Logo2.jpeg' alt='' className="logo" />
                </Navbar.Brand>
                <NavLink  className="name-logo" to="">{t('logo name')}</NavLink>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mx-auto">
                        <NavLink  className="nav-link" to="">{t('Home')}</NavLink>
                      
                        <NavDropdown title={t('Sections')} id="basic-nav-dropdown">
                            <NavDropdown.Item href="#islamic">{t('Islamic Sciences')}</NavDropdown.Item>
                            <NavDropdown.Item href="#children">{t('Children')}</NavDropdown.Item>
                            <NavDropdown title={t('Womens')} id="nested-dropdown">
                                <NavDropdown.Item href="#in-person">{t('In-Person')}</NavDropdown.Item>
                                <NavDropdown.Item href="#online">{t('Online')}</NavDropdown.Item>
                            </NavDropdown>
                        </NavDropdown>
                      
                        <NavLink className="nav-link"  to="/about">{t('About Us')}</NavLink>
                        <NavLink  className="nav-link" to="">{t('Contact Us')}</NavLink>
                        <NavDropdown
                        title={<LanguageIcon className='icono' style={{ color: '#f2d04b', cursor: 'pointer' }} />}
                        id="language-dropdown"
                        align="end"
                        style={{ marginLeft: '10px' }}
                    >
                        <NavDropdown.Item onClick={() => i18n.changeLanguage("ar")}>العربية</NavDropdown.Item>
                        <NavDropdown.Item onClick={() => i18n.changeLanguage("en")}>English</NavDropdown.Item>
                    </NavDropdown>

                    </Nav>
         
                  <NavLink  to="/register" className="button">{t('login')}</NavLink>
                  <NavLink to="/login" className="button">{t('Registration')}</NavLink>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavBar;
