// Library
import React from "react";
import OwlCarousel from "react-owl-carousel2";
import "react-owl-carousel2/lib/styles.css";
import "react-owl-carousel2/src/owl.theme.default.css";
// css
import styles from "../home/NewestArticles.module.css";
// Cpmponent
import NewestItem from "./NewestItem";

export default function NewestArticles(props) {
  const { articles } = props;
  console.log(articles);
  const options = {
    items: 3,
    loop: true,
    nav: true,
    rewind: true,
    autoplay: true,
    autoplayTimeout: 3000,
    responsive: {
      0: {
        items: 0,
      },
      320: {
        items: 1,
      },
      560: {
        items: 2,
      },
      960: {
        items: 3,
      },
    },
  };
  return (
    <section className={`${styles.newestArticles}`}>
      <div className="container">
        <div className={`d-flex justify-content-center pt-7`}>
          <h3 className="font-nun text-dark left-border fw-bold">
            Newest Articles
          </h3>
        </div>
        <OwlCarousel options={options}>
          {articles.map((article) => (
            <NewestItem article={article} />
          ))}
        </OwlCarousel>
      </div>
    </section>
  );
}
