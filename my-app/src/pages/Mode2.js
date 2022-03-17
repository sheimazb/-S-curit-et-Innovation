import React from "react";
import'./Mode2.css'
import Button from '../componenets/Button'
import {Link} from 'react-router-dom';
import { navItems2 } from "../componenets/Navitems";
import {FaTree} from 'react-icons/fa'



function Mode2(){
    return(
 
        <nav className="navbar2">
<Link to="/App" className="navbar-logo">
  USER MODE 
  <FaTree/>
</Link>
<ul className="nav-items">
  {navItems2.map(item=>{
    return(
    <li key={item.id}className={item.cName}>
      <Link to={item.path}>{item.title}</Link>
      </li>
      );
  })}
</ul>
<Button/>
</nav>


    )
}
export default Mode2;