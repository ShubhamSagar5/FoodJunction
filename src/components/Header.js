import React from "react";

const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <img className="logoImg" src="https://play-lh.googleusercontent.com/cQl93dTb4UzEZPSuosaxW-5z8yGiMy0IagtEUx6bTZ6E63S5Q3iYFCE8AgiboEoBmmM=w240-h480-rw" alt="" />
      </div>
      <div className="navItems">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
