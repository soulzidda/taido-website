import styled from "styled-components";

const Container = styled.div`
  padding: 0 30px 0 30px;
`;

const SubHeading = styled.h3`
  color: black;
`;

const ParagraphText = styled.p`
  color: black;
`;

const BannerText = styled.span`
  color: black;
`;

const List = styled("li")`
  color: black;
`;

const Heading = styled.h1`
  color: black;
  text-align: center;
`;

const ModalSubContainers = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  margin: 0 30px 0 30px;
  height: auto;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 10px;
`;

const ModalSubHeading = styled.span`
  font-weight: bold;
  color: black;
`;

const ModalContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: auto;
`;

const Image = styled.img`
  flex: 1;
  object-fit: contain;
`;

export {
  Container,
  SubHeading,
  TextContainer,
  Heading,
  ParagraphText,
  BannerText,
  Image,
  ModalSubHeading,
  List,
  ModalSubContainers,
  ModalContainer,
};
