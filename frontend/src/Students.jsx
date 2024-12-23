
import React, { useState } from 'react';  
import { useTranslation } from 'react-i18next';  
import axios from "axios";  

import i18n from 'i18next';  
import './Students.css';  
import {  
  MDBContainer,  
  MDBRow,  
  MDBCol,  
  MDBCard,  
  MDBCardBody,  
} from 'mdb-react-ui-kit';  


const Students = () => {  
  const { t } = useTranslation();  
  const currentLanguage = i18n.language;  

    // State for form inputs  

  const [students, setStudents] = useState({  
    name: '',  
    email: '',  
    nationalID: '',  
    birthOfDate: '',  
    phoneWhats: '',  
    phoneTelgram: '',  
    department: '',  
    class: '',  
    password: '',  
    confirmPassword: '', 
    // confirmPassword: '',  
   
    
  });  
  const [errors, setErrors] = useState({});  
  


  // Validate field  
  const validateFields = () => {  
    const newErrors = {};  
    if (!students.name) newErrors.name = t('Name is required.');  
    if (!students.email) newErrors.email = t('Email is required.');  
    if (!/\S+@\S+\.\S+/.test(students.email)) newErrors.email = t('Email is not valid.');  
    if (!students.password) newErrors.password = t('Password is required.');  
    if (students.password !== students.confirmPassword) newErrors.confirmPassword = t('Passwords do not match.');  
    if (!/^\d+$/.test(students.nationalID)) newErrors.nationalID = t('National number must contain only digits.');  


    // Phone number validation (Example: must be mostly digits, allow optional space, hyphen or parentheses)  
    const phoneRegex = /^\+?[1-9]\d{0,3}[-\s]?(\(?\d{1,4}?\)?[-\s]?)?\d{1,4}[-\s]?\d{1,4}[-\s]?\d{1,9}$/;  
    if (!phoneRegex.test(students.phoneWhats)) newErrors.phoneWhats = t('Phone  is not valid.');  
    if (students.phoneTelgram && !phoneRegex.test(students.phoneTelgram)) newErrors.phone2 = t('Phone  is not valid.');  

    // Include additional validation for phone numbers and groups as needed  

    setErrors(newErrors);  
    return Object.keys(newErrors).length === 0;  
  };  

  

 
  // Handle input changes  
  const handleChange = (e) => {  
    const { name, value } = e.target;  
    setStudents((prevData) => ({ ...prevData, [name]: value }));  
    // Clear any error for this field  
    setErrors((prevErrors) => ({ ...prevErrors, [name]: '' }));  
  };  


  // Handle form submission  
  const handleSubmit = async (e) => {  
    e.preventDefault(); // Prevent default form submission  
    if (!validateFields()) return; // Validate fields before sending  

    console.log('Form Submitted:', students); // Log the data to be sent  

    // Send data to API  
    await sendStudentstoapi();  
    
    alert(t('Student account created successfully!')); // Alert on success  

    // Reset form after submission  
    setStudents({  
      name: '',  
      email: '',  
      nationalID: '',  
      birthOfDate: '',  
      phoneWhats: '',  
      phoneTelgram: '',  
      department: '',  
      class: '',  
      password: '',  
      confirmPassword: '', 
      
    });  
};
//connect with API (backend)


 
  
async function sendStudentstoapi() {  
  try {  
      const { data } = await axios.post('http://localhost:9092/api/students/register', students);  
      console.log('Response Data:', data);  
  } catch (error) {  
      console.error('Error sending data:', error.response ? error.response.data : error.message);  
      alert(t('Error sending data. Please try again.')); // Alert user of error  
  }  
}
// }; 

  return (  
    <MDBContainer fluid className="p-4 custom1" dir={currentLanguage === 'ar' ? 'rtl' : 'ltr'}>  
      <MDBRow className="d-flex justify-content-center align-items-center">  
        <MDBCol md="6">  
          <h2 className="text-center my-5 custmh1">{t('New Account3')}</h2>  
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
                      value={students.name}  
                      onChange={handleChange}  
                      required
                    />  
                    {errors.name && <span className="text-danger">{errors.name}</span>}  
                  </MDBCol>  
                  <MDBCol>  
                    <input  

                      className="mb-4 custom-input"  
                      placeholder={t('Email')}  
                      type="email"  
                      name="email"  
                      value={students.email}  
                      onChange={handleChange} 
                      required 
                    />  
                    {errors.email && <span className="text-danger">{errors.email}</span>}  
                  </MDBCol>  
                </MDBRow>  

                <MDBRow className="mb-4">  
                  <MDBCol>  
                    <input  
                      className="mb-4 custom-input"  
                      placeholder={t('National Number')}  
                      type="text"  
                      name="nationalID"  
                      value={students.nationalID}  
                      onChange={handleChange} 
                      required 
                    />  
                    {errors.nationalID && <span className="text-danger">{errors.nationalID}</span>}  
                  </MDBCol>  
                  <MDBCol>  
                    <input  
                      className="mb-4 custom-input"  
                      placeholder={t('birthOfDate')}  
                      type="date"  
                      name="birthOfDate"  
                      value={students.birthOfDate}  
                      onChange={handleChange}  
                      required
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
                      value={students.phoneWhats}  
                      onChange={handleChange}  
                      required
                    />  
                    {errors.phoneWhats && <span className="text-danger">{errors.phoneWhats}</span>}  

                  </MDBCol>  
                  <MDBCol>  
                    <input  
                      className="mb-4 custom-input"  
                      placeholder={t('phoneTelgram')}  
                      type="text"  
                      name="phoneTelgram"  
                      value={students.phoneTelgram}  
                      onChange={handleChange}  
                      required
                    />  
                    {errors.phoneTelgram && <span className="text-danger">{errors.phoneTelgram}</span>} 
                  </MDBCol>  
                </MDBRow>  

                <MDBRow className="mb-4">  
                  <MDBCol>  
                    <input  
                      className="mb-4 custom-input"  
                      placeholder={t('class')}  
                      type="text"  
                      name="class"  
                      value={students.class}  
                      onChange={handleChange} 
                      required 
                    />  
                  </MDBCol>  
                  <MDBCol>  
                    <input  
                      className="mb-4 custom-input"  
                      placeholder={t('department')}  
                      type="text"  
                      name="department"  
                      value={students.department}  
                      onChange={handleChange} 
                      required 
                    />  
                  </MDBCol>  
                </MDBRow>  

                <MDBRow className="mb-4">  
                  <MDBCol>  
                    <input  
                      className="mb-4 custom-input"  
                      placeholder={t('Password')}  
                      type="password"  
                      name="password"  
                      value={students.password}  
                      onChange={handleChange} 
                      required 
                    />  
                    {errors.password && <span className="text-danger">{errors.password}</span>}  
                  </MDBCol>  
                  <MDBCol>  
                    <input  
                      className="mb-4 custom-input"  
                      placeholder={t('Confirm Password')}  
                      type="password"  
                      name="confirmPassword"  
                      value={students.confirmPassword}  
                      onChange={handleChange}  
                      required
                    />  
                    {errors.confirmPassword && <span className="text-danger">{errors.confirmPassword}</span>}  
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

export default Students;