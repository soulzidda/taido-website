import {
  Container,
  SubHeading,
  ParagraphText,
  ModalSubContainers,
  TextContainer,
  ModalContainer,
  Heading,
  List,
  ModalSubHeading,
  Image,
} from "./styled-components";
import { InstructorCards, InstructorModal } from "../../../components";
import { InstructorData, instructors } from "../../../utils/instructors";
import React, { useState } from "react";

export const InstructorsTab = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [instructorDataModal, setInstructorDataModal] =
    useState<InstructorData>();

  const listText = [
    "Bra social förmåga, att kommunicera, leda och entusiasmera",
    "Planera och strukturera träningspassen",
    "Att tänka på säkerheten under träning",
    "Att ge konstruktiv feedback till alla",
    "Kunna vara bestämd men vänlig",
    "Disciplinerad och noggrann",
  ];

  return (
    <Container>
      <InstructorModal isOpen={isOpen}>
        <Heading>Instructors Modal</Heading>
        <ModalContainer>
          <ModalSubContainers>
            <Image src={instructorDataModal?.image} alt={"fireSpot"} />
          </ModalSubContainers>
          <ModalSubContainers>
            <TextContainer>
              <span>{instructorDataModal?.name}</span>
              <span>{instructorDataModal?.type}</span>
            </TextContainer>
            <p>{instructorDataModal?.about}</p>
            <TextContainer>
              <ModalSubHeading>Instructors</ModalSubHeading>
              {instructorDataModal?.instructors.map((i) => (
                <span>{i}</span>
              ))}
            </TextContainer>
            <TextContainer>
              <ModalSubHeading>Education</ModalSubHeading>
              <span>{instructorDataModal?.education.text}</span>
              {instructorDataModal?.education.info.map((e) => (
                <span>{e}</span>
              ))}
            </TextContainer>
            <TextContainer>
              <ModalSubHeading>National</ModalSubHeading>
              {instructorDataModal?.national.map((n) => (
                <span>{n}</span>
              ))}
            </TextContainer>
            <TextContainer>
              <ModalSubHeading>Other Martial arts</ModalSubHeading>
              {instructorDataModal?.otherMartialArts?.map((n) => (
                <span>{n}</span>
              ))}
            </TextContainer>
            <TextContainer>
              <ModalSubHeading>Grade</ModalSubHeading>
              {instructorDataModal?.grade?.text && (
                <span>{instructorDataModal?.grade?.text}</span>
              )}
              {instructorDataModal?.grade?.info.map((n) => (
                <span>{n}</span>
              ))}
            </TextContainer>
            <TextContainer>
              <ModalSubHeading>Awards</ModalSubHeading>
              {instructorDataModal?.awards?.map((n) => (
                <span>{n}</span>
              ))}
            </TextContainer>
            {instructorDataModal?.domoLicenseInTaido && (
              <TextContainer>
                <ModalSubHeading>Domo license in taido</ModalSubHeading>
                {instructorDataModal?.domoLicenseInTaido?.map((n) => (
                  <span>{n}</span>
                ))}
              </TextContainer>
            )}
          </ModalSubContainers>
        </ModalContainer>
        <Heading onClick={() => setIsOpen(false)}>Close Modal</Heading>
      </InstructorModal>
      <SubHeading>Instructors</SubHeading>
      <InstructorCards
        instructors={instructors}
        setVisible={setIsOpen}
        setData={setInstructorDataModal}
      />
      <SubHeading>STaFs Ledarskapsprogram</SubHeading>
      <ParagraphText>
        Stockholms Taidoförening har utvecklat ett speciellt program för att
        utbilda instruktörer. Det finns ett antal anledningar varför vi har valt
        detta. För det första så vill vi att våra ledare är välutbildade och
        mycket kvalificerade så att de kan ta hand om våra medlemmar på bästa
        sätt, en kvalitetssäkring helt enkelt. En annan anledning är att vi vill
        skapa något varaktigt hos våra ledare som de inte bara har nytta av i
        vår förening, utan också i sin vardag.
      </ParagraphText>
      <ParagraphText>
        Föreningen erbjuder Ledarskapsprogrammet till medlemmar som har en vilja
        att bli instruktörer i STaF. Föreningens styrelse väljer tillsammans med
        seniorinstruktörerna ut lämpliga kandidater till Ledarskapsprogrammet.
      </ParagraphText>
      <ParagraphText>
        Utbildningen omfattar olika steg för instruktörer. Vi blandar extern och
        intern utbildning med praktik. Exempel på vilka utbildare vi använder
        är; SISU Idrottsutbildarna, Svenska Budo- och Kampsportsförbundet,
        Stockholms – Gottland Budo & kampsportsförbund, Svenska Taidoförbundet,
        World Taido Federation.
      </ParagraphText>
      <ParagraphText>
        Följande krav ställer vi på våra instruktörer och kandidater
      </ParagraphText>
      <ul>
        {listText.map((l) => (
          <List>{l}</List>
        ))}
      </ul>
      <ParagraphText>
        Kandidaterna blir sponsrade av STaF i sin utbildning och får även en
        personlig mentor under praktikperioden. Vårt mål är att ha de bästa
        instruktörerna, därför utbildar vi våra instruktörer enligt ett
        Ledarskapsprogram. Allt för att kunna säkerställa kvalitén för dig som
        tränar hos oss.
      </ParagraphText>
    </Container>
  );
};
