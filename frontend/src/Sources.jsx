import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Gruppe.css';
import SchoolIcon from '@mui/icons-material/School';
import AssignmentIcon from '@mui/icons-material/Assignment';
import BorderTopIcon from '@mui/icons-material/BorderTop';
import ImportContactsIcon from '@mui/icons-material/ImportContacts';
import DownloadDoneIcon from '@mui/icons-material/DownloadDone';

const Sources = () => {
 
    return (
        <div className="container py-4">
          <div className="row">
          
            <div className="col-lg-3 col-md-4 col-12 mb-3 order-md-last">
              <ul className="list-unstyled links">
                <li><a href="#link4" className="link-item">الفرقة < SchoolIcon/> </a></li>
                <li><a href="#link1" className="link-item">الحلقات الاساسية < AssignmentIcon/></a></li>
                <li><a href="#link2" className="link-item">الحلقات الفرعية < BorderTopIcon/></a></li>
                <li><a href="#link3" className="link-item">المصادر < ImportContactsIcon/></a></li>
                <li><a href="#link4" className="link-item">الاختبارات < DownloadDoneIcon/></a></li>
                <button className="signbtnn">تسجيل الخروج</button>
              </ul>
            </div>
    
          
    
           
            <div className="col-lg-8 col-md-7 col-12">
              <h1 className="main-title">مرحبا اسم الطالبة</h1>
              <div className="mb-4 ">
                <h3 className="main-title1">الفرقة الحالية</h3>
                
              </div>
    
              <div className="mb-4">
                <h3 className="main-title1">الفرق السابقة</h3>
                
              </div>
            </div>
            
          
          </div>
        </div>
      );
    };

export default Sources





 

