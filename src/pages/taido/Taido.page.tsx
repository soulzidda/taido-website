import React from "react";

import { PageContainer, SubHeaderContainer, Text } from "./styled-components";

const TaidoPage: React.FC = () => {
  return (
    <PageContainer>
      <SubHeaderContainer>
        <h2>Information</h2>
        <h2>Culture</h2>
        <h2>History</h2>
      </SubHeaderContainer>
    </PageContainer>
  );
};

export default TaidoPage;
