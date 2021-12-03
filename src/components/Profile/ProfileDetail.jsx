// library
import React from "react";
import { Icon } from "@iconify/react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
// redux
import { logout } from "../../config/redux/LoginSlice";
// css
import styles from "./ProfileDetail.module.css";

export default function ProfileDetail() {
  const id = useSelector((state) => state.auth.userId);
  const avatar = useSelector((state) => state.auth.avatar);
  const username = useSelector((state) => state.auth.username);
  const fullname = useSelector((state) => state.auth.fullname);
  const defaultAvatar =
    "https://firebasestorage.googleapis.com/v0/b/mountindo-73938.appspot.com/o/avatar-1-768x768.webp?alt=media&token=3ca670da-d089-4e93-b3e3-1709ad36765f";

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onClick = () => {
    dispatch(logout());
    if (window.location.pathname.includes("profile")) {
      navigate("/");
    } else {
      window.location.reload();
    }
  };
  return (
    <div className="d-flex justify-content-center mb-2 p-3 mt-4">
      <div
        className="card  text-center"
        style={{ width: "85%", border: "double", borderColor: "#5B5B5B" }}
      >
        {id === -1 ? (
          <div className="card-body">
            <h5 className="card-title fs-2 fw-bold mb-4">Profile</h5>
            <Icon
              icon="healthicons:ui-user-profile"
              color="#ccc"
              width="150"
              height="150"
            />
            <p
              style={{ color: "red" }}
              className="card-text mt-2 mb-2 fw-bold fs-4"
            >
              Login First
            </p>
            <Link to={`/login`}>
              <button
                className={`${styles.loginButton} btn text-white px-4 mt-2 `}
                style={{ backgroundColor: "#249C46" }}
              >
                Login
              </button>
            </Link>
          </div>
        ) : (
          <div className="card-body text-center">
            <h5 className="card-title fs-2 fw-bold mb-5">Profile</h5>
            {avatar === defaultAvatar || avatar === "" ? (
              <Icon
                icon="healthicons:ui-user-profile"
                color="#ccc"
                width="150"
                height="150"
              />
            ) : (
              <img
                className="rounded-circle mt-3"
                src={avatar}
                alt="user"
                style={{ width: "150px", height: "150px" }}
              />
            )}
            <p className="mt-4 fw-bolder fs-4">{fullname}</p>
            <p className="me-3">{`@${username}`}</p>
            <button
              className={`${styles.logOutBtn} btn text-white px-4 mt-2 `}
              style={{ backgroundColor: "red" }}
              onClick={onClick}
            >
              Logout
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
