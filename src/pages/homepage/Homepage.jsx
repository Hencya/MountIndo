// library
import React, { useState } from "react";
import Emptylist from "../../components/emptylist/Emptylist";
// component
import Footer from "../../components/footer/Footer";
import HomeSite from "../../components/home/HomeSite";
import NewestArticles from "../../components/home/NewestArticles";
import TrendingArticles from "../../components/home/TrendingArticles";
import Navbar from "../../components/navbar/Navbar";
import { articleList } from "../../mockData";

export default function Homepage() {
  const [articles, setArticles] = useState(articleList);
  return (
    <section className="HomePage">
      <Navbar />
      <HomeSite />
      {!articles.length ? (
        <Emptylist />
      ) : (
        <NewestArticles articles={articles} />
      )}

      {!articles.length ? (
        <Emptylist />
      ) : (
        <TrendingArticles articles={articles} />
      )}
      <Footer />
    </section>
  );
}
