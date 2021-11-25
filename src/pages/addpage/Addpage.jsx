// library
import React from "react";
// component
import AddArticle from "../../components/addArticle/AddArticle";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
// css
import styles from "./Addpage.module.css";

export default function Addpage() {
  const titleH1 = "Share Your New Journey";
  const titleH2 = "Mountain";
  const quote =
    "Hanyalah persiapan, pengetahuan, dan pengalaman yang membuat kita. mampu bertahan hidup";

  return (
    <section className={styles.AddArticlePage}>
      <Navbar />
      <Header titleH1={titleH1} titleH2={titleH2} quote={quote} />
      <AddArticle />
      <Footer />
    </section>
  );
}
