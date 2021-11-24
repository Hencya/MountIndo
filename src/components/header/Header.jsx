// library
import React from "react";
// css
import styles from "./Header.module.css";

export default function Header(props) {
  const { titleH2, titleH1 } = props;
  const quoteArray = props.quote.split(".");
  console.log(quoteArray[0]);
  return (
    <header className={`${styles.header} text-center pt-5`}>
      <h2 style={{ color: "#2D7D9F", fontSize: "2rem" }}>{titleH1}</h2>
      <h1 style={{ color: "#1F576F", fontSize: "3rem", marginBottom: "1rem" }}>
        <span>“</span> {titleH2} <span>”</span>
      </h1>
      <p style={{ color: "#6B685E", fontWeight: "500" }}>
        {quoteArray[0]} <br />
        {quoteArray[1]}
      </p>
    </header>
  );
}
