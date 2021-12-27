import styled from "styled-components";

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 30px;
  padding-right: 30px;
  align-items: center;
`;

const RowContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  padding-bottom: 30px;
`;

const TopRowCards = styled.div`
  width: 30%;
  border: 1px solid white;
  padding: 10px;
  height: 300px;
`;

const MapCards = styled.div`
  width: 45%;
  height: 400px;
  border: 1px solid white;
`;

export { PageContainer, RowContainer, TopRowCards, MapCards };
