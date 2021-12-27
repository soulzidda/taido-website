import styled from "styled-components";

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SubHeaderContainer = styled.div`
  display: flex;
  height: 35px;
  min-width: 40%;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 25px;
  border: 1px solid black;
  padding: 10px 15px;
  cursor: pointer;
`;

const RowContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  padding-bottom: 30px;
`;

const InformationBoxes = styled.div`
  width: 45%;
  height: 400px;
  border: 1px solid black;
`;

const Text = styled.h2`
  color: black;
`;

export {
  PageContainer,
  SubHeaderContainer,
  RowContainer,
  InformationBoxes,
  Text,
};
