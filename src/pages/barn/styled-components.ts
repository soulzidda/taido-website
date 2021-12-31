import styled from "styled-components";

const PageContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  padding-left: 30px;
  padding-right: 30px;
  align-items: center;
`;

const RowContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  padding-bottom: 30px;
`;

const TopRowCards = styled.div`
  width: 30%;
  border: 1px solid white;
  padding: 10px;
  height: auto;
`;

const Heading = styled.h2`
  color: White;
`;

const SubHeading = styled.h3`
  color: White;
`;

const MapCards = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  width: 45%;
  height: px;
`;

const MapImage = styled.img`
  display: flex;
  width: 80%;
  height: 100%;
`;

const Text = styled.p`
  color: White;
`;

const HyperlinkInfoText = styled.span`
  color: white;
`;

const HyperLink = styled.a`
  color: red;
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
