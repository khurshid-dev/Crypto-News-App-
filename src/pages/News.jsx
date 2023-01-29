import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import moment from "moment";
import { Card, Col, Row, Input, Select } from "antd";
import Typography from "antd/es/typography/Typography";
import { demoImage } from "../assets";

import { demoLogo } from "../assets";

import millify from "millify";
import Loader from "../components/Loader";

import { useGetCryptoNewsQuery } from "../services/cryptoNewsApi";
import { useGetCryptosQuery } from "../services/cryptoApi";

const News = ({ simplified }) => {
  const [newsCategory, setNewsCategory] = useState("Cryptocurrency");

  const { data: cryptoNews } = useGetCryptoNewsQuery({ newsCategory, count: simplified ? 6 : 14 });
  const { data } = useGetCryptosQuery(50);
  console.log(cryptoNews?.value);

  const { Title } = Typography;
  return (
    <Row gutter={[24, 24]}>
      {!simplified && (
        <Col span={24}>
          <Select
            showSearch
            className="select-news"
            placeholder="Select a crypto"
            optionFilterProp="children"
            onChange={(value) => setNewsCategory(value)}
            filterOption={(input, option) => option.childrent.toLowerCase().indexOf(input.toLowerCase())}
          >
            <Option value="Cryptocurrency">Cryptocurrency</Option>
            {data?.data?.coins.map((coin) => (
              <Option value={coin.name}>{coin.name}</Option>
            ))}
          </Select>
        </Col>
      )}

      {cryptoNews?.value?.map((news, i) => (
        <Col className="!w-[360px]" key={i}>
          <Card hoverable className="news-card">
            <a href={news?.url} target="_blank" rel="noreferrer">
              <div className="news-image-container flex overflow-hidden pt-4 px-5">
                <img
                  src={news?.image?.thumbnail?.contentUrl || demoImage}
                  className="w-[120px] h-[100px] mr-[15px] scale-105 rounded-[16px]"
                  alt="news"
                />
                <Title className="news-title text-[18px] !leading-[22px] !mt-1">{news.name.slice(0, 50)} ...</Title>
              </div>
              <div className="px-5 pt-3 pb-4">
                <p>{news?.description.substring(0, 120)} ...</p>
                <a href={news?.url} target="_blank" rel="noreferrer">
                  <div className="provider-container flex mb-2 mt-3">
                    <div className="flex items-center">
                      <img
                        src={news?.provider[0]?.image?.thumbnail?.contentUrl || demoLogo}
                        className="w-[35px] rounded-full mr-2"
                        alt="provider-icon"
                      />
                      <div>
                        <Title className="!text-[20px] !mb-0 leading-[20px]">{news?.provider[0]?.name}</Title>
                        <p className="text-lightgray text-sm">{moment(news.datePublished).startOf("ss").fromNow()}</p>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </a>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default News;
