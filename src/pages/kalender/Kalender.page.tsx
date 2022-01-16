import React, { useState } from "react";
import Calendar from "react-calendar";

import { PageContainer } from "./styled-components";

const KalenderPage: React.FC = () => {
  const [value, onChange] = useState(new Date());

  return (
    <PageContainer>
      <Calendar onChange={onChange} value={value} calendarType="ISO 8601" />
    </PageContainer>
  );
};

export default KalenderPage;
