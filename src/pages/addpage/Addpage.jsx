// library
import React from "react";
// component
import PostArticle from "../../components/PostArticle/PostArticle";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Navbar from "../../components/Navbar/Navbar";
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
      <PostArticle />
      <Footer />
    </section>
  );
}
