import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import i18n from 'i18next';
import './Childe.css';
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBRadio,
} from 'mdb-react-ui-kit';

const Childe = () => {
  const { t } = useTranslation();
  const currentLanguage = i18n.language;
  const isArabic = currentLanguage === 'ar';

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    nationalNumber: '',
    birthDate: '',
    phone1: '',
    phone2: '',
    group: '',
    section: '',
    password: '',
    confirmPassword: '',
    gender: '',
    education: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form validation and submission logic
    console.log('Form submitted:', formData);
  };

  return (
    <MDBContainer fluid className="p-4 custom1" dir={isArabic ? 'rtl' : 'ltr'}>
      <MDBRow className="d-flex justify-content-center align-items-center">
        <MDBCol md="6">
          <h2 className="text-center my-5 custmh1">{t('New Account4')}</h2>
          <MDBCard className="my-5 mx-auto" style={{ maxWidth: '50rem' }}>
            <MDBCardBody className="p-5">
              <form onSubmit={handleSubmit}>
                <MDBRow className="mb-4">
                  <MDBCol>
                    <input
                      className="mb-4 custom-input"
                      placeholder={t('Name')}
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      type="text"
                    />
                  </MDBCol>
                  <MDBCol>
                    <input
                      className="mb-4 custom-input"
                      placeholder={t('Email')}
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      type="email"
                    />
                  </MDBCol>
                </MDBRow>
                <MDBRow className="mb-4">
                  <MDBCol>
                    <input
                      className="mb-4 custom-input"
                      placeholder={t('national number')}
                      name="nationalNumber"
                      value={formData.nationalNumber}
                      onChange={handleInputChange}
                      type="text"
                    />
                    <input
                      className="mb-4 custom-input"
                      placeholder={t('Birth')}
                      name="birthDate"
                      value={formData.birthDate}
                      onChange={handleInputChange}
                      type="date"
                    />
                  </MDBCol>
                  <MDBCol>
                    <div className="d-flex align-items-center mb-5 custom-input1">
                      <span className="ms-2">{t('Type')}:</span>
                      <MDBRadio
                        name="gender"
                        id="inlineRadio2"
                        value="Female"
                        label={t('Female')}
                        onChange={handleInputChange}
                      />
                      <MDBRadio
                        name="gender"
                        id="inlineRadio3"
                        value="Male"
                        label={t('Male')}    
                        onChange={handleInputChange}
                      />
                    </div>

                    <div className="d-flex align-items-center mb-5 custom-input1">
                      <span className="ms-2">{t('Teaching')} :</span>
                      <MDBRadio
                        name="education"
                        id="inlineRadio4"
                        value="Azhar"
                        label={t('Teaching1')}
                        onChange={handleInputChange}
                      />
                      <MDBRadio
                        name="education"
                        id="inlineRadio5"
                        value="Normal"
                        label={t('Teaching2')}
                        onChange={handleInputChange}
                      />
                    </div>
                  </MDBCol>
                </MDBRow>
                <MDBRow className="mb-4">
                  <MDBCol>
                    <input
                      className="mb-4 custom-input"
                      placeholder={t('Phone1')}
                      name="phone1"
                      value={formData.phone1}
                      onChange={handleInputChange}
                      type="text"
                    />
                  </MDBCol>
                  <MDBCol>
                    <input
                      className="mb-4 custom-input"
                      placeholder={t('Phone')}
                      name="phone2"
                      value={formData.phone2}
                      onChange={handleInputChange}
                      type="text"
                    />
                  </MDBCol>
                </MDBRow>
                <MDBRow className="mb-4">
                  <MDBCol>
                    <input
                      className="mb-4 custom-input"
                      placeholder={t('Gruppe')}
                      name="group"
                      value={formData.group}
                      onChange={handleInputChange}
                      type="text"
                    />
                  </MDBCol>
                  <MDBCol>
                    <input
                      className="mb-4 custom-input"
                      placeholder={t('section')}
                      name="section"
                      value={formData.section}
                      onChange={handleInputChange}
                      type="text"
                    />
                  </MDBCol>
                </MDBRow>
                <MDBRow className="mb-4">
                  <MDBCol>
                    <input
                      className="mb-4 custom-input"
                      placeholder={t('password')}
                      name="password"
                      value={formData.password}
                      onChange={handleInputChange}
                      type="password"
                    />
                  </MDBCol>
                  <MDBCol>
                    <input
                      className="mb-4 custom-input"
                      placeholder={t('password2')}
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleInputChange}
                      type="password"
                    />
                  </MDBCol>
                </MDBRow>
                <MDBRow className="justify-content-center">
                  <MDBCol md="6">
                    <button className="w-100 mb-4 signbtn" size="md" type="submit">
                      {t('New Account')}
                    </button>
                  </MDBCol>
                </MDBRow>
              </form>
              <div className="text-center">
                <p className="custmh1">{t('Have Account')}</p>
              </div>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default Childe;
