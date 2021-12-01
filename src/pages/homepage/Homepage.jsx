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
      {!loadingNewestArticles ? (
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
      {!loadingGetTrandingArticles ? (
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
