import React from "react";

import { PageContainer, EmailFormContainer, Text } from "./styled-components";

const KontactPage: React.FC = () => {
  return (
    <PageContainer>
      <Text>I am the contact page</Text>
      <EmailFormContainer>
        <h2>create email form here with emailJS </h2>
      </EmailFormContainer>
      <EmailFormContainer>
        <h2>Important contacts</h2>
      </EmailFormContainer>
    </PageContainer>
  );
};

export default KontactPage;
