import styled from "styled-components";

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr;
  min-width: auto;
  overflow: auto;
`;

const InstructorCard = styled.div`
  width: 150px;
  height: 200px;
  border: 1px solid white;
  margin: 10px 10px 10px 10px;
`;

const Image = styled.img`
  width: auto;
  max-width: 100%;
  height: 100%;
  object-fit: cover;
`;

export { Container, InstructorCard, Image };
