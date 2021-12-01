// library
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import { useSelector } from "react-redux";
// css
import styles from "./Articlepage.module.css";
// components
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import Emptylist from "../../components/emptylist/Emptylist";
import Comment from "../../components/articlepage/Comment";
import CommentInput from "../../components/articlepage/CommentInput";
import useGetArticleById from "../../hooks/useGetArticleById";
import Loading from "../../components/loading/Loading";
import LoadingVerySmall from "../../components/loading/LoadingVerySmall";
// hook
import useGetCommentsByArticleId from "../../hooks/useGetCommentsByArticleId";
import useUpdateLike from "../../hooks/useUpdateLike";
import useLikeSubccription from "../../hooks/useLikeSubccription";
import useInsertLikeTable from "../../hooks/useInsertLikeTable";
import useGetLikeTableByUserAndArticleId from "../../hooks/useGetLikeTableByUserAndArticleId";
import useDeleteLikeTable from "../../hooks/useDeleteLikeTable";

export default function Articlepage() {
  const { id } = useParams();
  const currentUserId = useSelector((state) => state.auth.userId);
  const isLogin = useSelector((state) => state.auth.login);

  const { dataAllComments, loadingAllComments, errorAllComments } =
    useGetCommentsByArticleId(id);
  // article
  const {
    updateLikeArticle,
    loadingUpdateLikeArticle,
    errorUpdateLikeArticle,
  } = useUpdateLike();
  const { dataLikeSubs, loadingLikeSubs, errorLikeSubs } =
    useLikeSubccription(id);
  const {
    dataGetArticleById,
    loadingGetArticleById,
    errorGetArticleById,
    subscribeLikes,
  } = useGetArticleById(id);
  // like table
  const { dataGetTableLike, loadingGetTableLike, errorGetTableLike } =
    useGetLikeTableByUserAndArticleId(currentUserId, id);
  const { insertTableLike, loadingInsertTableLike, errorInsertATableLike } =
    useInsertLikeTable();
  const { deleteTableLike, loadingDeleteTableLike, errorDeleteTableLike } =
    useDeleteLikeTable();

  const [isLiked, setIsLiked] = useState(false);
  const [tableLike, setTableLike] = useState();
  const [commentList, setCommentList] = useState([]);
  const [article, setArticle] = useState({});

  if (
    errorGetArticleById ||
    errorUpdateLikeArticle ||
    errorLikeSubs ||
    errorAllComments ||
    errorGetArticleById ||
    errorGetTableLike ||
    errorDeleteTableLike ||
    errorInsertATableLike
  ) {
    console.log(errorGetArticleById);
    console.log(errorLikeSubs);
    console.log(errorUpdateLikeArticle);
    console.log(errorAllComments);
    console.log(errorGetArticleById);
    console.log(errorGetTableLike);
    console.log(errorDeleteTableLike);
    console.log(errorInsertATableLike);
  }

  useEffect(() => {
    let mounted = true;
    const onMount = () => {
      if (
        !loadingGetArticleById &&
        !loadingAllComments &&
        !loadingUpdateLikeArticle &&
        !loadingLikeSubs &&
        !loadingGetTableLike &&
        !loadingInsertTableLike &&
        !loadingDeleteTableLike
      ) {
        if (isLogin) {
          subscribeLikes();
          if (dataGetTableLike) {
            setTableLike(dataGetTableLike?.MountIndo_Like);
          }
        }
        if (dataGetArticleById) {
          setArticle(dataGetArticleById?.MountIndo_Article_by_pk);
        }

        if (dataAllComments) {
          setCommentList(dataAllComments?.MountIndo_Comment);
        }
      }
    };
    if (mounted) onMount();
    return () => {
      mounted = false;
    };
  }, [
    dataGetArticleById,
    loadingGetArticleById,
    dataAllComments,
    loadingAllComments,
    loadingLikeSubs,
    loadingUpdateLikeArticle,
    subscribeLikes,
    isLogin,
    dataLikeSubs,
    loadingGetTableLike,
    loadingDeleteTableLike,
    loadingInsertTableLike,
    dataGetTableLike,
  ]);

  console.log("Like", tableLike);
  // console.log(
  //   "article Likes",
  //   dataGetArticleById?.MountIndo_Article_by_pk.like
  // );
  console.log("ini likes before click", dataLikeSubs?.MountIndo_Article_by_pk);
  // console.log("subs likes click", dataLikeSubs?.MountIndo_Article_by_pk.like);

  const onClickLike = () => {
    const likes = dataLikeSubs?.MountIndo_Article_by_pk.like;
    console.log("ini likes after click", likes);

    if (isLiked) {
      setIsLiked(false);
      deleteTableLike({
        variables: {
          id_article: id,
          id_user: currentUserId,
        },
      });

      updateLikeArticle({
        variables: {
          id: id,
          like: likes - 1,
        },
      });
    } else {
      setIsLiked(true);
      insertTableLike({
        variables: {
          id_article: id,
          id_user: currentUserId,
        },
      });

      updateLikeArticle({
        variables: {
          id: id,
          like: likes + 1,
        },
      });
    }
  };

  return (
    <section className={styles.articlePage}>
      <Navbar />
      {loadingGetArticleById || loadingAllComments || loadingLikeSubs ? (
        <div className="">
          <Loading />
        </div>
      ) : (
        <>
          {article ? (
            <div className={`${styles.articleWrap} pt-5`}>
              <Link className={`${styles.articleGoBack} pt-5`} to="/">
                <span> &#8592;</span> <span>Go Back</span>
              </Link>
              <header className="text-center pb-5">
                <p className={`${styles.articleDate}  `}>
                  Published {article.created_at}
                </p>
                <h1>{article.title}</h1>
              </header>
              <div className="d-flex ms-auto mb-3 d-flex align-items-lg-center text-center w-100">
                <img
                  className={`${styles.avatar}`}
                  src={article.author_avatar}
                  alt="avatar"
                />
                <h6 className="fw-bold mt-2">{article.author_name}</h6>
              </div>
              <img
                className="w-100 rounded-3"
                src={article.image}
                alt="cover"
              />
              <p className={`${styles.articleDesc}  `}>{article.description}</p>
              <div className="d-flex ms-auto mb-3 d-flex align-items-lg-center text-center w-100">
                <h6 className="fw-bold mt-2">Likes</h6>
                {isLiked ? (
                  <button
                    className="p-0 border-0 bg-white"
                    onClick={onClickLike}
                    disabled={loadingUpdateLikeArticle || !isLogin}
                  >
                    <Icon
                      className="ms-3 mt-1"
                      icon="ant-design:heart-filled"
                      color="#ea2323"
                      width="31"
                    />
                  </button>
                ) : (
                  <button
                    className="p-0 border-0 bg-white"
                    onClick={onClickLike}
                    disabled={loadingUpdateLikeArticle || !isLogin}
                  >
                    <Icon
                      className="ms-3 mt-1"
                      icon="ant-design:heart-outlined"
                      color="#ea2323"
                      width="31"
                    />
                  </button>
                )}
                {loadingUpdateLikeArticle || loadingLikeSubs ? (
                  <div className="me-auto ">
                    <LoadingVerySmall />
                  </div>
                ) : (
                  <h6 className="ms-2 mt-2 my-0 ">
                    {dataLikeSubs?.MountIndo_Article_by_pk.like}
                  </h6>
                )}
              </div>

              <div className="py-5">
                <h5 className="fw-bolder">{`Komentar (${commentList.length})`}</h5>
                {commentList.map((comment) => (
                  <Comment currentUserId={currentUserId} comment={comment} />
                ))}
              </div>

              <div className="py-5">
                <h5 className="fw-bolder">Add Comment</h5>
                <CommentInput />
              </div>
            </div>
          ) : (
            <>
              <Emptylist />
              <Footer />
            </>
          )}
          <Footer />
        </>
      )}
    </section>
  );
}
