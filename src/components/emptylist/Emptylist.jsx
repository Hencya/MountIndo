// library
import React from "react";
// css
import styles from "./Emptylist.module.css";
// assets
import emptyImage from "../../assets/images/emptyImage.gif";

export default function Emptylist() {
  return (
    <div className={`${styles.emptyImagePage} text-center mt-5`}>
      <h4 style={{ color: "red", fontWeight: "bold" }}>
        Article Doesn't Exist
      </h4>
      <img className={styles.emptyImage} src={emptyImage} alt="empty" />
    </div>
  );
}
