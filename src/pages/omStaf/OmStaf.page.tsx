import React, { useState } from "react";

import {
  PageContainer,
  SubHeaderContainer,
  InformationBoxes,
  OptionLinks,
  Text,
} from "./styled-components";
import { Membership } from "./tabs/Membership";
import { InstructorsTab } from "./tabs/InstructorsTab";
import { instructors } from "../../utils/instructors";

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
          Instruktörer
        </OptionLinks>
      </SubHeaderContainer>

      {isAbout ? (
        <InformationBoxes>
          <Text> Om föreningen</Text>
          <Text> Stockholms Taidoförening grundades av Camilla Brorsson och Mikael Jansson i oktober 1989. Vår första dojo (träningshall) var i Gubbängshallen där vi fortfarande är idag.
          Genom Håkan Karlssons engagemang så bedriver vi också träning i Vällingby. Håkan sensei öppnade Vällingby dojo 2000. 
          Vi är en ideell idrottsförening under Svenska Riksidrottsförbundet och Svenska Budo & Kampsportsförbundet. Föreningen är även ansluten till Svenska Taidoföbundet som är medlem i World Taido Federation.
          <Text>Utveckling
          Sedan föreningen bildades har mer än 1 000 barn, ungdomar och vuxna graderat sig i vår förening. Föreningen har fostrat fram ett 20-tal svartbälten i Taido.
          Vi har även regelbundna placeringar i tävlingar på nationell nivå samt flera utbildade domare.
          Under åren har vi tagit in andra stilar som vi också lär ut, självförsvar i form av ESDS (Explosive Self Defence System) samt nu senast klassisk Karate från Okinawa i form av KishimotoDi som Taido även har rötter i.
          Vi utbildar även i fallteknik baserat på Yos Lotens metoder och våra instruktörer är certifierade av Yos Lotens själv. Yos Lotens har specialiserat sig inom skadeförebyggande fallteknik i mer än 25 år.
          Senaste tillskottet är vårt styrkepass som är en form av HIIT-träning baserat på Taidolandslagets styrketester och gymnastikens styrketräning.</Text>
          <Text>Ambitioner och Visioner
          Vår ambition är att ta tillvara våra medlemmars önskemål och behov i föreningen. Det ska vara roligt att träna hos oss. Vi strävar efter att erbjuda olika nivåer av fysisk och mental träning, tävling, social gemenskap samt kompetenta och välutbildade instruktörer. 
          Utöver den enskilda medlemmen vill vi även verka för Taidons tillväxt och hoppas på att snart kunna öppna upp träning i fler delar av Stockholm.
          Stockholms Taidoförening samarbetar även internationellt med andra Taidoföreningar och har idag många internationella kontakter. Vi har väletablerad kontakt med Taidoföreningar i bl.a. Portugal, Frankrike, Holland, Danmark, Norge, Finland, Tyskland och Japan.
          Ett exempel på vad samarbetet kan innebära är bl.a. vårt utbyte me Tsuruoka Taidoklubb i Yamagata län i norra Japan. Tillsammans med Tsuruoka Taidoklubb så har vi ett utbyte för elever till självkostnadspris. Vi vill lära våra medlemmar att kunna möta människor och lära känna andra kulturer, så att vi kan öka förståelsen för andra kulturer och människor. Stockholms Taidoförening har tillsammans med Tsuruoka Taidoklubb en tro, att med hjälp av sådana här arrangemang kan vi göra det lättare och billigare att resa och på så vis skapa nya internationella kontakter. STaF hoppas att många elever skall använda sig av detta unika tillfälle att bli utbyteselev för att skapa livslånga och varaktiga vänskapsband mellan våra nationer.</Text>
          <Text>Mål
          Taido innebär i sin innersta natur att ständigt utvecklas. Detta mål har även Stockholms Taidoförening. Vi tror även att vi har något att tillföra dig i din personliga utveckling men även att vi utvecklas genom att få ha dig som medlem hos oss.</Text>
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
