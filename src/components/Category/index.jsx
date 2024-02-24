import React, { useRef } from "react";
import Slider from "react-slick";
import { Container, Wrapper } from "./style";
import CategoryCard from "../CategoryCard";
import { useNavigate } from "react-router-dom";
const Category = () => {
  const navigate = useNavigate();
  const { REACT_APP_BASE_URL: url } = process.env;
  const [data, setData] = React.useState([]);
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
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500,
    dots: true,
    // autoplay: true,
    // speed: 2000,
    // autoplaySpeed: 2000,
    // cssEase: "linear",
  };
  return (
    <Container className="slider-container">
      <Wrapper>
        <Slider {...settings}>
          {data &&
            data.map((value) => (
              <CategoryCard
                key={value.id}
                onClick={() => navigate(`/properties?category_id=${value?.id}`)}
                data={value}
              />
            ))}
        </Slider>
      </Wrapper>
    </Container>
  );
};

export default Category;
