import {
  Container,
  SubHeading,
  ParagraphText,
  BannerText,
} from "./styled-components";

export const Membership = () => {
  return (
    <Container>
      <SubHeading>Medlemskap</SubHeading>
      <ParagraphText>
        Som medlem i Stockholms Taidoförening får du tillgång till hela vårt
        träningsutbud*, alla kulturevenemang och alla sociala event.
        Medlemsavgiften täcker även en försäkringsavgift. Du är då försäkrad på
        alla träningspass, läger och tävlingar som du deltar på med oss.
      </ParagraphText>
      <BannerText>*träningsavgift tillkommer</BannerText>
      <SubHeading>Stödmedlemskap</SubHeading>
      <ParagraphText>
        årt stödmedlemskap är för dig som vill stötta föreningen och ta del av
        vårt utbud av sociala event och kulturevent men inte är intresserad av
        våra träningsformer.
      </ParagraphText>
      <BannerText>Medlemsavgift 400kr/år</BannerText>
      <br />
      <BannerText>Stödmedlemsavgift 200kr/år</BannerText>
      <br />
      <SubHeading>Taido</SubHeading>
      <BannerText>Terminsavgift vuxen 16+ år: 1700kr</BannerText>
      <br />
      <BannerText>Terminsavgift ungdom 13-15 år: 900kr</BannerText>
      <br />
      <BannerText>Terminsavgift barn 6-12 år: 600kr</BannerText>
    </Container>
  );
};
