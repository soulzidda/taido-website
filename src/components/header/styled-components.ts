import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const LogoContainer = styled(Link)`
  height: 100%;
  padding-top: 50px;
  width: auto;
`;

const OptionsContainer = styled("div")<{ bottomPadding: boolean }>`
  height: 70px;
  width: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: ${(p) => (p.bottomPadding ? 25 : 0)}px;
`;

const OptionLink = styled(Link)<{ active: boolean }>`
  padding: 10px 15px;
  cursor: pointer;
  color: White;
  text-align: center;
  text-decoration: none;
  margin: 1rem;
  position: relative;
  font-weight: ${(props) => (props.active ? 700 : null)}; ;
`;

const MainLogo = styled.img`
  height: 250px;
`;

export { Container, LogoContainer, OptionsContainer, OptionLink, MainLogo };
