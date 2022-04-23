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
  display: flex;
  flex-direction: row;
`;

const Divider = styled.div`
  width: 100px;
  background-color: #00286b;
`;

export { AppContainer, ContentContainer, Divider };
