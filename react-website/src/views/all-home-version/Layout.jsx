import React, { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { FaMoon, FaSun } from "react-icons/fa";
import PageTitle from "../../components/PageTitle";

const Layout = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("dark", isDarkMode);
    localStorage.setItem("isDarkModeEnabled", isDarkMode);
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <>
      <PageTitle title="Home" />

      <button className="theme-switcher-label" onClick={toggleDarkMode}>
        {isDarkMode ? <FaSun /> : <FaMoon />}
      </button>

      <div className="leftpart">
        <div className="leftpart_inner">
          <div className="logo">
            <Link className="navbar-brand" to="/">
              <img src="/assets/img/logo/dark.png" alt="brand" />
            </Link>
          </div>

          <div className="menu" >
            <ul classname="menu_bar">
              <li className="menu_tab_container">
                <Link to="/"  className="menu_tab">
                  <img className="svg" src="/assets/img/svg/home-run.svg" alt="home" />
                  <span className="menu_content">Home</span>
                </Link>
              </li>
              <li>
                <Link to="/about" className="menu_tab">
                  <img className="svg" src="/assets/img/svg/avatar.svg" alt="about" />
                  <span className="menu_content">About</span>
                </Link>
              </li>
              <li>
                <Link to="/work" className="menu_tab">
                  <img className="svg" src="/assets/img/svg/briefcase.svg" alt="portfolio" />
                  <span className="menu_content">Work</span>
                </Link>
              </li>
              <li>
                <Link to="/education" className="menu_tab">
                  <img className="svg" src="/assets/img/svg/graduation.svg" alt="services" />
                  <span className="menu_content">Education</span>
                </Link>
              </li>
              
              <li>
                <Link to="/projects" className="menu_tab">
                  <img className="svg" src="/assets/img/svg/paper.svg" alt="news" />
                  <span className="menu_content">Projects</span>
                </Link>
              </li> 
              
              {/*
              <li>
                <Link to="/contact" className="menu_tab">
                  <img className="svg" src="/assets/img/svg/mail.svg" alt="contact" />
                  <span className="menu_content">Contact</span>
                </Link>
              </li>
              */}
            </ul>
          </div>
        </div>
      </div>

      {/* Right Section for Page Content */}
      <div className="rightpart">
        <div className="rightpart_in">
          <div className="tokyo_tm_section">
            <Outlet /> {/* This will render the page content dynamically */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Layout;