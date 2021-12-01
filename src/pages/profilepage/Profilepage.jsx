// library
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
// component
import Emptylist from "../../components/emptylist/Emptylist";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import ArticlelistProfile from "../../components/profile/ArticlelistProfile";
import ProfileDetail from "../../components/profile/ProfileDetail";
import useGetArticlesByUserId from "../../hooks/useGetArticlesByUserId";
import Loading from "../../components/loading/Loading";

export default function Profilepage() {
  const authorId = useSelector((state) => state.auth.userId);
  const isLogin = useSelector((state) => state.auth.login);

  const {
    dataArticlesByUserId,
    loadingArticlesByUserId,
    errorArticlesByUserId,
  } = useGetArticlesByUserId(authorId);

  const [articles, setArticles] = useState([]);

  if (errorArticlesByUserId) {
    console.log(errorArticlesByUserId);
  }

  useEffect(() => {
    if (!loadingArticlesByUserId) {
      if (dataArticlesByUserId) {
        setArticles(dataArticlesByUserId?.MountIndo_Article);
      }
    }
  }, [loadingArticlesByUserId, dataArticlesByUserId]);

  return (
    <section className="ProfilePage">
      <Navbar />
      <ProfileDetail />
      {loadingArticlesByUserId ? (
        <Loading />
      ) : (
        <>
          {!articles.length ? (
            !isLogin ? (
              <Emptylist message={"Please Login First"} />
            ) : (
              <Emptylist message={"You Don't Have an Article Yet"} />
            )
          ) : (
            <ArticlelistProfile articles={articles} />
          )}
        </>
      )}
      <Footer />
    </section>
  );
}
