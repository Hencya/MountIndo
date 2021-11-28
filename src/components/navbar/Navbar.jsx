import React from "react";
import { Icon } from "@iconify/react";
import { NavLink, Link } from "react-router-dom";
import logoNav from "../../assets/images/LogoNavbar.png";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light shadow-sm">
      <div className="container-fluid px-5">
        <NavLink className="navbar-brand" to="/">
          <img src={logoNav} alt="logoNavbar" className="w-75 h-75" />
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <div className="navbar-nav ms-auto d-flex align-items-lg-center text-center">
            <NavLink className="nav-link mx-3" to="/" replace>
              Home
            </NavLink>
            <NavLink className="nav-link mx-3" to="/explore" replace>
              Explore
            </NavLink>
            <NavLink className="nav-link mx-3" to="/add-post" replace>
              Add Post
            </NavLink>
            <Link className={`nav-link mx-1`} to="/profile" replace>
              <Icon
                icon="healthicons:ui-user-profile"
                color="#ccc"
                width="45"
                height="45"
              />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
