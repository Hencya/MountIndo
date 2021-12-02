// library
import React, { useState, useEffect } from "react";
import Emptylist from "../../components/EmptyList/Emptylist";
// css
import "./HomePage.module.css";
// component
import Footer from "../../components/Footer/Footer";
import HomeSite from "../../components/Home/HomeSite";
import NewestArticles from "../../components/Home/NewestArticles";
import TrendingArticles from "../../components/Home/TrendingArticles";
import Loading from "../../components/Loading/Loading";
import Navbar from "../../components/Navbar/Navbar";
// hooks
import useGetNewestArticles from "../../hooks/useGetNewestArticles";
import useGetTrandingArticles from "../../hooks/useGetTrandingArticles";

export default function Homepage() {
  const [trandingArticles, setTrandingArticles] = useState([]);
  const [newestArticles, setNewestArticles] = useState([]);

  const { dataNewestArticles, loadingNewestArticles, errorNewestArticles } =
    useGetNewestArticles();
  const {
    dataGetTrandingArticles,
    loadingGetTrandingArticles,
    errorGetTrandingArticles,
  } = useGetTrandingArticles();

  if (errorNewestArticles || errorGetTrandingArticles) {
    console.log(errorGetTrandingArticles);
    console.log(errorNewestArticles);
  }

  useEffect(() => {
    if (!loadingNewestArticles && !loadingGetTrandingArticles) {
      if (dataNewestArticles) {
        setNewestArticles(dataNewestArticles?.MountIndo_Article);
      }

      if (dataGetTrandingArticles) {
        setTrandingArticles(dataGetTrandingArticles.MountIndo_Article);
      }
    }
  }, [
    dataNewestArticles,
    loadingNewestArticles,
    loadingGetTrandingArticles,
    dataGetTrandingArticles,
  ]);

  return (
    <section className="HomePage">
      <Navbar />
      <HomeSite />
      {!loadingNewestArticles && dataNewestArticles ? (
        <>
          {newestArticles.length === 0 ? (
            <Emptylist message={"Articles Don't Exist"} />
          ) : (
            <NewestArticles articles={newestArticles} />
          )}
        </>
      ) : (
        <Loading />
      )}
      {!loadingGetTrandingArticles && dataGetTrandingArticles ? (
        <>
          {trandingArticles.length === 0 ? (
            <Emptylist message={"Articles Don't Exist"} />
          ) : (
            <TrendingArticles articles={trandingArticles} />
          )}
        </>
      ) : (
        <Loading />
      )}

      <Footer />
    </section>
  );
}
