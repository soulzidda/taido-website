import styled from "styled-components";

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-content: space-between;
  align-items: center;
  padding: 0 30px 0 30px;
`;

const EmailFormContainer = styled.div`
  display: flex;
  width: 100%;
  height: 300px;
  flex-direction: column;
  margin: 30px 0 30px 0;
`;

const ContactBox = styled.div`
  width: 100%;
  margin: 30px 30px 30px 30px;
`;

const LocationBoxContentContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin: 30px 30px 30px 30px;
  justify-content: space-between;
`;

const LocationBox = styled.div``;

const InputContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  margin: 0 30px 0 30px;
`;

const HalfContainer = styled.div`
  flex: 1;
  width: 50%;
`;

const Input = styled.input`
  height: 25px;
  width: 50%;
`;

const TextField = styled.textarea`
  height: 65%;
  width: 70%;
  box-sizing: border-box;
`;

const ButtonContainer = styled.div`
  display: flex;
  padding-top: 30px;
  justify-content: center;
`;

const Heading = styled.h2`
  color: White;
`;

const SubHeading = styled.h3`
  color: White;
`;

const LocationSubHeading = styled.h3`
  color: White;
  text-align: center;
`;

const ContactSpacing = styled.div`
  padding: 5px 0 5px 0;
`;

const BoldText = styled.span`
  font-weight: bold;
  color: White;
`;

const Text = styled.span`
  font-weight: normal;
  color: White;
`;

export {
  PageContainer,
  EmailFormContainer,
  ContactBox,
  InputContainer,
  HalfContainer,
  LocationBoxContentContainer,
  LocationBox,
  LocationSubHeading,
  Input,
  TextField,
  ButtonContainer,
  Heading,
  ContactSpacing,
  SubHeading,
  BoldText,
  Text,
};
