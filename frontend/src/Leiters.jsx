import React, { useState } from 'react';
import './register.css';
import { useTranslation } from 'react-i18next';
import i18n from "i18next";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
} from 'mdb-react-ui-kit';

const Register = () => {
  const { t } = useTranslation();
  const currentLanguage = i18n.language;
  const isArabic = currentLanguage === 'ar';

  // State for form data
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone1: '',
    phone2: '',
    password: '',
    confirmPassword: '',
    section: '',
    day: '',
    time: '',
  });

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (!formData.name || !formData.email || !formData.password) {
      alert(t('Please fill all required fields'));
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      alert(t('Passwords do not match!'));
      return;
    }

    // Log form data or submit to API
    console.log('Form Data:', formData);
    alert(t('Form Submitted Successfully'));
  };

  return (
    <MDBContainer fluid className='p-4 custom1' dir={isArabic ? 'rtl' : 'ltr'}>
      <MDBRow className="d-flex justify-content-center align-items-center">
        <MDBCol md='6'>
          <h2 className="text-center my-5 custmh1">{t('New Account1')}</h2>
          <MDBCard className='my-5 mx-auto' style={{ maxWidth: '50rem' }}>
            <MDBCardBody className='p-5'>
              <form onSubmit={handleSubmit}>
                <MDBRow className='mb-4'>
                  <MDBCol>
                    <input
                      className='mb-4 custom-input'
                      placeholder={t('Name')}
                      type='text'
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </MDBCol>
                  <MDBCol>
                    <input
                      className='mb-4 custom-input'
                      placeholder={t('Email')}
                      type='email'
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </MDBCol>
                </MDBRow>
                <MDBRow className='mb-4'>
                  <MDBCol>
                    <input
                      className='mb-4 custom-input'
                      placeholder={t('Phone1')}
                      type='text'
                      name="phone1"
                      value={formData.phone1}
                      onChange={handleChange}
                    />
                  </MDBCol>
                  <MDBCol>
                    <input
                      className='mb-4 custom-input'
                      placeholder={t('Phone')}
                      type='text'
                      name="phone2"
                      value={formData.phone2}
                      onChange={handleChange}
                    />
                  </MDBCol>
                </MDBRow>
                <MDBRow className='mb-4'>
                  <MDBCol>
                    <input
                      className='mb-4 custom-input'
                      placeholder={t('password')}
                      type='password'
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                    />
                  </MDBCol>
                  <MDBCol>
                    <input
                      className='mb-4 custom-input'
                      placeholder={t('password2')}
                      type='password'
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                    />
                  </MDBCol>
                </MDBRow>

                <MDBRow className='mb-4 justify-content-center'>
                  <MDBCol md='3'>
                    <select
                      className='form-select custom-select custom-input'
                      name="section"
                      value={formData.section}
                      onChange={handleChange}
                    >
                      <option value="">{t('sections')}</option>
                      <option value="section1">{t('Option 1')}</option>
                      <option value="section2">{t('Option 2')}</option>
                      <option value="section3">{t('Option 3')}</option>
                    </select>
                  </MDBCol>
                  <MDBCol md='3'>
                    <select
                      className='form-select custom-select custom-input'
                      name="day"
                      value={formData.day}
                      onChange={handleChange}
                    >
                      <option value="">{t('Day')}</option>
                      <option value="monday">{t('Monday')}</option>
                      <option value="tuesday">{t('Tuesday')}</option>
                      <option value="wednesday">{t('Wednesday')}</option>
                    </select>
                  </MDBCol>
                  <MDBCol md='3'>
                    <select
                      className='form-select custom-select custom-input'
                      name="time"
                      value={formData.time}
                      onChange={handleChange}
                    >
                      <option value="">{t('Time')}</option>
                      <option value="morning">{t('Morning')}</option>
                      <option value="afternoon">{t('Afternoon')}</option>
                      <option value="evening">{t('Evening')}</option>
                    </select>
                  </MDBCol>
                </MDBRow>

                <MDBRow className='justify-content-center'>
                  <MDBCol md='6'>
                    <button className='w-100 mb-4 signbtn' size='md' type="submit">
                      {t('New Account')}
                    </button>
                  </MDBCol>
                </MDBRow>
              </form>
              <div className="text-center">
                <p className='custmh1'>{t('Have Account')}</p>
              </div>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default Register;
