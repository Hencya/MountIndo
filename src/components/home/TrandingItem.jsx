// library
import React from "react";
import { Link } from "react-router-dom";
// css
import styles from "./TrandingItem.module.css";
// assets
// import Blog1 from "../../assets/images/popular-post/m-blog-1.jpg";

export default function TrandingItem(props) {
  const { article } = props;
  return (
    <div className={`${styles.trandingContent}`}>
      <div className={`${styles.posts}`}>
        <div className={`${styles.postContent} mb-5`}>
          <div className={`${styles.postImage}`}>
            <div>
              <img
                src={article.cover}
                alt="trandingBlog1"
                className={`${styles.img}`}
              />
            </div>
            <div className={`${styles.postInfo}`}>
              <span>
                <i className="fas fa-user" style={{ color: "#C4C4C4" }}>
                  &nbsp;&nbsp;{article.authorName}
                </i>
              </span>
              <span>
                <i className="fas fa-calendar-alt" style={{ color: "#C4C4C4" }}>
                  &nbsp;&nbsp;{article.createdAt}
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
            <p style={{ color: "#686666da" }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
              voluptas deserunt beatae adipisci iusto totam placeat corrupti
              ipsum, tempora magnam incidunt aperiam tenetur a nobis, voluptate,
              numquam architecto fugit. Eligendi quidem ipsam ducimus minus
              magni illum similique veniam tempore unde?
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
