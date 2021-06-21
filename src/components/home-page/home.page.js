import React from "react";
import "./home.page.css";
import { Header } from "../header/header.component.js";
import { Link } from "react-router-dom";

export const HomePage = function ({ toChangepage }) {
  return (
    <>
      <Header />
      <main>
        <section className="jumbotron text-center container-fluid">
          <div className=" welcome">
            <h3>歡迎光臨我的頁面</h3>
          </div>
          <Link to="/list">
            <button
              type="button"
              className="btn btn-warning btn-lg start-btn"
              onClick={toChangepage}
            >
              點此開始
            </button>
          </Link>
        </section>
      </main>
    </>
  );
};
