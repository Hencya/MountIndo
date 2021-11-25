// library
import React from "react";
// css
import styles from "./Emptylist.module.css";
// assets
import emptyImage from "../../assets/images/emptyImage.gif";

export default function Emptylist() {
  return (
    <div className="d-flex justify-content-center">
      <img className={styles.emptyImage} src={emptyImage} alt="empty" />
    </div>
  );
}
