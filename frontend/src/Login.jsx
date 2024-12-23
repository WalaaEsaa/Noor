import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import i18n from "i18next";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
} from 'mdb-react-ui-kit';
import './Login.css';
// import logFoto from './Foto/logfoto.jpeg';

const Login = () => {
  const { t } = useTranslation();
  const currentLanguage = i18n.language;
  const isArabic = currentLanguage === 'ar';

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setErrorMessage(t('Please fill all fields.'));
      return;
    }
    setErrorMessage('');
    // Handle login logic
    console.log('Logging in:', { email, password });
  };

  return (
    <MDBContainer fluid className='p-4 custom1' dir={isArabic ? 'rtl' : 'ltr'}>
      <MDBRow>
        <MDBCol md='6' className='text-center text-md-start d-flex flex-column justify-content-center'>
          <img src={`${process.env.PUBLIC_URL}/Foto/logfoto.jpeg`} className="my-5 display-3 fw-bold ls-tight px-3 customimg" alt={t('Login illustration')} />
        </MDBCol>

        <MDBCol md='6'>
          <h1 className="text-center my-5 custmh1">{t('login1')}</h1>
          <MDBCard className='my-5 mx-auto' style={{ maxWidth: '30rem', borderRadius: '30px' }}>
            <MDBCardBody className='p-5'>
              {errorMessage && <p className="text-danger">{errorMessage}</p>}
              <input
                className='form-control mb-4 input1'
                placeholder={t('Email')}
                type='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                aria-label={t('Enter your email')}
              />
              <input
                className='form-control mb-4 input1'
                placeholder={t('password')}
                type='password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                aria-label={t('Enter your password')}
                autoComplete='current-password'
              />
              <button className='w-100 mb-4 signbtn' size='md' onClick={handleSubmit}>
                {t('login1')}
              </button>
              <div className="text-center">
                <p className='custmh1'>{t('New Account')}</p>
                <p className='custmh1'>{t('forgetpassword')}</p>
              </div>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default Login;
