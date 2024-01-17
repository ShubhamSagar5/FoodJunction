import React, { useState } from "react";
import { APP_LOGO } from "../utilis/Constant";

const Header = () => {
 
  const [authBtn,setAUthBtn] = useState(true)
 
  return (
    <div className="header">
      <div className="logo">
        <img className="logoImg" src={APP_LOGO} alt="" />
      </div>
      <div className="navItems">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
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
