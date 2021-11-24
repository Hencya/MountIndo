// library
import React from "react";
import { Link } from "react-router-dom";
// css
import styles from "../home/NewestItem.module.css";
import Blog1 from "../../assets/images/Blog-post/blog1.png";

export default function NewestItem() {
  return (
    <div className="item">
      <div className={`${styles.blogContent}`}>
        <img src={Blog1} id="blogPost1" alt="blogPost1" />
        <div className={`${styles.blogTitle}`}>
          <p className="h3 text-black">Article 1</p>
          <Link
            className={`btn text-white px-4 mt-2 mb-2 rounded-pill`}
            style={{ backgroundColor: "#3086AC" }}
            to="/article:id"
          >
            Check
          </Link>
          <span className="d-block" style={{ color: "#686666da" }}>
            2 minutes
          </span>
        </div>
      </div>
    </div>
  );
}
