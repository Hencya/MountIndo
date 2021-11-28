// library;
import React from "react";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
// css
import styles from "./ArticleitemProfile.module.css";
// component

export default function ArticleitemProfile(props) {
  const { article } = props;

  return (
    <div className={`${styles.articleItem} m-3`}>
      <img
        className={`${styles.articleItemCover}`}
        src={article.cover}
        alt="cover"
      />
      <div className="d-flex justify-content-between bg-white w-100">
        <h4 style={{ flex: 1, margin: "0.5rem 0 1rem 0" }}>{article.title}</h4>
        <div className="text-center">
          <Icon icon="ant-design:heart-filled" color="#ea2323" width="31" />
          <p>123</p>
        </div>
      </div>
      <p className={`${styles.articleItemDesc}`}>{article.description}</p>
      <div className="text-end">
        <Icon
          icon="fa-solid:pen"
          color="#c4c4c4"
          width="18"
          height="18"
          className="align-self-end mb-3"
          style={{ cursor: "pointer" }}
        />
        <Icon
          icon="bi:trash-fill"
          color="#c4c4c4"
          width="18"
          height="18"
          className="align-self-end mb-3 ms-2"
          style={{ cursor: "pointer" }}
        />
      </div>
    </div>
  );
}
