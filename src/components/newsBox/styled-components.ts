import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 55%;
  padding: 10px;
`;

const Header = styled.h2`
  color: black;
  text-decoration: none;
`;

const Spacing = styled.div`
  padding-bottom: 75px;
`;

const ArticleContainer = styled.div`
  display: flex;
  height: 100%;
  border: 1px solid black;
  padding: 20px 10px 20px 10px;
  flex-direction: row;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
`;

const ImageContainer = styled.div`
  display: flex;
  height: 100%;
  align-content: center;
`;

const ArticleHeaderText = styled.h3`
  color: black;
`;

const ArticleBodyText = styled.span`
  color: black;
`;

const CenterImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
`;

const Image = styled.img`
  height: 250px;
  padding: 10px 10px 10px 10px;
`;

export {
  Container,
  Header,
  Spacing,
  ArticleContainer,
  TextContainer,
  ImageContainer,
  ArticleHeaderText,
  ArticleBodyText,
  CenterImage,
  Image,
};
