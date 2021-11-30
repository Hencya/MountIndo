// library
import React, { useEffect, useState } from "react";
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
import UseValidateForm from "../../hooks/useValidation";

export default function AddArticle() {
  const authorId = useSelector((state) => state.auth.userId);
  const navigate = useNavigate();

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

  const initialValue = {
    title: "",
    description: "",
    image: "",
    author_avatar: "",
    author_name: "",
  };

  const basedError = {
    title: "",
    description: "",
    image: "",
    login: "",
  };

  const [errorMessage, setErrorMessage] = useState(basedError);
  const [formNewArticle, setFormNewArticle] = useState(initialValue);

  const onBlur = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    const messages = UseValidateForm(name, value);
    setErrorMessage({ ...errorMessage, ...messages });
  };

  const onChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    console.log("ini nama ", name);
    console.log("ini value ", value);
    setFormNewArticle({ ...formNewArticle, [name]: value });
  };

  const onChangeFile = (e) => {
    if (app) {
      const file = e.target.files[0];
      const storageRef = getStorage();
      const fileRef = ref(storageRef, file.name);
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

  const onSubmit = (e) => {
    e.preventDefault();
    const messages = UseValidateForm(undefined, undefined, formNewArticle);
    setErrorMessage({ ...errorMessage, ...messages });
    const invalidFields = Object.keys(messages).filter(
      (key) => messages[key] !== ""
    );
    if (invalidFields.length === 0) {
      insertArticle({ variables: { ...formNewArticle } });
      navigate("/profile");
    }
  };

  useEffect(() => {
    if (!loadingInsertArticle && !loadingGetUserById) {
      if (!dataUser) {
        setErrorMessage({
          ...errorMessage,
          login: "You Must Login First",
        });
      } else if (dataUser) {
        setFormNewArticle({
          ...formNewArticle,
          author_avatar: dataUser.MountIndo_User_by_pk.avatar,
          author_name: dataUser.MountIndo_User_by_pk.fullname,
        });
      }
    }
  }, [
    dataUser,
    loadingInsertArticle,
    errorMessage,
    loadingGetUserById,
    formNewArticle,
  ]);

  console.log(errorMessage);

  return (
    <div className={`${styles.newArticle} mb-5`}>
      {errorMessage.login ? (
        <>
          <h5 className="text-danger text-center fw-bol mt-4">
            {errorMessage.login}
          </h5>
          <Emptylist />
        </>
      ) : (
        <>
          <h3 className="text-center mt-5">Add New Article</h3>
          <form className="mt-5" onSubmit={onSubmit}>
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
          </form>
          <div class="d-grid gap-2">
            <button
              className={`btn text-white px-4 d-flex justify-content-center`}
              style={{ backgroundColor: "#5B5B5B" }}
              type="submit"
            >
              Submit Post
            </button>
          </div>
        </>
      )}
    </div>
  );
}
