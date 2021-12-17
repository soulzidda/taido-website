import React from "react";

import {
  OptionsContainer,
  OptionLink,
  LogoContainer,
  Container,
} from "./styled-components";
import { ReactComponent as Logo } from "../../assets/taido-logo.svg";

export const Header: React.FC = () => {
  return (
    <Container>
      <LogoContainer to="/">
        <Logo className="logo" />
      </LogoContainer>
      <OptionsContainer>
        <OptionLink to="/taido">Taido</OptionLink>
        <OptionLink to="/kalender">Kalender</OptionLink>
        <OptionLink to="/staf">Om STaF</OptionLink>
        <OptionLink to="/barn">Barn</OptionLink>
        <OptionLink to="/kontact">Kontakt</OptionLink>
      </OptionsContainer>
    </Container>
  );
};
