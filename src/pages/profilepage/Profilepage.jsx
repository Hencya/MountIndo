// library
import React, { useState } from "react";
import { useSelector } from "react-redux";
// component
import Emptylist from "../../components/emptylist/Emptylist";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import ArticlelistProfile from "../../components/profile/ArticlelistProfile";
import ProfileDetail from "../../components/profile/ProfileDetail";
import { articleList } from "../../mockData";

export default function Profilepage(props) {
  const [articles, setArticles] = useState(articleList);
  const id = useSelector((state) => state.auth.userId);
  return (
    <section className="ProfilePage">
      <Navbar />
      <ProfileDetail />
      {!articles.length ? (
        id !== -1 ? (
          <Emptylist message={"Please Login First"} />
        ) : (
          <Emptylist message={"You Don't Have an Article Yet"} />
        )
      ) : (
        <ArticlelistProfile articles={articles} />
      )}
      <Footer />
    </section>
  );
}
