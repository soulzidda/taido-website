import React, { useState } from "react";

import {
  InformationBoxes,
  OptionLinks,
  PageContainer,
  SubHeaderContainer,
  Text,
} from "./styled-components";
import { Membership } from "./tabs/Membership";
import { InstructorsTab } from "./tabs/InstructorsTab";

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
          <Text>about the association</Text>
        </InformationBoxes>
      ) : isMembers ? (
        <InformationBoxes>
          <Membership />
        </InformationBoxes>
      ) : (
        <InformationBoxes>
          <InstructorsTab />
        </InformationBoxes>
      )}
    </PageContainer>
  );
};

export default OmStafPage;
