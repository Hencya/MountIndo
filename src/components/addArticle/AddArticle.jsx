import React from "react";
// css
import styles from "./AddArticle.module.css";

export default function AddArticle() {
  return (
    <div className={`${styles.newArticle} mb-5`}>
      <h3 className="text-center mt-5">Add New Article</h3>
      <div className=" mt-5">
        <div className="form-floating">
          <textarea
            className="form-control"
            placeholder="Add Title"
            id="floatingTextarea"
          ></textarea>
          <label for="floatingTextarea">Add Title</label>
        </div>
        <div className="mt-3 mb-5">
          <div class="form-floating">
            <textarea
              className="form-control"
              placeholder="Add Description"
              style={{ height: "400px" }}
              id="floatingTextarea"
            ></textarea>
            <label for="floatingTextarea">Add Description</label>
          </div>
        </div>
        <div className="mt-3 mb-5">
          <input type="file" />
        </div>
      </div>
      <div class="d-grid gap-2">
        <button
          className={`btn text-white px-4 d-flex justify-content-center`}
          style={{ backgroundColor: "#5B5B5B" }}
        >
          Submit Post
        </button>
      </div>
    </div>
  );
}
