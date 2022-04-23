import styled from "styled-components";

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-content: space-between;
  align-items: center;
  padding: 0 30px 0 30px;
  flex: 1;
  width: auto;
  margin-top: 50px;
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

const InformationBoxes = styled.div`
  display: flex;
  flex-direction: column;
  height: auto;
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
  InformationBoxes,
  OptionLinks,
  Text,
};
