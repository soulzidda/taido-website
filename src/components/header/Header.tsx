import React from "react";

import {
  OptionsContainer,
  OptionLink,
  LogoContainer,
  Container,
  MainLogo,
} from "./styled-components";
import Logo from "../../assets/taido-logo.png";
import { useLocation } from "react-router-dom";

export const Header: React.FC = () => {
  const location = useLocation().pathname;

  return (
    <Container>
      <LogoContainer to="/">
        <MainLogo src={Logo} alt={"fireSpot"} />
      </LogoContainer>
      <OptionsContainer
        bottomPadding={
          !(location.includes("/training") || location.includes("/staf"))
        }
      >
        <OptionLink active={location.includes("/training")} to="/training">
          Training
        </OptionLink>
        <OptionLink active={location.includes("/kalender")} to="/kalender">
          Kalender
        </OptionLink>
        <OptionLink active={location.includes("/staf")} to="/staf">
          Om STaF
        </OptionLink>
        <OptionLink active={location.includes("/barn")} to="/barn">
          Barn
        </OptionLink>
        <OptionLink active={location.includes("/kontact")} to="/kontact">
          Kontakt
        </OptionLink>
      </OptionsContainer>
    </Container>
  );
};
