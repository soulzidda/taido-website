import styled from "styled-components";

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-left: 20px;
  padding-right: 30px;
  overflow-y: scroll;
  background-color: #242526;
`;

const ContentRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-top: 30px;
  width: 100%;
`;

const InformationContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 60%;
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
  width: 100%;
  height: 300px;
  border: 1px solid white;
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
  color: white;
`;

const Header = styled.h2`
  color: white;
  text-decoration: none;
`;

const Text = styled.text`
  color: white;
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
