import React from "react";

import {
  PageContainer,
  ContentRow,
  InformationContainer,
  NewsContainer,
  SecondaryInfoContainer,
  TertiaryInfoContainer,
  ColumnContainer,
  List,
  Text,
  Header,
} from "./styled-components";

const SplashPage: React.FC = () => {
  return (
    <PageContainer>
      <ContentRow>
        <InformationContainer>
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
            <List color="white">Träna för att det är kul</List>
            <List>Komma i form</List>
            <List>Utmana dig själv</List>
            <List>Pröva på att tävla</List>
            <List>Elitsatsa</List>
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
        <NewsContainer>
          <Header>News container</Header>
        </NewsContainer>
        <ColumnContainer>
          <div>
            <TertiaryInfoContainer>
              <Header>Links to social media</Header>
            </TertiaryInfoContainer>
          </div>
          <div>
            <TertiaryInfoContainer>
              <Header>calender?</Header>
            </TertiaryInfoContainer>
          </div>
        </ColumnContainer>
      </ContentRow>
    </PageContainer>
  );
};

export default SplashPage;
