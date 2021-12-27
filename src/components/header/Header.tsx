import React from "react";

import {
  OptionsContainer,
  OptionLink,
  LogoContainer,
  Container,
} from "./styled-components";
import { ReactComponent as Logo } from "../../assets/taido-logo.svg";
import { useLocation } from "react-router-dom";

export const Header: React.FC = () => {
  const location = useLocation().pathname;

  return (
    <Container>
      <LogoContainer to="/">
        <Logo className="logo" />
      </LogoContainer>
      <OptionsContainer
        bottomPadding={
          !(location.includes("/training") || location.includes("/staf"))
        }
      >
        <OptionLink to="/training">Training</OptionLink>
        <OptionLink to="/kalender">Kalender</OptionLink>
        <OptionLink to="/staf">Om STaF</OptionLink>
        <OptionLink to="/barn">Barn</OptionLink>
        <OptionLink to="/kontact">Kontakt</OptionLink>
      </OptionsContainer>
    </Container>
  );
};
