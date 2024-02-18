import React, { useRef } from "react";
import { Dropdown } from "antd";

import { Input, Button } from "../Generics";
import { Container, MenuWrapper, Section, Icons } from "./style";

const Filter = () => {
  const countryRef = useRef();
  const regionRef = useRef();
  const cityRef = useRef();
  const zipRef = useRef();

  const roomsRef = useRef();
  const sizeRef = useRef();
  const sortRef = useRef();

  const items = [
    {
      key: "1",
      label: (
        <MenuWrapper x={"true"}>
          <h1 className="subTitle">Address</h1>
          <Section>
            <Input ref={countryRef} placeholder={"Country"} />
            <Input ref={regionRef} placeholder={"Region"} />
            <Input ref={cityRef} placeholder={"City"} />
            <Input ref={zipRef} placeholder={"Zip Code"} />
          </Section>
        </MenuWrapper>
      ),
    },
    {
      key: "2",
      label: (
        <MenuWrapper y={"true"}>
          <h1 className="subTitle">Apartment info</h1>
          <Section>
            <Input ref={roomsRef} placeholder={"Rooms"} />
            <Input ref={sizeRef} placeholder={"Size"} />
            <Input ref={sortRef} placeholder={"Sort"} />
          </Section>
        </MenuWrapper>
      ),
    },
    {
      key: "3",
      label: (
        <MenuWrapper z={"true"}>
          <h1 className="subTitle">Price</h1>
          <Section>
            <Input placeholder={"Min price"} />
            <Input placeholder={"Max Price"} />
          </Section>
        </MenuWrapper>
      ),
    },
  ];
  return (
    <Container>
      <Input
        icon={<Icons.Houses />}
        placeholder={"Enter an adress, neigborhood, city, or ZIP code"}
      />
      <Dropdown menu={{ items }} placement={"bottomRight"} arrow>
        <div>
          <Button type={"light"}>
            <Icons.Filter />
            Advanced
          </Button>
        </div>
      </Dropdown>
      <Button>
        <Icons.Search />
        Search
      </Button>
    </Container>
  );
};

export default Filter;
