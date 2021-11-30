// library
import React, { useState, useEffect } from "react";
import Emptylist from "../../components/emptylist/Emptylist";
// component
import Footer from "../../components/footer/Footer";
import HomeSite from "../../components/home/HomeSite";
import NewestArticles from "../../components/home/NewestArticles";
import TrendingArticles from "../../components/home/TrendingArticles";
import Loading from "../../components/loading/Loading";
import Navbar from "../../components/navbar/Navbar";
import useGetNewestArticles from "../../hooks/useGetNewestArticles";
import { articleList } from "../../mockData";

export default function Homepage() {
  const [articles, setArticles] = useState(articleList);

  const [newestArticles, setNewestArticles] = useState([]);

  const { dataNewestArticles, loadingNewestArticles, errorNewestArticles } =
    useGetNewestArticles();

  if (errorNewestArticles) {
    console.log(errorNewestArticles);
  }

  useEffect(() => {
    if (!loadingNewestArticles)
      setNewestArticles(dataNewestArticles.MountIndo_Article);
  }, [dataNewestArticles, loadingNewestArticles]);

  return (
    <section className="HomePage">
      <Navbar />
      <HomeSite />
      {!loadingNewestArticles ? (
        <>
          {!articles.length ? (
            <Emptylist message={"Articles Don't Exist"} />
          ) : (
            <NewestArticles articles={newestArticles} />
          )}
        </>
      ) : (
        <Loading />
      )}

      {!articles.length ? (
        <Emptylist message={"Articles Don't Exist"} />
      ) : (
        <TrendingArticles articles={articles} />
      )}
      <Footer />
    </section>
  );
}
