import styled from "styled-components";

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  height: 100%;
  background-color: #242526;
  align-content: space-between;
`;

const ContentContainer = styled.div`
  padding-bottom: 10%;
`;

export { AppContainer, ContentContainer };
