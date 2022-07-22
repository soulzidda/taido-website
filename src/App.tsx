import React from "react";
import { Route, Routes } from "react-router-dom";

import { Footer, Header, Splitter } from "./components";
import {
  BarnPage,
  KalenderPage,
  KontactPage,
  OmStafPage,
  SplashPage,
  TrainingPage,
} from "./pages";

import { AppContainer, ContentContainer } from "./app.styled-components";

function App() {
  return (
    <AppContainer>
      <Header />
      <Splitter />
      <ContentContainer>
        <Routes>
          <Route path="/" element={<SplashPage />} />
          <Route path="/training" element={<TrainingPage />} />
          <Route path="/kalender" element={<KalenderPage />} />
          <Route path="/staf" element={<OmStafPage />} />
          <Route path="/barn" element={<BarnPage />} />
          <Route path="/kontact" element={<KontactPage />} />
        </Routes>
      </ContentContainer>
      <Footer />
    </AppContainer>
  );
}

export default App;
