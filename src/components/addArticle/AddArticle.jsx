/* eslint-disable react-hooks/rules-of-hooks */
// library
import React, { useEffect, useState } from "react";
import moment from "moment";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";
// css
import styles from "./AddArticle.module.css";
// firebase
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { app } from "../../config/firebase/firebase";
// components
import LoadingSmall from "../loading/LoadingSmall";
import useInsertArticle from "../../hooks/useInsertArticle";
import useGetUserById from "../../hooks/useGetUserById";
import Emptylist from "../emptylist/Emptylist";
import useValidateForm from "../../hooks/useValidation";
import Loading from "../loading/Loading";

export default function AddArticle() {
  const navigate = useNavigate();

  const { validateForm } = useValidateForm();
  const authorId = useSelector((state) => state.auth.userId);
  const isLogin = useSelector((state) => state.auth.login);
  const author_avatar = useSelector((state) => state.auth.avatar);
  const author_name = useSelector((state) => state.auth.fullname);

  const [loadingUpload, setLoadingUpload] = useState(false);
  const [isUpload, setIsUpload] = useState(false);

  const { dataUser, loadingGetUserById, errorGetUserById } =
    useGetUserById(authorId);
  const { insertArticle, loadingInsertArticle, errorInsertArticle } =
    useInsertArticle();

  if (errorInsertArticle || errorGetUserById) {
    console.log(errorInsertArticle);
    console.log(errorGetUserById);
  }

  if (loadingGetUserById) {
    <Loading />;
  }

  const createdAt = moment().format("LL");
  const initialValue = {
    title: "",
    description: "",
    image: "",
    id_user: authorId,
    author_avatar: author_avatar,
    author_name: author_name,
    createdAt: createdAt,
  };

  const basedError = {
    title: "",
    description: "",
    image: "",
  };

  const [errorMessage, setErrorMessage] = useState(basedError);
  const [formNewArticle, setFormNewArticle] = useState(initialValue);

  const onBlur = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    const messages = validateForm(name, value, undefined);
    setErrorMessage({ ...errorMessage, ...messages });
  };

  const onChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormNewArticle({ ...formNewArticle, [name]: value });
  };

  const onChangeFile = (e) => {
    if (app) {
      const file = e.target.files[0];
      const storageRef = getStorage();
      const fileRef = ref(
        storageRef,
        `${author_name}-images-article-${file.name}`
      );
      setLoadingUpload(true);
      uploadBytes(fileRef, file).then(() => {
        getDownloadURL(fileRef)
          .then((url) => {
            setFormNewArticle({ ...formNewArticle, image: url });
            setIsUpload(!isUpload);
          })
          .then(() => {
            setLoadingUpload(false);
          });
      });
    }
  };

  const validateOnSubmit = () => {
    setErrorMessage(() => {
      const errorMessageArr = Object.keys(errorMessage).map((key) => {
        if (formNewArticle[key] === "") {
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
    const validField = Object.keys(formNewArticle).filter(
      (key) => formNewArticle[key] !== ""
    );
    if (validField.length < 3) {
      validateOnSubmit();
    } else {
      insertArticle({
        variables: {
          description: formNewArticle.description,
          title: formNewArticle.title,
          author_name: formNewArticle.author_name,
          author_avatar: formNewArticle.author_avatar,
          image: formNewArticle.image,
          created_at: formNewArticle.createdAt,
          id_user: formNewArticle.id_user,
        },
      });
      navigate("/profile");
    }
  };

  return (
    <div className={`${styles.newArticle} mb-5`}>
      {!isLogin ? (
        <>
          <h5 className="text-danger text-center fw-bol mt-4">
            You Must Login First
          </h5>
          <Emptylist />
        </>
      ) : (
        <>
          <h3 className="text-center mt-5">Add New Article</h3>
          <form className="mt-5 px-5" onSubmit={onSubmit}>
            <div className="form-floating">
              <textarea
                className="form-control"
                name="title"
                value={formNewArticle.title}
                onChange={onChange}
                onBlur={onBlur}
                placeholder="Add Title"
                id="floatingTextarea"
              ></textarea>
              <label for="floatingTextarea">Add Title</label>
            </div>
            {errorMessage.title ? (
              <p className="text-danger mt-2">{errorMessage.title}</p>
            ) : (
              ""
            )}
            <div className="mt-3 mb-5">
              <div class="form-floating">
                <textarea
                  className="form-control"
                  name="description"
                  value={formNewArticle.description}
                  onChange={onChange}
                  onBlur={onBlur}
                  placeholder="Add Description"
                  style={{ height: "400px" }}
                  id="floatingTextarea"
                ></textarea>
                <label for="floatingTextarea">Add Description</label>
                {errorMessage.title ? (
                  <p className="text-danger mt-2">{errorMessage.title}</p>
                ) : (
                  ""
                )}
              </div>
            </div>
            {loadingUpload ? (
              <div className="mt-3 mb-5 ">
                <LoadingSmall />
                <p className="text-dark ">Uploading Image ...</p>
              </div>
            ) : (
              <div>
                {isUpload ? (
                  <div className="mt-3 mb-5">
                    <p className="text-success ">Image Uploaded Successfully</p>
                    <input
                      disabled={isUpload}
                      className="d-none"
                      type="file"
                      onChange={onChangeFile}
                    />
                  </div>
                ) : (
                  <div className="mt-3 mb-5 ">
                    {errorMessage.image ? (
                      <p className="text-danger ">{errorMessage.image}</p>
                    ) : (
                      ""
                    )}
                    <input
                      disabled={isUpload}
                      type="file"
                      onChange={onChangeFile}
                    />
                  </div>
                )}
              </div>
            )}
            <div class="d-grid gap-2">
              <button
                className={`btn text-white px-5 d-flex justify-content-center`}
                style={{ backgroundColor: "#5B5B5B" }}
                type="submit"
              >
                {loadingInsertArticle ? <LoadingSmall /> : "Submit Post"}
              </button>
            </div>
          </form>
        </>
      )}
    </div>
  );
}
