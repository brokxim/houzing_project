import styled from "styled-components";
import { ReactComponent as houses } from "../../assets/icons/houses.svg";
import { ReactComponent as filter } from "../../assets/icons/setting.svg";
import { ReactComponent as search } from "../../assets/icons/search.svg";

const Container = styled.div`
  display: flex;
  padding: var(--padding);
  padding-top: 10px;
  padding-bottom: 10px;
  gap: 20px;
`;
const Icons = styled.div``;
Icons.Houses = styled(houses)`
  margin-right: 8px;
`;
Icons.Filter = styled(filter)`
  margin-right: 8px;
`;
Icons.Search = styled(search)`
  margin-right: 8px;
`;
const MenuWrapper = styled.div`
  padding: ${({ x }) => x && "30px 30px 0 30px"};
  padding: ${({ y }) => y && "0 30px 0 30px"};
  padding: ${({ z }) => z && "0 30px 30px 30px"};

  background: white;
`;

const Section = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 20px;
`;

export { Container, MenuWrapper, Section, Icons };
