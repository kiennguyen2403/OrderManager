import { React, useContext } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";


export default function Header() {
  
  return (
    <header id="navigationBar">
      <nav>
        <ul>
            <div className="navItems" id="logo">
                <li>
                <Link to="/order">GoTo </Link>
                </li>
            </div>
            <div id="selection" className="navItems">
                <li className="page">
                    <Link to="/order">Order </Link>
                </li>
                <li className="page">
                    <Link to="/member">Member </Link>
                </li>
                <li id="loginItem">
                    <Link to="/">
                    <img
                        src="./picture/user.png"
                        alt="login icon"
                        id="loginicon"
                    />
                    </Link>
                </li>
            </div>
        </ul>
      </nav>
    </header>
  );
}
