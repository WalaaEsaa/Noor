import React from 'react'
import Login from './Login';
import 'bootstrap/dist/css/bootstrap.min.css';
import LanguageDetector from 'i18next-browser-languagedetector';
import i18n from "i18next";
import {  initReactI18next } from "react-i18next";
import HttpApi from 'i18next-http-backend';
import Home from './Home';
import Leiters from './Leiters';
import Teacher from './Teacher';
import {createBrowserRouter,RouterProvider} from 'react-router-dom';
import Layout from './Layout';
import Register from './Register';
import Students from './Students';
import Childe from './Childe';
import Basic from './Basic';
import Gruppe from './Gruppe';
import Sub from './Sub';
import Exams from './Exams';
import Sources from './Sources';
import About from './About';

i18n
  .use(initReactI18next) 
  .use(LanguageDetector)
  .use(HttpApi)
  .init({
     
    fallbackLng: "en",
     detection:{
      order: [ 'htmlTag', 'cookie', 'localStorage', 'sessionStorage', 'navigator', 'path', 'subdomain'],
     caches:["cookie"],

     },
     backend:{
      loadPath: '/{{lng}}/translation.json',

     },
 
  });
let router=createBrowserRouter([

{path:'/',element:<Layout/>,children:[
{index:true,element:<Home/>},
{path:'login',element:<Login/>},
{path:'register',element:<Register/>},
{path:'leiter',element:<Leiters/>},
{path:'Childe',element:<Childe/>},
{path:'teacher',element:<Teacher/>},
{path:'students',element:<Students/>},
{path:'gruppe',element:<Gruppe/>},
{path:'basic',element:<Basic/>},
{path:'sub',element:<Sub/>},
{path:'sources',element:<Sources/>},
{path:'exams',element:<Exams/>},
{path:'about',element:<About/>
}




]





}


])




const App = () => {
  return(<>

<RouterProvider router={router}/>

 </>
  )
}

export default App