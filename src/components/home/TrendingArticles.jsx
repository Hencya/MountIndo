// Library
import React from "react";
// css
import styles from "./TrendingArticles.module.css";
// component
import TrandingItem from "./TrandingItem";

export default function TrendingArticles() {
  return (
    <section className={`${styles.trandingtArticles}`}>
      <div className="container">
        <div className={`d-flex justify-content-center`}>
          <h3 className="font-nun text-dark left-border">Tranding Articles</h3>
        </div>
        <TrandingItem />
        <TrandingItem />
        <TrandingItem />
      </div>
    </section>
  );
}
