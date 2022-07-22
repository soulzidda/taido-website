import React, { useEffect, useState } from "react";

import {
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
} from "./styled-components";
import {
  dummyArticle,
  dummyArticleThree,
  dummyArticleTwo,
  NewsArticle,
} from "../../utils/dummyArticles";

const NewsBox: React.FC = () => {
  const [articles, setArticles] = useState<NewsArticle[]>([]);

  useEffect(() => {
    setArticles([dummyArticle, dummyArticleTwo, dummyArticleThree]);
  }, []);

  return (
    <Container>
      <Header>Nyheter</Header>
      {articles.map((a: NewsArticle) => (
        <Spacing>
          <ArticleContainer>
            <TextContainer>
              <ArticleHeaderText>{a.header}</ArticleHeaderText>
              <ArticleBodyText>{a.body}</ArticleBodyText>
            </TextContainer>
            <ImageContainer>
              <CenterImage>
                <Image src={a.images[0]} alt={"fireSpot"} />
              </CenterImage>
            </ImageContainer>
          </ArticleContainer>
        </Spacing>
      ))}
    </Container>
  );
};

export default NewsBox;
