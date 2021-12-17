import React from "react";

import {
  PageContainer,
  RowContainer,
  TopRowCards,
  MapCards,
} from "./styled-components";

const BarnPage: React.FC = () => {
  return (
    <PageContainer>
      <h2>Child Information</h2>
      <RowContainer>
        <TopRowCards>
          <h2>Training</h2>
        </TopRowCards>
        <TopRowCards>
          <h2>Price</h2>
        </TopRowCards>
        <TopRowCards>
          <h2>Values And Ethos</h2>
        </TopRowCards>
      </RowContainer>
      <RowContainer>
        <MapCards>
          <h2>Subway Map</h2>
        </MapCards>
        <MapCards>
          <h2>Subway karta</h2>
        </MapCards>
      </RowContainer>
    </PageContainer>
  );
};

export default BarnPage;
