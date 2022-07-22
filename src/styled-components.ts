import styled from "styled-components";

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  height: 100%;
  align-content: space-between;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0 30px 0 30px;
`;

const Divider = styled.div`
  width: 100px;
  background-color: dimgrey;
`;

export { AppContainer, ContentContainer, Divider };
