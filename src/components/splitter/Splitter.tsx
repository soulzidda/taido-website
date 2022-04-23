import styled from "styled-components";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import { belts } from "../../assets";

export const Splitter: React.FC = () => {
  const location = useLocation().pathname;
  const [beltColour, setBeltColour] = useState({ colour: "", image: "" });

  useEffect(() => {
    const randomRoll = Math.floor(Math.random() * 4) + 1;

    if (randomRoll === 1) {
      setBeltColour({ colour: "#6B005E", image: belts.purple });
    } else if (randomRoll === 2) {
      setBeltColour({ colour: "#006B0D", image: belts.green });
    } else if (randomRoll === 3) {
      setBeltColour({ colour: "#6B4300", image: belts.brown });
    } else {
      setBeltColour({ colour: "#151515", image: belts.black });
    }
  }, []);

  if (location.includes("/barn")) {
    return (
      <>
        <BrownBelt />
        <GreenBelt />
        <BlueBelt />
      </>
    );
  } else {
    return <Container style={{ backgroundColor: beltColour.colour }} />;
  }
};

const Container = styled.div`
  height: 20px;
  width: 100%;
`;

const BrownBelt = styled.div`
  height: 6.66px;
  width: 100%;
  background-color: #6b4300;
`;

const BlueBelt = styled.div`
  height: 6.66px;
  width: 100%;
  background-color: blue;
`;

const GreenBelt = styled.div`
  height: 6.66px;
  width: 100%;
  background-color: #006b0d;
`;
