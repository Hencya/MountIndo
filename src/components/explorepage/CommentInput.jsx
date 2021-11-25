// library
import React from "react";
// css
// import styles from "./CommentInput.module.css";

export default function CommentInput() {
  return (
    <div className="mt-4">
      <div class="form-floating">
        <textarea
          class="form-control"
          id="floatingTextarea2"
          style={{ height: "100px" }}
        ></textarea>
        <label for="floatingTextarea2">Leave a comment here</label>
      </div>
      <div className="py-3 pb-5">
        <button
          className={`btn text-white px-4 mt-2 `}
          style={{ backgroundColor: "#3086AC" }}
        >
          Submit Comment
        </button>
      </div>
    </div>
  );
}
