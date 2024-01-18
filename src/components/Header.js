import React, { useState } from "react";
import { APP_LOGO } from "../utilis/Constant";
import { Link } from "react-router-dom";

const Header = () => {
 
  const [authBtn,setAUthBtn] = useState(true)
 
  return (
    <div className="header">
      <div className="logo">
        <img className="logoImg" src={APP_LOGO} alt="" />
      </div>
      <div className="navItems">
        <ul>
        <Link to="/" className="link"><li >  Home</li></Link>  
          <Link  to="about" className="link"> <li> About Us</li></Link>
          <Link to="contactUs" className="link"><li>  Contact_Us</li></Link>
          <li>Cart</li>
          <button className="loginBtn" onClick={()=>{
            setAUthBtn(!authBtn)
          }}>{authBtn ? "Login" : "LogOut"}</button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
