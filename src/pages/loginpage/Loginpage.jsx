// library
import React from "react";
//css
import styles from "./Loginpage.module.css";
// asset
import logoLogin from "../../assets/images/LogoNavbar.png";

export default function Loginpage() {
  return (
    <section className={`${styles.hero} vh-100 d-flex align-items-center`}>
      <div className={`${styles.overlay}`} />
      <div className="text-center">
        <div className="position-absolute top-50 start-50 translate-middle">
          <div className={`${styles.loginCard} card`}>
            <div className="card-body">
              <img className="w-25 h-10" src={logoLogin} alt="logo" />
              <div className={`${styles.title} card-title`}>Login</div>
              <form>
                <div className="mb-3 form-group" controlId="formBasicUsername">
                  <div className={`${styles.formLabel} form-label`}>
                    Username
                  </div>

                  <input
                    // value={value}
                    // onChange={handleSearchKey}
                    className={`${styles.formControl} form-control mt-2`}
                    type="email"
                    placeholder="Insert your username"
                  />
                </div>

                <div className="mb-3 form-group" controlId="formBasicUsername">
                  <div className={`${styles.formLabel} form-label`}>
                    Password
                  </div>

                  <input
                    // value={value}
                    // onChange={handleSearchKey}
                    className={`${styles.formControl} form-control mt-2`}
                    type="password"
                    placeholder="Insert your password"
                  />
                </div>
                <button
                  className={`${styles.button} btn text-white px-4 mt-5 `}
                  type="submit"
                  style={{ backgroundColor: "#3086AC" }}
                >
                  Log In
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
