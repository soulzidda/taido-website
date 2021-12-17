import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  height: 70px;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 25px;
  outline: dashed 1px black;
`;

const Text = styled.text`
  color: black;
`;

export { Container, Text };
