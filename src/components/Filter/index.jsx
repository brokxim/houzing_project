import React, { useRef } from "react";
import { Dropdown } from "antd";
import { useNavigate, useLocation } from "react-router-dom";
import { Input, Button } from "../Generics";
import { Container, MenuWrapper, Section, Icons } from "./style";
import { uzeReplace } from "../../hooks/useReplace";
import { useSearch } from "../../hooks/useSearch";
const Filter = () => {
  const query = useSearch();
  const navigate = useNavigate();
  const location = useLocation();
  console.log(uzeReplace("address", "tashkent"));
  const onChange = ({ target: { name, value, placeholder } }) => {
    console.log(name, value, placeholder, "query", query);
    navigate(`${location?.pathname}${uzeReplace(name, value)}`);
  };
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
        <MenuWrapper>
          <h1 className="subTitle">Address</h1>
          <Section>
            <Input
              name="country"
              onChange={onChange}
              ref={countryRef}
              placeholder={"Country"}
              defaultValue={query.get("country")}
            />
            <Input
              name="region"
              onChange={onChange}
              ref={regionRef}
              placeholder={"Region"}
              defaultValue={query.get("region")}
            />
            <Input
              name="city"
              onChange={onChange}
              ref={cityRef}
              placeholder={"City"}
              defaultValue={query.get("city")}
            />
            <Input
              name="zip_code"
              onChange={onChange}
              ref={zipRef}
              placeholder={"Zip Code"}
              defaultValue={query.get("zip_code")}
            />
          </Section>

          <h1 className="subTitle">Apartment info</h1>
          <Section>
            <Input ref={roomsRef} placeholder={"Rooms"} />
            <Input ref={sizeRef} placeholder={"Size"} />
            <Input ref={sortRef} placeholder={"Sort"} />
          </Section>

          <h1 className="subTitle">Price</h1>
          <Section>
            <Input placeholder={"Min price"} />
            <Input placeholder={"Max Price"} />
          </Section>
        </MenuWrapper>
      ),
      disabled: true,
    },
  ];
  return (
    <Container>
      <Input
        icon={<Icons.Houses />}
        placeholder={"Enter an adress, neigborhood, city, or ZIP code"}
      />
      <Dropdown
        menu={{ items }}
        placement={"bottomRight"}
        arrow
        trigger={"click"}
      >
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
