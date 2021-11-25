// library
import React, { useState } from "react";
// components
import Emptylist from "../../components/emptylist/Emptylist";
import Articlelist from "../../components/explorepage/Articlelist";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import Searchbar from "../../components/serachBar/Searchbar";
import { articleList } from "../../mockData";
// css
import "./Explorepage.css";

export default function Explorepage() {
  const [articles, setArticles] = useState(articleList);
  const [searchKey, setSearchKey] = useState("");

  // Search submit
  const handleSearchBar = (e) => {
    e.preventDefault();
    handleSearchResults();
  };

  // Search for blog by category
  const handleSearchResults = () => {
    const allArticles = articleList;
    const filteredArticles = allArticles.filter((article) =>
      article.category.toLowerCase().includes(searchKey.toLowerCase().trim())
    );
    setArticles(filteredArticles);
  };

  // Clear search and show all blogs
  const handleClearSearch = () => {
    setArticles(articleList);
    setSearchKey("");
  };

  const titleH1 = "Find Your New Journey";
  const titleH2 = "Mountain";
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
      {!articles.length ? <Emptylist /> : <Articlelist articles={articles} />}
      <Footer />
    </div>
  );
}
