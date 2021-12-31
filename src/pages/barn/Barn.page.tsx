import React from "react";

import {
  PageContainer,
  RowContainer,
  TopRowCards,
  Heading,
  SubHeading,
  MapCards,
  MapImage,
  Text,
  HyperlinkInfoText,
  HyperLink,
} from "./styled-components";
import GubbangenTubeMap from "../../assets/gubbangen_tube_map.png";

const BarnPage: React.FC = () => {
  return (
    <PageContainer>
      <Heading>Barninformation</Heading>
      <RowContainer>
        <TopRowCards>
          <SubHeading>Training</SubHeading>
          <Text>
            Våra träningspass är utformade att på ett pedagogiskt sätt främja
            barnens sociala, mentala och fysiska utveckling. Vi har stort fokus
            på att alla ska få prestera utifrån sin individuella förmåga och att
            alla kan. Vi jobbar även mycket med kamratskap, vi tar hand om
            varandra så att ingen känner sig utanför.
          </Text>
          <Text>
            Varje pass hålls av en instruktör med kunskap och erfarenhet av
            Taido och träning för barn. Vi strävar efter att så långt som
            möjligt även ha en instruktörsassistent på varje pass.
          </Text>
          <Text>
            Ett vanligt träningspass börjar alltid med en inhälsning som även
            innehåller en kort meditation. Detta hjälper instruktören att samla
            gruppen och skifta fokus till träningen. Sedan värmer vi upp innan
            träningen börjar. Vattenpauser sker med jämna mellanrum för att
            barnen ska orka. I slutet av passet varvar vi ner och avslutar med
            en uthälsning. Träningen utförs på ett lekfullt och barnvänligt sätt
            och målet är att barnen ska lämna träningen trötta men glada.
          </Text>
        </TopRowCards>
        <TopRowCards>
          <SubHeading>Price</SubHeading>
          <Text>Pris Medlemsavgift 400kr/år Terminsavgift 700kr/termin</Text>
        </TopRowCards>
        <TopRowCards>
          <SubHeading>Values And Ethos</SubHeading>
          <Text>
            Taido är en japansk akrobatisk kampsport som passar barn bra då den
            främjar rörelseglädje, koordination, balans, styrka och kondition.
            Utöver det tränar barnen även på fokus, kamratskap, ansvar,
            disciplin och kontroll.
          </Text>
          <Text>
            Kampsport är ett utmärkt sätt att träna upp rörelseförståelse* samt
            har fördelen av att vara en kontrollerad form av bråklek** vilket
            visat sig ha mycket god påverkan på barns sociala utveckling.
          </Text>
          <Text>
            Taido är en semikontakt vilket innebär att vi inte slår/sparkar mot
            huvudet och inte får ta i allt vad vi har.
          </Text>
          <HyperlinkInfoText>
            *läs mer om rörelseförståelse här
          </HyperlinkInfoText>
          <br />
          <HyperLink href="https://www.rf.se/RFarbetarmed/Strategi2025/introduktiontillrorelseforstaelse">
            Visit Introduktion till rörelseförståelse
          </HyperLink>
          <br />
          <br />
          <HyperlinkInfoText>*länk till artikel om bråklek</HyperlinkInfoText>
          <br />
          <HyperLink href="https://www.frontiersin.org/articles/10.3389/fpsyg.2021.731000/full">
            Las artikel
          </HyperLink>
        </TopRowCards>
      </RowContainer>
      <RowContainer>
        <MapCards>
          <SubHeading>Subway Map</SubHeading>
          <MapImage src={GubbangenTubeMap} alt={"fireSpot"} />
        </MapCards>
        <MapCards>
          <SubHeading>Subway karta</SubHeading>
        </MapCards>
      </RowContainer>
    </PageContainer>
  );
};

export default BarnPage;
