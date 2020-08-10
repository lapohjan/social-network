import React from 'react';
import Logo from './Logo';
import { Link } from "react-router-dom";

const NavigationBar = () => {
    return (
            <nav>
    <div className="nav-wrapper">
      {/* <Logo/> */}
      <a href="#" class="brand-logo">Logo</a>
      <ul className="right hide-on-med-and-down">
        <li>
            <Link to="/Home">Home</Link></li>
        <li>
            <a href="/notregistered">Register</a></li>
        <li>
            <a href="/LogIn">Log in</a></li>
        {/* <li className="active"><a href="/LogIn">Log in</a></li> */}
      </ul>
    </div>
  </nav>
    );
}
export default NavigationBar;