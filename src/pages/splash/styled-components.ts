import styled from "styled-components";

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-left: 30px;
  padding-right: 30px;
  overflow-y: scroll;
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
  border: 1px solid black;
  padding: 10px;
`;

const NewsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
  border: 1px solid black;
  padding: 10px;
  height: 700px;
`;

const SecondaryInfoContainer = styled.div`
  display: flex;
  width: 30%;
  height: 40%;
  border: 1px solid black;
  flex-direction: column;
  padding: 10px;
`;

const TertiaryInfoContainer = styled.div`
  display: flex;
  width: 100%;
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
  padding-right: 20px;
  justify-content: space-between;
  align-content: space-between;
`;

const Text = styled.text`
  color: aqua;
`;

export {
  PageContainer,
  ContentRow,
  InformationContainer,
  NewsContainer,
  SecondaryInfoContainer,
  TertiaryInfoContainer,
  ColumnContainer,
  Text,
};
