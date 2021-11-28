// Library
import React from "react";
// css
import styles from "./TrendingArticles.module.css";
// component
import TrandingItem from "./TrandingItem";

export default function TrendingArticles(props) {
  const { articles } = props;
  return (
    <section className={`${styles.trandingtArticles}`}>
      <div className="container">
        <div className={`d-flex justify-content-center`}>
          <h3 className="font-nun text-dark left-border fw-bold">
            Tranding Articles
          </h3>
        </div>
        {articles.map((article) => (
          <TrandingItem article={article} />
        ))}
      </div>
    </section>
  );
}
