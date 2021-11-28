// library
import React, { useState } from "react";
// component
import Emptylist from "../../components/emptylist/Emptylist";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import ArticlelistProfile from "../../components/profile/ArticlelistProfile";
import ProfileDetail from "../../components/profile/ProfileDetail";
import { articleList } from "../../mockData";

export default function Profilepage(props) {
  const [articles, setArticles] = useState(articleList);
  return (
    <section className="ProfilePage">
      <Navbar />
      <ProfileDetail />
      {!articles.length ? (
        <Emptylist />
      ) : (
        <ArticlelistProfile articles={articles} />
      )}
      <Footer />
    </section>
  );
}
