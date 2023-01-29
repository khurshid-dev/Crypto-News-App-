import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import { Homepage, Exchanges, Cryptocurrencise, CryptoDetail, News } from "./pages";
import { Navbar } from "./components";

import { Typography, Layout } from "antd";
import { GithubOutlined } from "@ant-design/icons";

import logo from "./images/favicon.png";

const App = () => {
  return (
    <div className="app">
      <div className="navbar">
        <Navbar />
      </div>

      <div className="main">
        <Layout>
          <div className="routes mb-[200px]">
            <Routes>
              <Route exact path="/" element={<Homepage />} />
              <Route exact path="/exchanges" element={<Exchanges />} />
              <Route exact path="/cryptocurrencise" element={<Cryptocurrencise />} />
              <Route exact path="/cryptodetail/:coinId" element={<CryptoDetail />} />
              <Route exact path="/news" element={<News />} />
            </Routes>
          </div>
        </Layout>

        <div className="footer">
          <Link to="/">
            <img src={logo} className="footer-logo" alt="logo" />
          </Link>
          <Typography.Title
            level={5}
            style={{ color: "white", textAlign: "center", fontWeight: "normal", marginBottom: "0" }}
          >
            Created by Khurshid-dev <br />
          </Typography.Title>
          <Typography.Title
            level={5}
            style={{ color: "white", textAlign: "center", fontWeight: "normal", marginTop: "0", cursor: "pointer" }}
          >
            <a href="https://github.com/khurshid-dev" target="_blank">
              You Can See More Apps On My Github <GithubOutlined />
            </a>
          </Typography.Title>
        </div>
      </div>
    </div>
  );
};

export default App;
