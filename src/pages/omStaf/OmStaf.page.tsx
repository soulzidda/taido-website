import React, { useState } from "react";

import {
  PageContainer,
  SubHeaderContainer,
  InformationBoxes,
  Text,
} from "./styled-components";

const OmStafPage: React.FC = () => {
  const [isAbout, setIsAbout] = useState(true);
  const [isMembers, setIsMembers] = useState(false);

  const setAboutTab = () => {
    setIsAbout(true);
    setIsMembers(false);
  };

  const setMembersTab = () => {
    setIsAbout(false);
    setIsMembers(true);
  };

  const setInstructorsTab = () => {
    setIsAbout(false);
    setIsMembers(false);
  };

  return (
    <PageContainer>
      <SubHeaderContainer>
        <h2 onClick={setAboutTab}>Om STaF</h2>
        <h2 onClick={setMembersTab}>Medlemskap och avgifter</h2>
        <h2 onClick={setInstructorsTab}>Instructers</h2>
      </SubHeaderContainer>

      {isAbout ? (
        <InformationBoxes>
          <Text> about the assosciation</Text>
        </InformationBoxes>
      ) : isMembers ? (
        <InformationBoxes>
          <Text>menbers cost and shit</Text>
        </InformationBoxes>
      ) : (
        <InformationBoxes>
          <Text>instructors page</Text>
          <br />
          <p>
            portrait of each instructor, on hover show a magnifying glass and on
            click show a modal of bigger portrait with their info at the side
          </p>
        </InformationBoxes>
      )}
    </PageContainer>
  );
};

export default OmStafPage;
