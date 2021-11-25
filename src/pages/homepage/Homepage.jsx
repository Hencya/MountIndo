// library
import React from "react";
// component
import Footer from "../../components/footer/Footer";
import HomeSite from "../../components/home/HomeSite";
import NewestArticles from "../../components/home/NewestArticles";
import TrendingArticles from "../../components/home/TrendingArticles";
import Navbar from "../../components/navbar/Navbar";

export default function Homepage() {
  return (
    <section className="HomePage">
      <Navbar />
      <HomeSite />
      <NewestArticles />
      <TrendingArticles />
      <Footer />
    </section>
  );
}
