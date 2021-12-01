// library
import React from "react";
import { Link } from "react-router-dom";
// css
import styles from "./TrandingItem.module.css";

export default function TrandingItem(props) {
  const { article } = props;
  return (
    <div className={`${styles.trandingContent}`}>
      <div className={`${styles.posts}`}>
        <div className={`${styles.postContent} mb-5`}>
          <div className={`${styles.postImage}`}>
            <div>
              <img
                src={article.image}
                alt="trandingArticle"
                className={`${styles.img}`}
              />
            </div>
            <div className={`${styles.postInfo}`}>
              <span>
                <i className="fas fa-user" style={{ color: "#C4C4C4" }}>
                  &nbsp;&nbsp;{article.author_name}
                </i>
              </span>
              <span>
                <i className="fas fa-calendar-alt" style={{ color: "#C4C4C4" }}>
                  &nbsp;&nbsp;{article.created_at}
                </i>
              </span>
              <span>
                {article.comments > 1 ? (
                  <i className="fas fa-comment " style={{ color: "#C4C4C4" }}>
                    &nbsp;&nbsp;{article.comments} Comments
                  </i>
                ) : (
                  <i className="fas fa-comment " style={{ color: "#C4C4C4" }}>
                    &nbsp;&nbsp;{article.comments} Comment
                  </i>
                )}
              </span>
            </div>
          </div>
          <div className={`${styles.postTitle} `}>
            <Link
              to="/article/:id"
              style={{ textDecoration: "none", color: "black" }}
            >
              {article.title}
            </Link>
            <p
              className={styles.articleItemDesc}
              style={{ color: "#686666da" }}
            >
              {article.description}
            </p>
            <Link to={`/article/${article.id}`}>
              <button
                className={`${styles.postBtn} btn text-white px-4 mt-2 `}
                style={{ backgroundColor: "#3086AC" }}
              >
                Read More
              </button>
            </Link>
          </div>
          <hr />
        </div>
      </div>
    </div>
  );
}
