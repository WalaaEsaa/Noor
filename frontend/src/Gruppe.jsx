
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Gruppe.css';
import SchoolIcon from '@mui/icons-material/School';
import AssignmentIcon from '@mui/icons-material/Assignment';
import BorderTopIcon from '@mui/icons-material/BorderTop';
import ImportContactsIcon from '@mui/icons-material/ImportContacts';
import DownloadDoneIcon from '@mui/icons-material/DownloadDone';

const Gruppe = ({ studentName }) => {
    const handleLogout = () => {
        // Add your logout logic here
        console.log('Logging out...');
    };

    

    const currentGroups = [
        { number: "1", surah: "الفرقة الأولى" },
        { number: "2", surah: "الفرقة الثانية" },
        { number: "3", surah: "الفرقة الثالثة" }
    ];

    const previousGroups = [
        { number: "4", surah: "الفرقة الرابعة" },
        { number: "5", surah: "الفرقة الخامسة" },
        { number: "6", surah: "الفرقة السادسة" }
    ];
    return (
      <div className="container py-4">
      <div className="row">
        <div className="col-lg-10 col-md-10 col-sm-12">
          <h1 className="main-title">مرحبا {studentName}</h1>

          <div className="mb-4">
            <h3 className="main-title1">الفرقة الحالية</h3>
            <div className="d-flex flex-wrap justify-content-between group">
              {currentGroups.map((group, index) => (
                <div className="item" key={index}>
                  <span className="block-span">{group.number}</span>
                  <span className="block-span">{group.surah}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-4">
            <h3 className="main-title1">الفرق السابقة</h3>
            <div className="d-flex flex-wrap justify-content-between group">
              {previousGroups.map((group, index) => (
                <div className="item" key={index}>
                  <span className="block-span">{group.number}</span>
                  <span className="block-span">{group.surah}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* قسم القائمة الجانبية */}
        <div className="col-lg-2 col-md-2 col-sm-12">
          <ul className="list-unstyled links">
            <li><a href="#link4" className="link-item">الفرقة <SchoolIcon /></a></li>
            <li><a href="#link1" className="link-item">الحلقات الأساسية <AssignmentIcon /></a></li>
            <li><a href="#link2" className="link-item">الحلقات الفرعية <BorderTopIcon /></a></li>
            <li><a href="#link3" className="link-item">المصادر <ImportContactsIcon /></a></li>
            <li><a href="#link4" className="link-item">الاختبارات <DownloadDoneIcon /></a></li>
            <button className="signbtnn mt-2" onClick={handleLogout}>تسجيل الخروج</button>
          </ul>
        </div>
      </div>
    </div>
      );
    };

export default Gruppe


 

