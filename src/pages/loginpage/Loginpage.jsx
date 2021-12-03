// library
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
//css
import styles from "./Loginpage.module.css";
// asset
import logoLogin from "../../assets/images/LogoNavbar.png";
// components
import useGetUsernameAndPassword from "../../hooks/useGetUsernamePasswordUser";
import LoadingSmall from "../../components/Loading/LoadingSmall";
// redux
import { login } from "../../config/redux/LoginSlice";

export default function Loginpage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { getUsernameAndPassword, data, loading, error } =
    useGetUsernameAndPassword();

  const [form, setForm] = useState({
    username: "",
    password: "",
  });

  const [errorMsg, setErrorMsg] = useState("");

  const onChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setForm({ ...form, [name]: value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    getUsernameAndPassword({ variables: form });
    if (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (!loading && data) {
      if (data.MountIndo_User.length === 0) {
        setErrorMsg("Username atau password salah");
      } else if (data.MountIndo_User.length !== 0) {
        setErrorMsg("");
        const authData = {
          userId: data.MountIndo_User[0].id,
          username: data.MountIndo_User[0].username,
          login: true,
          avatar: data.MountIndo_User[0].avatar,
          fullname: data.MountIndo_User[0].fullname,
        };
        dispatch(login(authData));
        navigate("/");
      }
    }
  }, [data, loading, dispatch, navigate]);

  console.log(data);

  return (
    <section className={`${styles.hero} vh-100 d-flex align-items-center`}>
      <div className={`${styles.overlay}`} />
      <div className="text-center">
        <div className="position-absolute top-50 start-50 translate-middle">
          <div className={`${styles.loginCard} card`}>
            <div className="card-body">
              <img className="w-25 h-10" src={logoLogin} alt="logo" />
              <div className={`${styles.title} card-title`}>Login</div>
              <p className="text-center text-danger">{errorMsg}</p>
              <form onSubmit={onSubmit}>
                <div className="mb-3 form-group" controlId="formBasicUsername">
                  <div className={`${styles.formLabel} form-label`}>
                    Username
                  </div>

                  <input
                    value={form.username}
                    name="username"
                    onChange={onChange}
                    className={`${styles.formControl} form-control mt-2`}
                    type="text"
                    placeholder="Insert your username"
                  />
                </div>

                <div className="mb-3 form-group" controlId="formBasicUsername">
                  <div className={`${styles.formLabel} form-label`}>
                    Password
                  </div>

                  <input
                    value={form.password}
                    name="password"
                    onChange={onChange}
                    className={`${styles.formControl} form-control mt-2`}
                    type="password"
                    placeholder="Insert your password"
                  />
                </div>
                {loading ? (
                  <LoadingSmall />
                ) : (
                  <button
                    className={`${styles.button} btn text-white mt-4 `}
                    type="submit"
                    style={{ backgroundColor: "#249C46" }}
                  >
                    Log In
                  </button>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
