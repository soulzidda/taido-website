import React, { useState } from "react";

import {
  PageContainer,
  SubHeaderContainer,
  InformationBoxes,
  OptionLinks,
  Text,
} from "./styled-components";
import { Membership } from "./tabs/Membership";

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
        <OptionLinks active={isAbout} onClick={setAboutTab}>
          Om STaF
        </OptionLinks>
        <OptionLinks active={isMembers} onClick={setMembersTab}>
          Medlemskap och avgifter
        </OptionLinks>
        <OptionLinks
          active={!isMembers && !isAbout}
          onClick={setInstructorsTab}
        >
          Instructers
        </OptionLinks>
      </SubHeaderContainer>

      {isAbout ? (
        <InformationBoxes>
          <Text> about the assosciation</Text>
        </InformationBoxes>
      ) : isMembers ? (
        <InformationBoxes>
          <Membership />
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
