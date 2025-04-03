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
    </div>
  );
}

export default Footer;
