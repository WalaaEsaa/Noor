import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Gruppe.css';
import SchoolIcon from '@mui/icons-material/School';
import AssignmentIcon from '@mui/icons-material/Assignment';
import BorderTopIcon from '@mui/icons-material/BorderTop';
import ImportContactsIcon from '@mui/icons-material/ImportContacts';
import DownloadDoneIcon from '@mui/icons-material/DownloadDone';
import Table from 'react-bootstrap/Table';

const Basic = () => {
    return (
      <div className="container py-4">
      <div className="row rightlist">

        <div className="col-lg-8 col-md-7 col-sm-12">
          <h1 className="main-title">مرحبا اسم الطالبة</h1>
          <div className="mb-4">
            <h3 className="main-title1">جدول الحلقات</h3>
            <div className="table-responsive">
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>اللينك</th>
                    <th>ملاحظات</th>
                    <th>المعلمة</th>
                    <th>الموعد</th>
                    <th>المادة</th>
                  </tr>
                </thead>
                <tbody>
                  {/* مثال على الصفوف */}
                  {[...Array(5)].map((_, index) => (
                    <tr key={index}>
                      <td>رابط {index + 1}</td>
                      <td>ملاحظة {index + 1}</td>
                      <td>معلمة {index + 1}</td>
                      <td>موعد {index + 1}</td>
                      <td>مادة {index + 1}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>
          </div>
        </div>

        {/* قسم القائمة الجانبية */}
        <div className="col-lg-3 col-md-4 col-sm-12 mb-4">
          <ul className="list-unstyled links">
            <li><a href="#link4" className="link-item">الفرقة <SchoolIcon /></a></li>
            <li><a href="#link1" className="link-item">الحلقات الأساسية <AssignmentIcon /></a></li>
            <li><a href="#link2" className="link-item">الحلقات الفرعية <BorderTopIcon /></a></li>
            <li><a href="#link3" className="link-item">المصادر <ImportContactsIcon /></a></li>
            <li><a href="#link4" className="link-item">الاختبارات <DownloadDoneIcon /></a></li>
            <button className="signbtnn mt-2">تسجيل الخروج</button>
          </ul>
        </div>
      </div>
    </div>
  );
};


 
export default Basic;