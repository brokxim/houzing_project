import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Container, Wrapper, Wrap } from "./style";
import HouseCard from "../HouseCard";

const { REACT_APP_BASE_URL: url } = process.env;

const Properties = () => {
  const { search } = useLocation();

  const [data, setData] = useState([]);
  const around = data.length !== 1 && !(data.length % 3 == 0);
  console.log(around, "ar");
  useEffect(() => {
    fetch(`${url}houses/list${search}`)
      .then((res) => res.json())
      .then((res) => setData(res?.data || []));
  }, [search]);
  return (
    <Container>
      <Wrapper $around={around}>
        {data &&
          data?.map((value) => {
            return (
              <Wrap key={value.id} $around={around}>
                <HouseCard data={value} />
              </Wrap>
            );
          })}
      </Wrapper>
    </Container>
  );
};

export default Properties;
