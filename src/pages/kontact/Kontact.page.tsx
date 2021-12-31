import React, { useState } from "react";

import {
  PageContainer,
  EmailFormContainer,
  InputContainer,
  HalfContainer,
  Input,
  TextField,
  ButtonContainer,
  Heading,
  SubHeading,
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
      <EmailFormContainer>
        <h2>Important contacts</h2>
      </EmailFormContainer>
    </PageContainer>
  );
};

export default KontactPage;
