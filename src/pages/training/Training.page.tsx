import React, { useState } from "react";

import {
  PageContainer,
  SubHeaderContainer,
  RowContainer,
  InformationBoxes,
  Text,
} from "./styled-components";

const TrainingPage: React.FC = () => {
  const [isTaido, setIsTaido] = useState(true);
  const [isStyrkepasset, setIsStyrkepasset] = useState(false);

  const setTaidoTab = () => {
    setIsTaido(true);
    setIsStyrkepasset(false);
  };

  const setStyrkepassetTab = () => {
    setIsTaido(false);
    setIsStyrkepasset(true);
  };

  const setKishimotoTab = () => {
    setIsTaido(false);
    setIsStyrkepasset(false);
  };

  return (
    <PageContainer>
      <SubHeaderContainer>
        <h2 onClick={setTaidoTab}>Taido</h2>
        <h2 onClick={setStyrkepassetTab}>Styrkepasset</h2>
        <h2 onClick={setKishimotoTab}>Kishimoto</h2>
      </SubHeaderContainer>

      {isTaido ? (
        <RowContainer>
          <InformationBoxes>
            <Text>specific Training Information for each site (taido) </Text>
          </InformationBoxes>
          <InformationBoxes>
            <Text>Training contact info for important people at each site</Text>
          </InformationBoxes>
        </RowContainer>
      ) : isStyrkepasset ? (
        <RowContainer>
          <Text> Styrkepasset Tab </Text>
        </RowContainer>
      ) : (
        <RowContainer>
          <InformationBoxes>
            <Text>specific Training Information for each site (kishimoto)</Text>
          </InformationBoxes>
          <InformationBoxes>
            <Text>Training contact info for important people at each site</Text>
          </InformationBoxes>
        </RowContainer>
      )}
    </PageContainer>
  );
};

export default TrainingPage;
