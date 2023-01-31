import React from "react";
import { Link } from "react-router-dom";
import { HomeOutlined, FundOutlined, MoneyCollectOutlined, BulbOutlined } from "@ant-design/icons";
import { Menu } from "antd";
import logo from "../images/logo.png";

const { Item } = Menu;

const Navbar = () => {
  return (
    <div className="nav-container">
      <div className="logo-container mb-4">
        <Link to="/">
          <img src={logo} className="logo-img" alt="logo" />
        </Link>
      </div>
      <Menu theme="dark">
        <Item icon={<HomeOutlined />}>
          <Link to="/">Home</Link>
        </Item>
        <Item icon={<FundOutlined />}>
          <Link to="/cryptocurrencise">Cryptocurrencise</Link>
        </Item>
        <Item icon={<MoneyCollectOutlined />}>
          <Link to="/exchanges">Exchanges</Link>
        </Item>
        <Item icon={<BulbOutlined />}>
          <Link to="/news">News</Link>
        </Item>
      </Menu>
    </div>
  );
};

export default Navbar;
