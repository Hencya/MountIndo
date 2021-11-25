// library
import React from "react";
// component
import Articleitem from "./Articleitem";
// css
import styles from "./Articlelist.module.css";

export default function Articlelist(props) {
  const { articles } = props;

  return (
    <div className={`${styles.articleList}`}>
      {articles.map((article) => (
        <Articleitem article={article} />
      ))}
    </div>
  );
}
