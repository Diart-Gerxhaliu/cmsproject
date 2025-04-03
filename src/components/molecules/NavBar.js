import React from "react";
import { Link } from "react-router-dom";
import Li from "../atoms/Li";
import "../../assets/style/Menu.css";

function NavBar({ navlist, menuStyle, isMobileMenuOpen }) {
  return (
    <nav className={`navbar ${isMobileMenuOpen ? "active" : ""}`}>
      <div
        className="nav-links"
        style={{
          display: "flex",
          gap: "2rem",
          alignItems: "center",
          flexDirection: isMobileMenuOpen ? "column" : "row",
          width: isMobileMenuOpen ? "100%" : "auto",
          padding: isMobileMenuOpen ? "1rem 0" : "0",
        }}
      >
        {navlist.map((item, index) => (
          <Link
            key={index}
            to={item.href}
            style={{
              color: "inherit",
              textDecoration: "none",
              transition: "color 0.3s ease",
              padding: isMobileMenuOpen ? "1rem" : "0",
              width: isMobileMenuOpen ? "100%" : "auto",
              textAlign: isMobileMenuOpen ? "center" : "left",
            }}
          >
            <Li
              child={item.child}
              style={{
                listStyle: "none",
                margin: 0,
                padding: 0,
              }}
            />
          </Link>
        ))}
      </div>
    </nav>
  );
}

export default NavBar;
