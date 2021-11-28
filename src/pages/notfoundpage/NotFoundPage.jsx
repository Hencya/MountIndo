import React from "react";
import { Link } from "react-router-dom";
// components
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
//css
import "./NotFoundPage.css";

export default function NotFoundPage() {
  return (
    <section className="NotFoundPage">
      <Navbar />
      <div id="notfound">
        <div class="notfound-bg"></div>
        <div class="notfound">
          <div class="notfound-404">
            <h1>404</h1>
          </div>
          <h2>Oops! Page Not Found</h2>
          <Link to={`/`}>
            <button
              className={` btn text-white px-4 mt-2 `}
              style={{ backgroundColor: "#3086AC" }}
            >
              Back To Homepage
            </button>
          </Link>
        </div>
      </div>
      <Footer />
    </section>
  );
}
