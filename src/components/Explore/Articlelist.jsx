// library
import React from "react";
// css
import styles from "./Articlelist.module.css";
// component
import Articleitem from "./Articleitem";

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
