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
  width: auto;
`;

const OptionsContainer = styled("div")<{ bottomPadding: boolean }>`
  height: 70px;
  min-width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: ${(p) => (p.bottomPadding ? 25 : 0)}px;
  border: 1px solid black;
`;

const OptionLink = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;
`;

export { Container, LogoContainer, OptionsContainer, OptionLink };
