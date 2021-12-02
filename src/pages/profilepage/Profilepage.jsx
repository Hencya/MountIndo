// library
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
// component
import Emptylist from "../../components/EmptyList/Emptylist";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import ArticlelistProfile from "../../components/Profile/ArticlelistProfile";
import ProfileDetail from "../../components/Profile/ProfileDetail";
import Loading from "../../components/Loading/Loading";
// hooks
import useGetArticlesByUserId from "../../hooks/useGetArticlesByUserId";

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
