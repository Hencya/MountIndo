// library;
import React, { useEffect } from "react";
import { Icon } from "@iconify/react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
// css
import styles from "./ArticleitemProfile.module.css";
// component
import LoadingSmall from "../Loading/LoadingSmall";
// hooks
import useDeleteArticleByUserId from "../../hooks/useDeleteArticleByUserId";

export default function ArticleitemProfile(props) {
  const { article } = props;
  const navigate = useNavigate();

  const { deleteArticle, loadingDeleteArticle, errorDeleteArticle } =
    useDeleteArticleByUserId();

  if (errorDeleteArticle) {
    console.log(errorDeleteArticle);
  }

  useEffect(() => {
    if (!loadingDeleteArticle) {
      navigate("/profile");
    }
  }, [loadingDeleteArticle, navigate]);

  const onClickDelete = () => {
    deleteArticle({ variables: { id_user: article.id_user, id: article.id } });
  };

  return (
    <div className={`${styles.articleItem} m-3 mt-4`}>
      {loadingDeleteArticle ? (
        <LoadingSmall />
      ) : (
        <>
          <img
            className={`${styles.articleItemCover}`}
            src={article.image}
            alt="cover"
          />
          <div className="d-flex justify-content-between bg-white w-100">
            <h4 style={{ flex: 1, margin: "0.5rem 0 1rem 0" }}>
              {article.title}
            </h4>
            <div className="text-center">
              <Icon icon="ant-design:heart-filled" color="#ea2323" width="31" />
              <p>{article.like}</p>
            </div>
          </div>
          <p className={`${styles.articleItemDesc}`}>{article.description}</p>
          <footer className={`${styles.footer}`}>
            <div className={`${styles.articleItemAuthor}`}>
              <Link to={`/article/${article.id}`}>
                <button
                  className={`${styles.postBtn} btn text-white `}
                  style={{ backgroundColor: "#3086AC" }}
                >
                  Check
                </button>
              </Link>
            </div>
            <div className="text-end mt-3">
              <Link to={`/update-article/${article.id}`}>
                <Icon
                  icon="fa-solid:pen"
                  color="#c4c4c4"
                  width="18"
                  height="18"
                  className="align-self-end mb-3"
                  style={{ cursor: "pointer" }}
                />
              </Link>

              <Icon
                icon="bi:trash-fill"
                color="#c4c4c4"
                width="18"
                height="18"
                onClick={onClickDelete}
                className="align-self-end mb-3 ms-2"
                style={{ cursor: "pointer" }}
              />
            </div>
          </footer>
        </>
      )}
    </div>
  );
}
