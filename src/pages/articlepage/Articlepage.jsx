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
import Emptylist from "../../components/emptylist/Emptylist";
import Comment from "../../components/articlepage/Comment";
import CommentInput from "../../components/articlepage/CommentInput";
import useGetArticleById from "../../hooks/useGetArticleById";
import Loading from "../../components/loading/Loading";

export default function Articlepage() {
  // const [article, setArticle] = useState(null);

  // useEffect(() => {
  //   let article = articleList.find((article) => article.id === parseInt(id));
  //   if (article) {
  //     setArticle(article);
  //   }
  // }, [id]);

  const { id } = useParams();
  const { dataGetArticleById, loadingGetArticleById, errorGetArticleById } =
    useGetArticleById(id);

  const [article, setArticle] = useState({});

  if (errorGetArticleById) {
    console.log(errorGetArticleById);
  }

  useEffect(() => {
    if (!loadingGetArticleById) {
      if (dataGetArticleById) {
        setArticle(dataGetArticleById?.MountIndo_Article_by_pk);
      }
    } else if (loadingGetArticleById) {
      <Loading />;
    }
  }, [dataGetArticleById, loadingGetArticleById]);

  return (
    <section className={styles.articlePage}>
      <Navbar />
      {loadingGetArticleById ? (
        <div className="">
          <Loading />
        </div>
      ) : (
        <>
          {article ? (
            <div className={`${styles.articleWrap} pt-5`}>
              <Link className={`${styles.articleGoBack} pt-5`} to="/">
                <span> &#8592;</span> <span>Go Back</span>
              </Link>
              <header className="text-center pb-5">
                <p className={`${styles.articleDate}  `}>
                  Published {article.created_at}
                </p>
                <h1>{article.title}</h1>
              </header>
              <div className="d-flex ms-auto mb-3 d-flex align-items-lg-center text-center w-100">
                <img
                  className={`${styles.avatar}`}
                  src={article.author_avatar}
                  alt="avatar"
                />
                <h6 className="fw-bold mt-2">{article.author_name}</h6>
              </div>
              <img
                className="w-100 rounded-3"
                src={article.image}
                alt="cover"
              />
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

              <div className="py-5">
                <h5 className="fw-bolder">Add Comment</h5>
                <CommentInput />
              </div>
            </div>
          ) : (
            <>
              <Emptylist />
              <Footer />
            </>
          )}
          <Footer />
        </>
      )}
    </section>
  );
}
