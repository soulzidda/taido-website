import styled from "styled-components";

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-content: space-between;
  align-items: center;
  padding: 0 30px 0 30px;
  flex: 1;
  margin-top: 50px;
  width: auto;
`;

const SubHeaderContainer = styled.div`
  display: flex;
  height: 35px;
  width: auto;
  min-width: auto;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 25px;
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

const OptionLinks = styled.h4<{ active: boolean }>`
  padding: 10px 15px;
  cursor: pointer;
  color: black;
  text-decoration: none;
  text-align: center;
  margin: 1rem;
  position: relative;
  font-weight: ${(props) => (props.active ? 700 : 200)}; ;
`;

const Text = styled.h2`
  color: black;
`;

export {
  PageContainer,
  SubHeaderContainer,
  RowContainer,
  InformationBoxes,
  OptionLinks,
  Text,
};
