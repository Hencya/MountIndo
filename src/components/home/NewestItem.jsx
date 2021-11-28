// library
import React from "react";
import { Link } from "react-router-dom";
// css
import styles from "../home/NewestItem.module.css";
// import Blog1 from "../../assets/images/Blog-post/blog1.png";

export default function NewestItem(props) {
  const { article } = props;
  return (
    <div className="item">
      <div className={`${styles.blogContent}`}>
        <img src={article.cover} id="blogPost" alt="blogPost" />
        <div className={`${styles.blogTitle}`}>
          <p className="h3 text-black">{article.title}</p>
          <Link
            className={`${styles.linkBtn} btn text-white px-4 mt-2 mb-2 rounded-pill`}
            style={{ backgroundColor: "#3086AC" }}
            to={`/article/${article.id}`}
          >
            Check
          </Link>
          <span className="d-block" style={{ color: "#686666da" }}>
            {article.time}
          </span>
        </div>
      </div>
    </div>
  );
}
