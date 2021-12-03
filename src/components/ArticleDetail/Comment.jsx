// library
import React from "react";
import { Icon } from "@iconify/react";
import useDeleteCommentTable from "../../hooks/useDeleteCommentTable";
import LoadingSmall from "../loading/LoadingSmall";

export default function Comment(props) {
  const { comment, currentUserId } = props;

  const {
    deleteTableComment,
    loadingDeleteTableComment,
    errorDeleteTableComment,
  } = useDeleteCommentTable();

  if (errorDeleteTableComment) {
    console.log(errorDeleteTableComment);
  }

  console.log(comment.id_article);
  const onClickDelete = () => {
    deleteTableComment({
      variables: {
        id_user: comment.id_user,
        id_article: comment.id_article,
        id: comment.id,
      },
    });
    if (!loadingDeleteTableComment) {
      window.location.reload();
    }
  };

  return (
    <>
      {!loadingDeleteTableComment ? (
        <div
          className="d-flex flex-wrap mt-4 justify-content-between"
          style={{ borderBottom: "1px solid #8F8D8D" }}
        >
          <img
            className="rounded-circle "
            src={comment.author_avatar}
            alt="user"
            style={{ width: "45px", height: "45px" }}
          />
          <div className="d-flex flex-column flex-fill ms-1 ms-md-4 w-75">
            <h6 className="fw-bolder">{comment.author_name}</h6>
            <p style={{ color: "#8F8D8D" }}>{comment.created_at}</p>
            <p>{comment.commentar}</p>
          </div>
          {currentUserId === comment.id_user ? (
            <>
              <Icon
                icon="bi:trash-fill"
                color="#c4c4c4"
                width="18"
                height="18"
                onClick={onClickDelete}
                className="align-self-end mb-3 ms-2"
                style={{ cursor: "pointer" }}
              />
            </>
          ) : (
            ""
          )}
        </div>
      ) : (
        <LoadingSmall />
      )}
    </>
  );
}
