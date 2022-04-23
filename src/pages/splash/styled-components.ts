import styled from "styled-components";

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-content: space-between;
  align-items: center;
  padding: 0 30px 0 30px;
  flex: 1;
  width: auto;
`;

const ContentRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-top: 30px;
`;

const InformationContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 55%;
  padding: 10px;
`;

const SecondaryInfoContainer = styled.div`
  display: flex;
  width: 30%;
  height: 40%;
  flex-direction: column;
  padding: 10px 20px 0 0;
`;

const TertiaryInfoContainer = styled.div`
  display: flex;
  height: 300px;
  border: 1px solid black;
  flex-direction: column;
  padding: 10px;
`;

const ColumnContainer = styled.div`
  display: flex;
  width: 30%;
  min-height: 300px;
  flex-direction: column;
  padding-right: 30px;
`;

const ColumnContainerSpacing = styled.div`
  padding-bottom: 75px;
`;

const List = styled("li")`
  color: black;
`;

const Header = styled.h2`
  color: black;
  text-decoration: none;
`;

const Text = styled.text`
  color: black;
`;

export {
  PageContainer,
  ContentRow,
  InformationContainer,
  SecondaryInfoContainer,
  TertiaryInfoContainer,
  ColumnContainer,
  ColumnContainerSpacing,
  List,
  Header,
  Text,
};
