import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { navbar } from "../../utils/navbar";
import { Button } from "../Generics/Button";
import { Container, Main, Wrapper, Section, Logo, Link } from "./style";

const Home = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <Main>
        <Wrapper>
          <Section
            onClick={() => navigate("/home")}
            style={{ cursor: "pointer" }}
          >
            <Logo />
            <h3>Houzing</h3>
          </Section>
          <Section>
            {navbar.map(({ title, path, hidden }, index) => {
              return (
                !hidden && (
                  <Link
                    key={index}
                    to={path}
                    className={({ isActive }) => isActive && "active"}
                  >
                    {title}
                  </Link>
                )
              );
            })}
          </Section>
          <Section>
            <Button type="dark" onClick={() => navigate("/signin")}>
              Sign in
            </Button>
          </Section>
        </Wrapper>
      </Main>
      <Outlet />
    </Container>
  );
};
export default Home;
