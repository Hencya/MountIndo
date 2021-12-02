// library
import React, { useState, useEffect } from "react";
// css
import "./Explorepage.css";
// components
import Emptylist from "../../components/EmptyList/Emptylist";
import Articlelist from "../../components/Explore/Articlelist";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import LoadingSearching from "../../components/Loading/LoadingSearching";
import Navbar from "../../components/Navbar/Navbar";
import Searchbar from "../../components/SearchBar/Searchbar";
// hooks
import useGetAllArticles from "../../hooks/useGetAllArticles";

export default function Explorepage() {
  const [searchKey, setSearchKey] = useState("");
  const [articles, setArticles] = useState([]);

  const { dataAllArticles, loadingGetAllArticles, errorGetAllArticles } =
    useGetAllArticles();

  if (errorGetAllArticles) {
    console.log(errorGetAllArticles);
  }

  useEffect(() => {
    if (!loadingGetAllArticles && dataAllArticles && searchKey === "") {
      setArticles(dataAllArticles?.MountIndo_Article);
    }
  }, [dataAllArticles, loadingGetAllArticles, searchKey]);

  const handleSearchBar = (e) => {
    e.preventDefault();
    handleSearchResults();
  };

  const handleSearchResults = () => {
    const filteredArticles = articles.filter((article) =>
      article.title.toLowerCase().includes(searchKey.toLowerCase().trim())
    );
    setArticles(filteredArticles);
  };

  const handleClearSearch = () => {
    setArticles(dataAllArticles);
    setSearchKey("");
  };

  const titleH2 = "Find Your New Journey";
  const titleH1 = "Mountain";
  const quote =
    "Jangan mengambil apa pun selain gambar, Jangan meninggalkan apa pun selain jejak. Jangan membunuh apa pun selain waktu";

  return (
    <div className="Explorepage">
      <Navbar />
      <Header titleH1={titleH1} titleH2={titleH2} quote={quote} />
      <Searchbar
        value={searchKey}
        clearSearch={handleClearSearch}
        formSubmit={handleSearchBar}
        handleSearchKey={(e) => setSearchKey(e.target.value)}
      />
      {!loadingGetAllArticles ? (
        <>
          {!articles.length ? (
            <Emptylist message={"Articles Don't Exist "} />
          ) : (
            <Articlelist articles={articles} />
          )}
          <Footer />
        </>
      ) : (
        <LoadingSearching />
      )}
    </div>
  );
}
