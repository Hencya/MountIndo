// library
import React from "react";
// components
import avatar from "../../assets/images/avatar.png";
// css
import styles from "./ProfileDetail.module.css";

export default function ProfileDetail() {
  return (
    <div className="d-flex justify-content-center mb-2 p-3">
      <div
        className="card  text-center"
        style={{ width: "100%", border: "solid", borderColor: "#5B5B5B" }}
      >
        <div className="card-body">
          <h5 className="card-title">Profile</h5>
          <img src={avatar} alt="avatar" className="w-10 h-10 mt-2 mb-2" />
          <p className="card-text mt-2 mb-2">User 1</p>
          <button
            className={`${styles.logOutBtn} btn text-white px-4 mt-2 `}
            style={{ backgroundColor: "red" }}
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}
