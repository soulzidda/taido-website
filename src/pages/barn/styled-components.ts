import styled from "styled-components";

const PageContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  width: auto;
  padding: 0 30px 0 30px;
  align-items: center;
  margin-top: 50px;
`;

const RowContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  padding-bottom: 30px;
`;

const TopRowCards = styled.div`
  width: 100%;
  padding: 10px;
  height: auto;
`;

const Heading = styled.h2`
  color: black;
`;

const SubHeading = styled.h3`
  color: black;
`;

const MapCards = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  width: 45%;
`;

const MapImage = styled.img`
  display: flex;
  width: 80%;
  height: 100%;
`;

const Text = styled.p`
  color: black;
`;

const HyperlinkInfoText = styled.span`
  color: black;
`;

const HyperLink = styled.a`
  color: #ffff00;
`;

export {
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
};
