import React, { useState } from "react";
import Calendar from "react-calendar";

import {
  PageContainer,
  ContentRow,
  InformationContainer,
  SecondaryInfoContainer,
  TertiaryInfoContainer,
  ColumnContainer,
  ColumnContainerSpacing,
  List,
  Text,
  Header,
} from "./styled-components";
import NewsBox from "../../components/newsBox/NewsBox";

const SplashPage: React.FC = () => {
  const [value, onChange] = useState(new Date());
  const listText = [
    "Träna för att det är kul",
    "Komma i form",
    "Utmana dig själv",
    "Pröva på att tävla",
    "Elitsatsa",
  ];

  return (
    <PageContainer>
      <ContentRow>
        <InformationContainer>
          <Header>Add back to top button at bottom right !</Header>
          <Header>Välkommen till Stockholms Taidoförening!</Header>
          <Text>
            Vi erbjuder allsidig fysisk och mental träning för både barn och
            vuxna. Hos oss kan du träna Taido, en japansk akrobatisk kampsport.
            Eller Kishimoto, en traditionell karatestil från Okinawa. Vi har
            även Styrkepasset för dig som söker en svettig, utmanande men rolig
            träningsform. Du kan även boka självförsvarskurser med ESDS och
            fallpreventionskurser med Falla rätt.
          </Text>
          <Text>
            Vi möter dig utifrån dina förutsättningar för din personliga
            utveckling.
          </Text>
          <br />
          <Text>
            Hos oss tränar du utifrån dina ambitioner. Vi passar dig som vill:
          </Text>
          <ul>
            {listText.map((l) => (
              <List>{l}</List>
            ))}
          </ul>
          <Text>
            Kom och testa 3 gånger gratis! Vi finns i Gubbängen, Vällingby och
            Nacka!
          </Text>
          <Text>
            Mer info hittar du här (länka till träningstider/kontakuppgifter)
          </Text>
        </InformationContainer>
        <SecondaryInfoContainer>
          <Header>Kontakt</Header>
          <Text>Gubbängen</Text>
          <Text>Taido vuxna: Mikael Jansson 070 424 79 13</Text>
          <Text>Taido barn: Eddie Herlin 073 490 43 15</Text>
          <Text>Kishimoto: Mikael Jansson 070 424 79 13</Text>
          <Text>
            Styrkepasset: Hannah Kanjah 070 787 97 46, Kim van Wijk 070 722 52
            67
          </Text>
          <br />
          <Text>Vällingby</Text>
          <Text>Taido: Håkan Karlsson 070 277 26 39</Text>
          <br />
          <Text>Nacka</Text>
          <Text>Shurite: Eddie Herlin 073 490 43 15</Text>
        </SecondaryInfoContainer>
      </ContentRow>
      <ContentRow>
        <NewsBox />
        <ColumnContainer>
          <ColumnContainerSpacing>
            <TertiaryInfoContainer>
              <Header>Links to social media</Header>
            </TertiaryInfoContainer>
          </ColumnContainerSpacing>
          <ColumnContainerSpacing>
            <TertiaryInfoContainer>
              <Calendar
                onChange={onChange}
                value={value}
                calendarType="ISO 8601"
              />
            </TertiaryInfoContainer>
          </ColumnContainerSpacing>
        </ColumnContainer>
      </ContentRow>
    </PageContainer>
  );
};

export default SplashPage;
