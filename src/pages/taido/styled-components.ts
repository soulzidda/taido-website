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
`;

const Text = styled.text`
  color: aqua;
`;

export { PageContainer, SubHeaderContainer, Text };
