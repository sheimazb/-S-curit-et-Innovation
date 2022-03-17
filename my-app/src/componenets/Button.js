import React   from "react";
import { Link } from "react-router-dom";
import './Button.css'
function Button(){
    return(
<Link to="./Sign">
<button className="butt">
Sign Up
</button>
</Link>
    )
}
export default Button;