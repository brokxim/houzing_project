import React, { useRef } from "react";
import { Dropdown, Select, Option } from "antd";
import { useNavigate, useLocation } from "react-router-dom";
import { Input, Button } from "../Generics";
import { Container, MenuWrapper, Section, Icons } from "./style";
import { uzeReplace } from "../../hooks/useReplace";
import { useSearch } from "../../hooks/useSearch";
const Filter = () => {
  const { REACT_APP_BASE_URL: url } = process.env;
  const [data, setData] = React.useState([]);
  const query = useSearch();
  const [select, setSelect] = React.useState("Select Category");
  const navigate = useNavigate();
  const location = useLocation();
  const onChange = ({ target: { name, value, placeholder } }) => {
    navigate(`/properties${uzeReplace(name, value)}`);
  };
  const onChangeSort = (value) => {
    navigate(`/properties${uzeReplace("sort", value)}`);
  };
  const countryRef = useRef();
  const regionRef = useRef();
  const cityRef = useRef();
  const zipRef = useRef();

  const roomsRef = useRef();
  const sizeRef = useRef();
  const handleChange = (value) => {
    navigate(`properties/${uzeReplace("category_id", value)}`);
  };
  React.useEffect(() => {
    fetch(`${url}categories/list`, {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJSUzI1NiJ9.eyJpc3MiOiJzZWxmIiwic3ViIjoiYWhhdGt1bG92OThAZ21haWwuY29tIiwiZXhwIjoxNzI2NjY0ODI5LCJpYXQiOjE3MDg2NjQ4MjksInNjb3BlIjoiUk9MRV9VU0VSIn0.nx-PJOHaXdEJseej8-wS-X_IIqPUuqDAK5YlzbMeK2X__oM4x-i5ywXGJoxa4lrK4GSZtAwSRfyobFTGN9D7p3ZHbQOb2ZTh3mTRCK0uBmgDXt2yZKWLLg_bsbnAKM3Q1TvNoZ5AkziErh9q2J8kaNIbtMYANKI-CbHt2pNW7hU3g4LcDJvkfF_hr1IUX_SzZLRpDWzYweZeupWm480jLTBO_GQynPGKza_9mb9aKXJIC7PyHa98AUa7Ksu687HVsjeI1K2LgGFyWp_QF9zrQiwbaIjTKgRbL9Ng3h9FAg6B6wkFsnai_3xKAXs5Vu0_X8rg24DfGJecABVRq6EhEw",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        setData(res?.data || []);
      });
  }, []);

  React.useEffect(() => {
    let [selectedName] = data?.filter(
      (f) => f.id === Number(query.get("category_id"))
    );
    selectedName?.name && setSelect(selectedName?.name);
  }, [location?.search, data]);
  const option = data.map((val) => {
    return { value: val.id, label: val.name };
  });
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
            <Input
              name="room"
              onChange={onChange}
              ref={roomsRef}
              placeholder={"Rooms"}
            />
            <Select
              defaultValue={query.get("sort") || "Select Sort"}
              onChange={onChangeSort}
              options={[
                { value: "", label: "Select Sort" },
                { value: "asc", label: "o'suvchi" },
                { value: "desc", label: "kamayuvchi" },
              ]}
            />
            <Select
              value={select}
              onChange={handleChange}
              options={[{ value: "", label: "Select Category" }, ...option]}
            >
              <option value="">Select Category</option>
            </Select>
          </Section>
          <h1 className="subTitle">Price</h1>
          <Section>
            <Input
              name="min_price"
              onChange={onChange}
              placeholder={"Min price"}
            />
            <Input
              name="max_price"
              onChange={onChange}
              placeholder={"Max Price"}
            />
          </Section>
        </MenuWrapper>
      ),
      disabled: true,
      // open: { isOpen },
      // onOpenChange: isOpen,
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
