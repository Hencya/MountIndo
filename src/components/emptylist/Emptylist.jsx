// library
import React from "react";
// css
import styles from "./Emptylist.module.css";
// assets
import emptyImage from "../../assets/images/emptyImage.gif";

export default function Emptylist(props) {
  const { message } = props;
  return (
    <div className={`${styles.emptyImagePage} text-center mt-5`}>
      <h4 style={{ color: "red", fontWeight: "bold" }}>{message}</h4>
      <img className={styles.emptyImage} src={emptyImage} alt="empty" />
    </div>
  );
}
