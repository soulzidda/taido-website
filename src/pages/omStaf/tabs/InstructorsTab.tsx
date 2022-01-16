import {
  Container,
  SubHeading,
  ParagraphText,
  BannerText,
  List,
} from "./styled-components";

export const InstructorsTab = () => {
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
      <SubHeading>Instructors</SubHeading>

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
