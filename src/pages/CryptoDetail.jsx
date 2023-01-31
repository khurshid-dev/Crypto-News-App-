import React, { useState } from "react";
import HTMLReactParser from "html-react-parser";
import { useParams } from "react-router-dom";
import millify from "millify";
import { time } from "../assets";
import { Col, Row, Typography, Select } from "antd";

const { Title, Text } = Typography;
const { Option } = Select;

import { useGetCryptoDetailsQuery } from "../services/cryptoApi";

const CryptoDetail = () => {
  const [timePeriod, setTimePeriod] = useState("7d");

  const { coinId } = useParams();
  const { data, isFetching } = useGetCryptoDetailsQuery(coinId);
  const cryptoDetails = data?.data?.coin;
  console.log(cryptoDetails);

  return (
    <Col className="coin-detail-container">
      <Col className="coin-heading-container">
        <Title level={2} className="coin-name">
          {cryptoDetails?.name} Price
        </Title>
        <p>{cryptoDetails?.name} live proce in US dollars. View value statistics, market cap and supply.</p>
      </Col>
      <Select
        defaultValue="7d"
        className="select-timeperiod mt-5"
        placeholder="Select Time Period"
        onChange={(value) => setTimePeriod(value)}
      >
        {time.map((date) => (
          <Option key={date}>{date}</Option>
        ))}
      </Select>

      {/* line chart */}
      <Col></Col>
    </Col>
  );
};

export default CryptoDetail;
