import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Card, Col, Row, Input } from "antd";
import millify from "millify";
import Loader from "../components/Loader";

import { useGetCryptosQuery } from "../services/cryptoApi";

const Cryptocurrencise = ({ simplified }) => {
  const count = simplified ? 10 : 50;
  const { data: cryptosList, isFetching } = useGetCryptosQuery(count);
  const [cryptos, setCryptos] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const filterCryptos = cryptosList?.data?.coins.filter((coin) =>
      coin.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setCryptos(filterCryptos);
  }, [cryptosList, searchTerm]);

  if (isFetching) return <Loader />;
  return (
    <>
      {!simplified && (
        <div className="search-crypto">
          <Input placeholder="Search Crypto ..." onChange={(e) => setSearchTerm(e.target.value)} />
        </div>
      )}
      <Row gutter={[20, 20]} className="crypto-card-container">
        {cryptos &&
          cryptos.map((item) => (
            <Col className="crypto-card" key={item?.uuid}>
              <Link to={`/cryptodetail/${item?.uuid}`}>
                <Card
                  title={`${item?.rank}. ${item?.name.slice(0, 13)}...`}
                  extra={<img src={item?.iconUrl} alt={item?.name} className="crypto-image" />}
                  className="px-3 pt-2 pb-5"
                  hoverable
                >
                  <p>Price: {millify(item?.price)}</p>
                  <p>Market Cap: {millify(item?.marketCap)}</p>
                  <p>Daily Change: {millify(item?.change)}</p>
                </Card>
              </Link>
            </Col>
          ))}
      </Row>
    </>
  );
};

export default Cryptocurrencise;
