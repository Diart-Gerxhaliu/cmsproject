<<<<<<< HEAD
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import NavBar from "../molecules/NavBar";

function Footer() {
  let [menu, setMenu] = useState([]);

  useEffect(() => {
    let menuLocal = localStorage.getItem("Navbar");

    if (menuLocal == null) {
      localStorage.setItem("Navbar", JSON.stringify(NavBar));
    } else {
      setMenu(JSON.parse(menuLocal));
    }
  }, []);

  return (
    <div className="footer">
      <footer className="footer-59391">
        <div className="border-bottom pb-5 mb-4">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-3">
                <form action="#" className="subscribe mb-4 mb-lg-0">
                  <div className="form-group ">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Enter your email"
                    />
                    <button>
                      <span className="icon-keyboard_backspace"></span>
                    </button>
                  </div>
                </form>
              </div>
              <div className="col-lg-6 text-lg-center">
                <ul className="list-unstyled nav-links nav-left mb-4 mb-lg-0">
                  {menu.map((gal, index) => {
                    return (
                      <li key={index}>
                        <Link to={gal.href}>{gal.child}</Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-4 text-lg-center   site-logo order-1 order-lg-2 mb-3 mb-lg-0">
              <Link href="#" className="m-0 p-0">
                Ziptech
              </Link>
            </div>
            <div className="col-lg-4 text-lg-right order-3 order-lg-3">
              <p className="m-0 text-muted">
                <small>&copy; 2019. All Rights Reserved.</small>
              </p>
            </div>
          </div>
        </div>
      </footer>
=======
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../molecules/NavBar';
import Image from '../atoms/Image';
import Icons from '../../json/SocialMedia.json';
import '../../assets/style/Footer.css'; 

function Footer() {
  const [menu, setMenu] = useState([]);
  const [icon, setIcon] = useState([]);

  useEffect(() => {
    const menuLocal = localStorage.getItem('Navbar');
    const footerIcons = localStorage.getItem('Icons');

    if (!menuLocal) {
      localStorage.setItem('Navbar', JSON.stringify(NavBar));
    } else {
      setMenu(JSON.parse(menuLocal));
    }

    if (!footerIcons) {
      localStorage.setItem('Icons', JSON.stringify(Icons));
    } else {
      setIcon(JSON.parse(footerIcons));
    }
  }, []);

  return (
    <div className='footer'>
      <div className='row'>
        {icon.map((item, index) => (
          <Image src={item.icon} alt='' key={index} />
        ))}
      </div>
      <div className='row'>
        {menu.map((item, index) => (
          <li key={index}>
            <Link to={item.href}>{item.child}</Link>
          </li>
        ))}
      </div>
>>>>>>> ce33c1513c0028bdf2a2b79855764fb61c7ed6c5
    </div>
  );
}

export default Footer;
