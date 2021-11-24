// library;
import React from "react";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
// css
import styles from "./Articleitem.module.css";
// component
import Chip from "./Chip";

export default function Articleitem(props) {
  const { article } = props;

  return (
    <div className={`${styles.articleItem}`}>
      <img
        className={`${styles.articleItemCover}`}
        src={article.cover}
        alt="cover"
      />
      <Chip label={article.category} />
      <div className="d-flex justify-content-between bg-white w-100">
        <h4 style={{ flex: 1, margin: "0.5rem 0 1rem 0" }}>{article.title}</h4>
        <div className="text-center">
          <Icon icon="ant-design:heart-filled" color="#ea2323" width="31" />
          <p>123</p>
        </div>
      </div>
      <p className={`${styles.articleItemDesc}`}>{article.description}</p>
      <footer className={`${styles.footer}`}>
        <div className={`${styles.articleItemAuthor}`}>
          <img
            className={`${styles.avatar}`}
            src={article.authorAvatar}
            alt="avatar"
          />
          <div>
            <h6>{article.authorName}</h6>
            <p
              style={{
                color: "#686666da",
                fontSize: "0.6rem",
                fontWeight: 600,
              }}
            >
              {article.createdAt}
            </p>
          </div>
        </div>
        <Link
          className={`${styles.articleItemLink} fs-4 fw-bold`}
          to={`/article/${article.id}`}
        >
          ➝
        </Link>
      </footer>
    </div>
  );
}
