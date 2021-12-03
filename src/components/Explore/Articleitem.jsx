// library;
import React from "react";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
// css
import styles from "./Articleitem.module.css";
// component

export default function Articleitem(props) {
  const { article } = props;

  return (
    <div className={`${styles.articleItem} m-3`}>
      <img
        className={`${styles.articleItemCover}`}
        src={article.image}
        alt="cover"
      />
      <div className="d-flex justify-content-between bg-white w-100">
        <h4
          className={styles.title}
          style={{ flex: 1, margin: "0.5rem 0 1rem 0" }}
        >
          {article.title}
        </h4>
        <div className="text-center mt-1">
          <Icon icon="ant-design:heart-filled" color="#ea2323" width="20" />
          <p style={{ fontSize: "15px" }}>{article.like}</p>
        </div>
      </div>
      <p className={`${styles.articleItemDesc}`}>{article.description}</p>
      <footer className={`${styles.footer}`}>
        <div className={`${styles.articleItemAuthor}`}>
          <img
            className={`${styles.avatar}`}
            src={article.author_avatar}
            alt="avatar"
          />
          <div>
            <h6 className={styles.authorName} style={{ marginBottom: "0px" }}>
              {article.author_name}
            </h6>
            <p
              style={{
                color: "#686666da",
                fontSize: "0.6rem",
                fontWeight: 600,
              }}
            >
              {article.created_at}
            </p>
          </div>
        </div>
        <Link
          className={`${styles.articleItemLink} fs-4 fw-bold `}
          to={`/article/${article.id}`}
        >
          ➝
        </Link>
      </footer>
    </div>
  );
}
