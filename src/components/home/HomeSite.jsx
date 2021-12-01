// Library
import React from "react";
import { Link } from "react-router-dom";
// css
import styles from "../home/HomeSite.module.css";

export default function HomeSite() {
  return (
    <section
      className={`${styles.hero} hero vh-100 d-flex align-items-center `}
    >
      <div className={`${styles.overlay}`} />
      <div className="container">
        <div className="row">
          <div className="col-7 mx-auto text-center">
            <p className={`${styles.P} text-white fw-light `}>Let's Hike in</p>
            <h1 className={`${styles.H1} text-white fs-2 `}>
              Amazing Mounts of Indonesia
            </h1>
            <Link
              className={`${styles.exploreBtn} btn text-white px-4 mt-2 rounded-pill`}
              style={{ backgroundColor: "#3086AC" }}
              to="/explore"
            >
              Explore
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
