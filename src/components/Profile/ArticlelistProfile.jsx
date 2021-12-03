// library
import React from "react";
// css
import styles from "./ArticlelistProfile.module.css";
// component
import ArticleitemProfile from "./ArticleitemProfile";

export default function ArticlelistProfile(props) {
  const { articles } = props;

  return (
    <div>
      <div className="d-flex justify-content-center">
        <h3 className="font-nun text-dark left-border fw-bold mt-5">
          My Articles
        </h3>
      </div>
      <div className="d-flex justify-content-center">
        <div className={`${styles.articleList}`}>
          {articles.map((article) => (
            <ArticleitemProfile article={article} />
          ))}
        </div>
      </div>
    </div>
  );
}
