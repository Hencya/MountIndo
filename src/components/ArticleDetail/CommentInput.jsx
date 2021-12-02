// library
import React, { useState } from "react";
import moment from "moment";

import { useParams } from "react-router";
import { useSelector } from "react-redux";
// commponent
import LoadingVerySmall from "../Loading/LoadingVerySmall";
// hooks
import useValidateForm from "../../hooks/useValidation";
import useInsertCommentTable from "../../hooks/useInsertCommentTable";
// css
// import styles from "./CommentInput.module.css";

export default function CommentInput() {
  const { id } = useParams();

  const currentUserId = useSelector((state) => state.auth.userId);
  const fullname = useSelector((state) => state.auth.fullname);
  const avatar = useSelector((state) => state.auth.avatar);

  const { validateComment } = useValidateForm();

  const {
    insertTableComment,
    loadingInsertTableComment,
    errorInsertATableComment,
  } = useInsertCommentTable();

  if (errorInsertATableComment) {
    console.log(errorInsertATableComment);
  }

  const initialValue = {
    id_user: currentUserId,
    id_article: id,
    author_name: fullname,
    author_avatar: avatar,
    created_at: "",
    commentar: "",
  };

  const basedError = {
    commentar: "",
  };

  const [errorMessage, setErrorMessage] = useState(basedError);
  const [commentForm, setCommentForm] = useState(initialValue);

  const onChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setCommentForm({ ...commentForm, [name]: value });
  };

  const onBlur = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    const messages = validateComment(name, value);
    setErrorMessage({ ...errorMessage, ...messages });
  };

  const validateOnSubmit = () => {
    setErrorMessage(() => {
      const errorMessageArr = Object.keys(errorMessage).map((key) => {
        if (commentForm[key] === "") {
          const err = `${
            key.charAt(0).toUpperCase() + key.slice(1)
          } Field Cannot be Empty`;

          return { [key]: err };
        }
        return { [key]: "" };
      });
      const updatedErrorMessage = errorMessageArr.reduce(
        (previousValue, currentValue) => {
          return { ...previousValue, ...currentValue };
        },
        {}
      );
      return updatedErrorMessage;
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const createdAt = moment().format("LL");
    const validField = Object.keys(commentForm).filter(
      (key) => commentForm[key] !== ""
    );
    if (validField.length < 5) {
      validateOnSubmit();
    } else {
      insertTableComment({
        variables: {
          id_user: commentForm.id_user,
          id_article: commentForm.id_article,
          created_at: createdAt,
          author_name: commentForm.author_name,
          author_avatar: commentForm.author_avatar,
          commentar: commentForm.commentar,
        },
      });
      if (!loadingInsertTableComment) {
        window.location.reload();
      }
    }
  };

  return (
    <form className="mt-4" onSubmit={onSubmit}>
      <div class="form-floating">
        <textarea
          class="form-control"
          id="floatingTextarea2"
          value={commentForm.commentar}
          style={{ height: "100px" }}
          name="commentar"
          onChange={onChange}
          onBlur={onBlur}
        ></textarea>
        <label for="floatingTextarea2">Leave a comment here</label>
      </div>
      {errorMessage.commentar ? (
        <p className="text-danger mt-2">{errorMessage.commentar}</p>
      ) : (
        ""
      )}
      <div className="py-3 pb-5">
        <button
          className={`btn text-white px-4 mt-2 `}
          style={{ backgroundColor: "#3086AC" }}
          type="submit"
        >
          {loadingInsertTableComment ? <LoadingVerySmall /> : "Submit Comment"}
        </button>
      </div>
    </form>
  );
}
