import React, { useState } from 'react';  
import { useTranslation } from 'react-i18next';  
import i18n from 'i18next';  
import './Teacher.css';  
import './Leiters.css';  
import axios from "axios";  

import {  
  MDBContainer,  
  MDBRow,  
  MDBCol,  
  MDBCard,  
  MDBCardBody,  
} from 'mdb-react-ui-kit';  

const Teacher = () => {  
  const { t } = useTranslation();  
  const currentLanguage = i18n.language;  
  const isArabic = currentLanguage === 'ar';  

  const [errors, setErrors] = useState({});  
  // State for form inputs  
  const [formData, setFormData] = useState({  
    name: '',  
    phoneWhats: '',  
    phoneTelgram: '',  
    email: '',  
    time: '',  
    day: '',  
    password: '',  
    confirmPassword: '',  
    section: '',  // Added section field  
  });  
// Validate field  
const validateFields = () => {  
  const newErrors = {};  
  if (!formData.name) newErrors.name = t('Name is required.');  
  if (!formData.email) newErrors.email = t('Email is required.');  
  if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = t('Email is not valid.');  
  if (!formData.password) newErrors.password = t('Password is required.');  
  if (formData.password !== formData.confirmPassword) newErrors.confirmPassword = t('Passwords do not match.');  


  // Phone number validation (Example: must be mostly digits, allow optional space, hyphen or parentheses)  
  const phoneRegex = /^\+?[1-9]\d{0,3}[-\s]?(\(?\d{1,4}?\)?[-\s]?)?\d{1,4}[-\s]?\d{1,4}[-\s]?\d{1,9}$/;  
  if (!phoneRegex.test(formData.phoneWhats)) newErrors.phoneWhats = t('Phone  is not valid.');  
  if (formData.phoneTelgram && !phoneRegex.test(formData.phoneTelgram)) newErrors.phone2 = t('Phone  is not valid.');  

  // Include additional validation for phone numbers and groups as needed  

  setErrors(newErrors);  
  return Object.keys(newErrors).length === 0;  
};  


  // Handle input changes  
  const handleChange = (e) => {  
    const { name, value } = e.target;  
    setFormData((prevData) => ({ ...prevData, [name]: value })); 
    // Clear any error for this field  
    setErrors((prevErrors) => ({ ...prevErrors, [name]: '' }));   
  };  

 
  // Handle form submission  
  const handleSubmit = async (e) => {  
    e.preventDefault(); // Prevent default form submission  
    if (!validateFields()) return; // Validate fields before sending  

    console.log('Form Submitted:', formData); // Log the data to be sent  

    // Send data to API  
    await sendStudentstoapi();  
    
    alert(t('Student account created successfully!')); // Alert on success  

    // Reset form after submission  
    setFormData({  
      name: '',  
    phoneWhats: '',  
    phoneTelgram: '',  
    email: '',  
    time: '',  
    day: '',  
    password: '',  
    confirmPassword: '',  
    section: '',  // Added section field 
      
    });  
};
//connect with API (backend)


 
  
async function sendStudentstoapi() {  
  try {  
      const { data } = await axios.post('http://localhost:9092/api/teachers/register', formData);  
      console.log('Response Data:', data);  
  } catch (error) {  
      console.error('Error sending data:', error.response ? error.response.data : error.message);  
      alert(t('Error sending data. Please try again.')); // Alert user of error  
  }  
}

  // Dropdown options  
  const sections = [  
    { value: '', label: t('sections') },  
    { value: 'math', label: t('Mathematics') },  
    { value: 'science', label: t('Science') },  
    { value: 'history', label: t('History') },  
  ];  

  const days = [  
    { value: '', label: t('Day') },  
    { value: 'monday', label: t('Monday') },  
    { value: 'tuesday', label: t('Tuesday') },  
    { value: 'wednesday', label: t('Wednesday') },  
  ];  

  const times = [  
    { value: '', label: t('Time') },  
    { value: 'morning', label: t('Morning') },  
    { value: 'afternoon', label: t('Afternoon') },  
    { value: 'evening', label: t('Evening') },  
  ];  

  return (  
    <MDBContainer fluid className="p-4 custom1" dir={isArabic ? 'rtl' : 'ltr'}>  
      <MDBRow className="d-flex justify-content-center align-items-center">  
        <MDBCol md="6">  
          <h2 className="text-center my-5 custmh1">{t('New Account2')}</h2>  
          <MDBCard className="my-5 mx-auto" style={{ maxWidth: '50rem' }}>  
            <MDBCardBody className="p-5">  
              <form onSubmit={handleSubmit}>  
                <MDBRow className="mb-4">  
                  <MDBCol>  
                    <input  
                      className="mb-4 custom-input"  
                      placeholder={t('Name')}  
                      type="text"  
                      name="name"  
                      value={formData.name}  
                      onChange={handleChange}  
                    />  
                  </MDBCol>  
                  <MDBCol>  
                    <input  
                      className="mb-4 custom-input"  
                      placeholder={t('Email')}  
                      type="email"  
                      name="email"  
                      value={formData.email}  
                      onChange={handleChange}  
                    />  
                  </MDBCol>  
                </MDBRow>  
                <MDBRow className="mb-4">  
                  <MDBCol>  
                    <input  
                      className="mb-4 custom-input"  
                      placeholder={t('phoneWhats')}  
                      type="text"  
                      name="phoneWhats"  
                      value={formData.phoneWhats}  
                      onChange={handleChange}  
                    />  
                  </MDBCol>  
                  <MDBCol>  
                    <input  
                      className="mb-4 custom-input"  
                      placeholder={t('phoneTelgram')}  
                      type="text"  
                      name="phoneTelgram"  
                      value={formData.phoneTelgram}  
                      onChange={handleChange}  
                    />  
                  </MDBCol>  
                </MDBRow>  
                <MDBRow className="mb-4">  
                  <MDBCol>  
                    <input  
                      className="mb-4 custom-input"  
                      placeholder={t('password')}  
                      type="password"  
                      name="password"  
                      value={formData.password}  
                      onChange={handleChange}  
                    />  
                  </MDBCol>  
                  <MDBCol>  
                    <input  
                      className="mb-4 custom-input"  
                      placeholder={t('password2')}  
                      type="password"  
                      name="confirmPassword"  
                      value={formData.confirmPassword}  
                      onChange={handleChange}  
                    />  
                  </MDBCol>  
                </MDBRow>  
                <MDBRow className="mb-4 justify-content-center">  
                  <MDBCol md="3">  
                    <select  
                      className="form-select custom-select custom-input"  
                      name="section"  
                      value={formData.section}  // Updated to use section  
                      onChange={handleChange}  
                    >  
                      {sections.map((option) => (  
                        <option key={option.value} value={option.value}>  
                          {option.label}  
                        </option>  
                      ))}  
                    </select>  
                  </MDBCol>  
                  <MDBCol md="3">  
                    <select  
                      className="form-select custom-select custom-input"  
                      name="day"  
                      value={formData.day}  
                      onChange={handleChange}  
                    >  
                      {days.map((option) => (  
                        <option key={option.value} value={option.value}>  
                          {option.label}  
                        </option>  
                      ))}  
                    </select>  
                  </MDBCol>  
                  <MDBCol md="3">  
                    <select  
                      className="form-select custom-select custom-input"  
                      name="time"  
                      value={formData.time}  
                      onChange={handleChange}  
                    >  
                      {times.map((option) => (  
                        <option key={option.value} value={option.value}>  
                          {option.label}  
                        </option>  
                      ))}  
                    </select>  
                  </MDBCol>  
                </MDBRow> 
                <MDBRow className="justify-content-center">
                  <MDBCol md="6">
                    <button className="w-100 mb-4 signbtn" type="submit">
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

export default Teacher;
