import React from "react";
import Footer from "../../components/footer/Footer";
import HomeSite from "../../components/home/HomeSite";
import NewestArticles from "../../components/home/NewestArticles";
import TrendingArticles from "../../components/home/TrendingArticles";
import Navbar from "../../components/navbar/Navbar";

export default function Homepage() {
  return (
    <div className="HomePage">
      <Navbar />
      <HomeSite />
      <NewestArticles />
      <TrendingArticles />
      <Footer />
    </div>
  );
}
