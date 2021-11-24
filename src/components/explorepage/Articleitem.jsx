// library;
import React from "react";
import { Link } from "react-router-dom";
// css
import styles from "./Articleitem.module.css";
// component
import Chip from "./Chip";

const ArticleItem = ({
  article: {
    description,
    title,
    createdAt,
    authorName,
    authorAvatar,
    cover,
    category,
    id,
  },
}) => {
  return (
    <div className={`${styles.articleItem}`}>
      <img className={`${styles.articleItemCover}`} src={cover} alt="cover" />
      <Chip label={category} />
      <h3 style={{ flex: 1, margin: "0.5rem 0 1rem 0" }}>{title}</h3>
      <p className={`${styles.articleItemDesc}`}>{description}</p>
      <footer className={`${styles.footer}`}>
        <div className={`${styles.articleItemAuthor}`}>
          <img className={`${styles.avatar}`} src={authorAvatar} alt="avatar" />
          <div>
            <h6>{authorName}</h6>
            <p
              style={{
                color: "#686666da",
                fontSize: "0.6rem",
                fontWeight: 600,
              }}
            >
              {createdAt}
            </p>
          </div>
        </div>
        <Link className={`${styles.articleItemLink}`} to={`/article/${id}`}>
          ➝
        </Link>
      </footer>
    </div>
  );
};

export default ArticleItem;

// to={`/article/${id}`}
