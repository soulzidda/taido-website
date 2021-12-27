import styled from "styled-components";

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-content: space-between;
  align-items: center;
  padding: 0 30px 0 30px;
`;

const EmailFormContainer = styled.div`
  width: 100%;
  height: 300px;
  border: 1px solid white;
  margin: 30px 0 30px 0;
`;

const Text = styled.text`
  color: aqua;
`;

export { PageContainer, EmailFormContainer, Text };
