import React from "react";
import "./Navbar.css";
import { MenuList } from "./MenuList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const Navbar = () => {
  const [clicked, setClicked] = useState(false);
  const handleClick = () => {
    setClicked(!clicked);
  };
  const { currentUser } = useAuth();
  const { logout } = useAuth();

  const handleLogout = async () => {
    try {
      await logout();
      localStorage.removeItem("token");
      alert("Succesfully logged out");
    } catch {
      alert("Not logged out");
    }
  };
  return (
    <nav className="NavbarItems">
      <h1 className="logo">Logo</h1>
      <div className="menu_icon" onClick={handleClick}>
        <FontAwesomeIcon icon={clicked ? faTimes : faBars} />
      </div>
      <ul className={clicked ? `nav_menu active` : `nav_menu`}>
        <div className="menu_box">
          {MenuList.map((item, index) => {
            return (
              <li key={index}>
                <Link className="nav_link" to={item.url}>
                  {item.title}
                </Link>
              </li>
            );
          })}
        </div>
        <div className="auth_btn">
          {currentUser.user_email ? (
            <button className="signin_link">{currentUser.user_name}</button>
          ) : (
            <button>
              <Link to="/signup" className="signin_link">
                Sign In / Sign Up
              </Link>
            </button>
          )}
        </div>
        <div className="auth_btn">
          {currentUser.user_name ? (
            <button className="signout_link" onClick={handleLogout}>
              Logout
            </button>
          ) : null}
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;
