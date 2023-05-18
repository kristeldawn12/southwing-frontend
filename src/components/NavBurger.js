import React, { useContext } from "react";
import { MainContext } from "../provider/MainProvider.js";
import { Link } from "react-router-dom";
import { SideBarData } from "../provider/SideBarData";
import { IconContext } from "react-icons";

import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import brandLogo from "../assets/images/southwing-logo.png";
import profileIcon from "../assets/images/profile-icon.png";

import "../css/NavBurger.css";

export const NavBurger = () => {
  const { sideBar, showSidebar } = useContext(MainContext);

  return (
    <>
      <nav className="nav-container">
        <IconContext.Provider value={{ color: "#372a28" }}>
          <div className="flex">
            <Link to="#" className="menu-bars" />
            <FaIcons.FaBars onClick={showSidebar} className="burger-icon" />
            <Link />
          </div>
          <nav
            className={
              sideBar
                ? "nav-menu w-[13em] min-h-[45vh] sm:w-[15em] sm:h-[50] active"
                : "nav-menu"
            }
          >
            <ul className="nav-menu-items" onClick={showSidebar}>
              <li className="navbar-toggle">
                <Link to="#" className="'menu-bars">
                  <AiIcons.AiOutlineClose className="toggle-icon" />
                </Link>
              </li>
              <li>
                {SideBarData.map((item, index) => {
                  return (
                    <ul key={index}>
                      <li className="text-2xl py-3 px-1">
                        <Link to={item.path}>
                          <span>{item.title}</span>
                        </Link>
                      </li>
                    </ul>
                  );
                })}
              </li>
            </ul>
          </nav>
        </IconContext.Provider>
        <div className="sidebar-icons flex-center relative">
          <FaIcons.FaShoppingCart
            size={30}
            className="absolute right-[9.5em] bottom-6.5"
          />
          <section className="relative"></section>
          <section className="nav-icons flex-center">
            <div className="profile-icon">
              <img src={profileIcon} alt="profile-icon"></img>
            </div>
            <p className="nav-burger"></p>
          </section>

          <section>
            <Link to="/southwing">
              <div className="brand-logo">
                <img src={brandLogo} alt="brand-logo"></img>
              </div>
            </Link>
          </section>
        </div>
      </nav>
    </>
  );
};
