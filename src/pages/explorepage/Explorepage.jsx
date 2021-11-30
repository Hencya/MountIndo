// library
import React, { useState, useEffect } from "react";
// components
import Emptylist from "../../components/emptylist/Emptylist";
import Articlelist from "../../components/explorepage/Articlelist";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import LoadingSearching from "../../components/loading/LoadingSearching";
import Navbar from "../../components/navbar/Navbar";
import Searchbar from "../../components/serachBar/Searchbar";
import useGetAllArticles from "../../hooks/useGetAllArticles";
// css
import "./Explorepage.css";

export default function Explorepage() {
  // const [articles, setArticles] = useState(articleList);
  // const [searchKey, setSearchKey] = useState("");

  // // Search submit
  // const handleSearchBar = (e) => {
  //   e.preventDefault();
  //   handleSearchResults();
  // };

  // // Search for blog by category
  // const handleSearchResults = () => {
  //   const allArticles = articleList;
  //   const filteredArticles = allArticles.filter((article) =>
  //     article.category.toLowerCase().includes(searchKey.toLowerCase().trim())
  //   );
  //   setArticles(filteredArticles);
  // };

  // // Clear search and show all blogs
  // const handleClearSearch = () => {
  //   setArticles(articleList);
  //   setSearchKey("");
  // };

  const { dataAllArticles, loadingGetAllArticles, errorGetAllArticles } =
    useGetAllArticles();

  const [articles, setarticles] = useState([]);

  useEffect(() => {
    if (!loadingGetAllArticles && dataAllArticles) {
      setarticles(dataAllArticles?.MountIndo_Article);
    }
  }, [dataAllArticles, loadingGetAllArticles]);

  if (errorGetAllArticles) {
    console.log(errorGetAllArticles);
  }

  console.log("articles", articles);
  console.log("get articles", dataAllArticles);
  console.log("get articles 2", dataAllArticles?.MountIndo_Article);

  const titleH1 = "Find Your New Journey";
  const titleH2 = "Mountain";
  const quote =
    "Jangan mengambil apa pun selain gambar, Jangan meninggalkan apa pun selain jejak. Jangan membunuh apa pun selain waktu";

  return (
    <div className="Explorepage">
      <Navbar />
      <Header titleH1={titleH1} titleH2={titleH2} quote={quote} />
      {/* <Searchbar
        value={searchKey}
        clearSearch={handleClearSearch}
        formSubmit={handleSearchBar}
        handleSearchKey={(e) => setSearchKey(e.target.value)}
      /> */}
      {!loadingGetAllArticles ? (
        <>
          {!articles.length ? (
            <Emptylist message={"Articles Don't Exist "} />
          ) : (
            <Articlelist articles={articles} />
          )}
        </>
      ) : (
        <LoadingSearching />
      )}

      <Footer />
    </div>
  );
}
