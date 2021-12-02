/* eslint-disable react-hooks/rules-of-hooks */
// library
import React, { useState } from "react";
import moment from "moment";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
// css
import styles from "./UpdateArticle.module.css";
// firebase
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { app } from "../../config/firebase/firebase";
// components
import LoadingSmall from "../Loading/LoadingSmall";
import Emptylist from "../EmptyList/Emptylist";
import Loading from "../Loading/Loading";
// hooks

import useValidateForm from "../../hooks/useValidation";
import useUpdateArticleByUserId from "../../hooks/useUpdateArticleByUserId";
import useGetArticleById from "../../hooks/useGetArticleById";

export default function UpdateArticle(props) {
  const navigate = useNavigate();
  const { validateForm } = useValidateForm();

  const { id } = useParams();
  const isLogin = useSelector((state) => state.auth.login);
  const authorId = useSelector((state) => state.auth.userId);
  const author_name = useSelector((state) => state.auth.fullname);

  const [loadingUpload, setLoadingUpload] = useState(false);
  const [isUpload, setIsUpload] = useState(false);

  const { dataGetArticleById, loadingGetArticleById, errorGetArticleById } =
    useGetArticleById(id);
  const {
    updateArticleById,
    loadingUpdateArticleById,
    errorUpdateArticleById,
  } = useUpdateArticleByUserId();

  if (errorUpdateArticleById || errorGetArticleById) {
    console.log(errorUpdateArticleById);
    console.log(errorGetArticleById);
  }

  if (loadingGetArticleById) {
    <Loading />;
  }

  const createdAt = moment().format("LL");
  const initialValue = {
    title: dataGetArticleById?.MountIndo_Article_by_pk.title,
    description: dataGetArticleById?.MountIndo_Article_by_pk.description,
    image: dataGetArticleById?.MountIndo_Article_by_pk.image,
    createdAt: createdAt,
  };

  const basedError = {
    title: "",
    description: "",
    image: "",
  };

  const [errorMessage, setErrorMessage] = useState(basedError);
  const [formUpdateArticle, setFormUpdateArticle] = useState(initialValue);

  const onBlur = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    const messages = validateForm(name, value, undefined);
    setErrorMessage({ ...errorMessage, ...messages });
  };

  const onChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormUpdateArticle({ ...formUpdateArticle, [name]: value });
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
            setFormUpdateArticle({ ...formUpdateArticle, image: url });
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
        if (formUpdateArticle[key] === "") {
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
    const validField = Object.keys(formUpdateArticle).filter(
      (key) => formUpdateArticle[key] !== ""
    );
    if (validField.length < 3) {
      validateOnSubmit();
    } else {
      updateArticleById({
        variables: {
          description: formUpdateArticle.description,
          title: formUpdateArticle.title,
          image: formUpdateArticle.image,
          created_at: formUpdateArticle.createdAt,
          id: id,
          id_user: authorId,
        },
      });
      if (!loadingUpdateArticleById) {
        navigate("/profile");
      }
    }
  };

  return (
    <div className={`${styles.updateArticle} mb-5`}>
      {!isLogin ? (
        <>
          <h5 className="text-danger text-center fw-bol mt-4">
            You Must Login First
          </h5>
          <Emptylist />
        </>
      ) : (
        <>
          <h3 className="text-center mt-5">Update Article</h3>
          <form className="mt-5 px-5" onSubmit={onSubmit}>
            <div className="form-floating">
              <textarea
                className="form-control"
                name="title"
                value={formUpdateArticle.title}
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
                  value={formUpdateArticle.description}
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
                {loadingUpdateArticleById ? <LoadingSmall /> : "Update Article"}
              </button>
            </div>
          </form>
        </>
      )}
    </div>
  );
}
