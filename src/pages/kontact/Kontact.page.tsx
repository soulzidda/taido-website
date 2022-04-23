import React, { useState } from "react";

import {
  PageContainer,
  EmailFormContainer,
  ContactBox,
  InputContainer,
  HalfContainer,
  LocationBox,
  Input,
  LocationBoxContentContainer,
  LocationSubHeading,
  TextField,
  ButtonContainer,
  ContactSpacing,
  Heading,
  SubHeading,
  BoldText,
  Text,
} from "./styled-components";
import { sendEmail } from "../../utils/email";

const KontactPage: React.FC = () => {
  const [data, setData] = useState({
    user_name: "",
    user_email: "",
    message: "",
  });

  const onSubmit = () => {
    sendEmail(data);
  };

  const { user_name, user_email, message } = data;
  return (
    <PageContainer>
      <Heading>Kontact oss</Heading>
      <EmailFormContainer>
        <InputContainer>
          <HalfContainer>
            <div>
              <SubHeading>Din Namn</SubHeading>
              <Input
                type="text"
                placeholder="Namn...."
                value={user_name}
                onChange={(e) =>
                  setData({
                    ...data,
                    user_name: e.target.value,
                  })
                }
              />
            </div>
            <div>
              <SubHeading>Din Email</SubHeading>
              <Input
                type="email"
                placeholder="Email..."
                value={user_email}
                onChange={(e) =>
                  setData({ ...data, user_email: e.target.value })
                }
              />
            </div>
          </HalfContainer>
          <HalfContainer>
            <SubHeading>Ditt meddelande för STaF</SubHeading>
            <TextField
              placeholder="Meddelande..."
              value={message}
              onChange={(e) => setData({ ...data, message: e.target.value })}
            />
          </HalfContainer>
        </InputContainer>

        <ButtonContainer>
          <button onClick={onSubmit}>Skicka</button>
        </ButtonContainer>
      </EmailFormContainer>
      <ContactBox>
        <div style={{ paddingBottom: 20 }}>
          <Heading style={{ textAlign: "center" }}>Important contacts</Heading>
        </div>
        <LocationBoxContentContainer>
          <LocationBox>
            <LocationSubHeading>Gubbengen</LocationSubHeading>

            <ContactSpacing>
              <BoldText>Taido vuxna:</BoldText>
              <Text> Mikael Jansson 070 424 79 13</Text>
            </ContactSpacing>

            <ContactSpacing>
              <BoldText>Taido barn:</BoldText>
              <Text> Eddie Herlin 073 490 43 15</Text>
            </ContactSpacing>

            <ContactSpacing>
              <BoldText>Kishimoto:</BoldText>
              <Text> Mikael Jansson 070 424 79 13</Text>
            </ContactSpacing>

            <ContactSpacing>
              <BoldText>Styrkepasset:</BoldText>
              <Text> Hannah Kanjah 070 787 97 46</Text>
              <br />
              <BoldText style={{ color: "#242526" }}> Styrkepasset:</BoldText>
              <Text> Kim van Wijk 070 722 52 67</Text>
            </ContactSpacing>
          </LocationBox>
          <LocationBox>
            <LocationSubHeading>Vällingby</LocationSubHeading>
            <ContactSpacing>
              <BoldText>Taido:</BoldText>
              <Text> Håkan Karlsson 070 277 26 39</Text>
            </ContactSpacing>
          </LocationBox>
          <LocationBox>
            <LocationSubHeading>Nacka</LocationSubHeading>
            <ContactSpacing>
              <BoldText>Shurite:</BoldText>
              <Text> Eddie Herlin 073 490 43 15</Text>
            </ContactSpacing>
          </LocationBox>
          <LocationBox>
            <LocationSubHeading>Styrelsen</LocationSubHeading>
            <ContactSpacing>
              <BoldText>Kassör :</BoldText>
              <Text> theresia.aruen@gmail.com</Text>
            </ContactSpacing>
            <ContactSpacing>
              <BoldText>Styrelsen :</BoldText>
              <Text> ordf@taido.se</Text>
            </ContactSpacing>
          </LocationBox>
        </LocationBoxContentContainer>
      </ContactBox>
    </PageContainer>
  );
};

export default KontactPage;
