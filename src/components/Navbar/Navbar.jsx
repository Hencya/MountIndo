// library
import React from "react";
import { Icon } from "@iconify/react";
import { NavLink, Link } from "react-router-dom";
import { useSelector } from "react-redux";
// Assets
import logoNav from "../../assets/images/LogoNavbar.png";

export default function Navbar() {
  const id = useSelector((state) => state.auth.userId);
  const avatar = useSelector((state) => state.auth.avatar);
  const defaultAvatar =
    "https://firebasestorage.googleapis.com/v0/b/mountindo-73938.appspot.com/o/avatar-1-768x768.webp?alt=media&token=3ca670da-d089-4e93-b3e3-1709ad36765f";
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
            {id === -1 ? (
              <NavLink className="nav-link mx-3" to="/login" replace>
                Add Post
              </NavLink>
            ) : (
              <NavLink className="nav-link mx-3" to="/add-post" replace>
                Add Post
              </NavLink>
            )}
            <Link className={`nav-link mx-1`} to="/profile" replace>
              {id === -1 ? (
                <Icon
                  icon="healthicons:ui-user-profile"
                  color="#ccc"
                  width="45"
                  height="45"
                />
              ) : (
                <div>
                  {avatar === defaultAvatar || avatar === "" ? (
                    <Icon
                      icon="healthicons:ui-user-profile"
                      color="#ccc"
                      width="45"
                      height="45"
                    />
                  ) : (
                    <img
                      className="rounded-circle "
                      src={avatar}
                      alt="user"
                      style={{ width: "45px", height: "45px" }}
                    />
                  )}
                </div>
              )}
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
