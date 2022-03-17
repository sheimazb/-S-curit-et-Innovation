
import React from "react";
//import { useNavigate } from 'react-router';
import './App.css';
import {Link} from 'react-router-dom';
import {FaTree} from 'react-icons/fa'
import {navItems} from './componenets/Navitems'
import Button from './componenets/Button'
import Slider from "./componenets/Slider";


function App(){
/*  let navigate = useNavigate();

  function handleClick1() {
    navigate('/Login')
  } 
  
  function handleClick2() {
    navigate('/protection')
  } */
  return(
  /*<div className="App">
    <div className="App-header">
      <h1 className="titre">Fire & Gaz Detection </h1>
      <button className="butt" onClick={handleClick1}>FACTORY</button>
      <button className="butt" onClick={handleClick2}>PROTECTION</button>     
    </div>
</div>*/

<div className="accueil">

<nav className="navbar">
<Link to="/Mode2" className="navbar-logo">
  PROTECTLY
  <FaTree/>
</Link>
<ul className="nav-items">
  {navItems.map(item=>{
    return(
    <li key={item.id}className={item.cName}>
      <Link to={item.path}>{item.title}</Link>
      </li>
      );
  })}
</ul>
<Button/>
</nav>
<Slider/>
</div>

);
}

export default App ; 