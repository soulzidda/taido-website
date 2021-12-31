import styled from "styled-components";

export const Membership = () => {
  return (
    <Container>
      <h3>Medlemskap</h3>
      <p>
        Som medlem i Stockholms Taidoförening får du tillgång till hela vårt
        träningsutbud*, alla kulturevenemang och alla sociala event.
        Medlemsavgiften täcker även en försäkringsavgift. Du är då försäkrad på
        alla träningspass, läger och tävlingar som du deltar på med oss.
      </p>
      <span>*träningsavgift tillkommer</span>
      <h3>Stödmedlemskap</h3>
      <p>
        årt stödmedlemskap är för dig som vill stötta föreningen och ta del av
        vårt utbud av sociala event och kulturevent men inte är intresserad av
        våra träningsformer.
      </p>
      <br />
      <span>Medlemsavgift 400kr/år</span>
      <br />
      <span>Stödmedlemsavgift 200kr/år</span>
      <br />
      <h3>Taido</h3>
      <br />
      <span>Terminsavgift vuxen 16+ år: 1700kr</span>
      <br />
      <span> Terminsavgift ungdom 13-15 år: 900kr</span>
      <br />
      <span>Terminsavgift barn 6-12 år: 600kr</span>
    </Container>
  );
};

const Container = styled.div`
  padding: 0 30px 0 30px;
`;
