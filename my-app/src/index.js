import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  Routes,
  Route,
 
} from "react-router-dom";
import { BrowserRouter } from 'react-router-dom';
import  Home  from './componenets/Home';
import Login from './componenets/Login';
import Protection from './componenets/Protection';
import Accueil from'./pages/Accueil';
import About from './pages/About';
import Contact from './pages/Contact';
import Sign from './pages/Sign'
import Mode2 from './pages/Mode2'
import Login2 from './pages/Login2';
import Dashboard2 from './pages/Dashboard2';

ReactDOM.render(
  
    <BrowserRouter>
     <Routes>
     <Route  index element={<App />} />
      <Route path="/Login" element={<Login />}/>
      <Route path="/Home" element={<Home/>} />
      <Route path="/App/App" element={<App/>}/>
      <Route path="/About"element={<About/>}/>
      <Route path="/Contact" element={<Contact/>}/>
      <Route path="/Protection" element={<Protection/>} />
      <Route path='/Sign' element={<Sign/>}/>
      <Route path='/Mode2' element={<Mode2/>}/>
      <Route path='/App' element={<App/>}/>
      <Route path='/Mode2/%20./Accueil' element={<Accueil/>}/>
      <Route path='/Mode2/%20./Login2' element={<Login2/>}/>
      <Route path='/Dashboard2' element={<Dashboard2/>}/>
  
     </Routes>
     
    </BrowserRouter>,
    document.getElementById("root")
);

reportWebVitals();
