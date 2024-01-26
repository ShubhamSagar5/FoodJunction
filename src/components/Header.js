import React, { useState } from "react";
import { APP_LOGO } from "../utilis/Constant";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utilis/OnlineStatus";

const Header = () => {
 
  const [authBtn,setAUthBtn] = useState(true)
 
  const onlineStatus = useOnlineStatus()

  return (
    <div className='flex justify-between border border-black  mt-0 bg-pink-200 text-xl shadow-lg'>
      <div className="logo w-[125px]">
        <img className="logoImg" src={APP_LOGO} alt="" />
      </div>
      <div className="flex">
        <ul className="flex items-center">
        <li className="p-2 m-2">Online Status :{onlineStatus ? '🟢':'🔴'}</li>
        <Link to="/" className="link"><li className="p-2 m-2">  Home</li></Link>  
          <Link  to="about" className="link"> <li className="p-2 m-2"> About Us</li></Link>
          <Link to="contactUs" className="link"><li className="p-2 m-2">  Contact_Us</li></Link>
          <Link to="/grocery"  className="link"><li className="p-2 m-2">Grocery</li></Link>
          <li className="p-2 m-2">Cart</li>
          
          <button className="p-2 m-2 bg-gray-200 rounded-lg hover:bg-gray-400" onClick={()=>{
            setAUthBtn(!authBtn)
          }}>{authBtn ? "Login" : "LogOut"}</button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
