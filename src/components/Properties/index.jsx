import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Container } from "./style";
import HouseCard from "../HouseCard";

const { REACT_APP_BASE_URL: url } = process.env;

const Properties = () => {
  const { search } = useLocation();

  const [data, setData] = useState([]);
  console.log("data", data);
  useEffect(() => {
    fetch(`${url}houses/list`)
      .then((res) => res.json())
      .then((res) => setData(res?.data | []));
  }, [search]);
  return (
    <Container>
      {data &&
        data?.map((value) => {
          return <HouseCard data={value} />;
        })}
    </Container>
  );
};

export default Properties;
