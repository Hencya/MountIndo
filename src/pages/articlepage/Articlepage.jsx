// library
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
// css
import styles from "./Articlepage.module.css";
// components
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import { articleList } from "../../mockData";
import Emptylist from "../../components/emptylist/Emptylist";
import Comment from "../../components/explorepage/Comment";

export default function Articlepage() {
  const { id } = useParams();
  const [article, setArticle] = useState(null);

  useEffect(() => {
    let article = articleList.find((article) => article.id === parseInt(id));
    if (article) {
      setArticle(article);
    }
  }, [id]);
  return (
    <section className="Articlepage">
      <Navbar />
      {article ? (
        <div className={`${styles.articleWrap} pt-5`}>
          <Link className={`${styles.articleGoBack} pt-5`} to="/">
            <span> &#8592;</span> <span>Go Back</span>
          </Link>
          <header className="text-center pb-5">
            <p className={`${styles.articleDate}  `}>
              Published {article.createdAt}
            </p>
            <h1>{article.title}</h1>
          </header>
          <div className="d-flex ms-auto mb-3 d-flex align-items-lg-center text-center w-100">
            <img
              className={`${styles.avatar}`}
              src={article.authorAvatar}
              alt="avatar"
            />
            <h6 className="fw-bold mt-2">{article.authorName}</h6>
          </div>
          <img className="w-100 rounded-3" src={article.cover} alt="cover" />
          <p className={`${styles.articleDesc}  `}>{article.description}</p>
          <div className="d-flex ms-auto mb-3 d-flex align-items-lg-center text-center w-100">
            <h6 className="fw-bold mt-2">Likes</h6>
            <Icon
              className="ms-3"
              icon="ant-design:heart-outlined"
              color="#ea2323"
              width="31"
            />
          </div>

          <div className="py-5">
            <h5 className="fw-bolder">Komentar (3)</h5>
            <Comment />
            <Comment />
            <Comment />
          </div>
        </div>
      ) : (
        <Emptylist />
      )}
      <Footer />
    </section>
  );
}
