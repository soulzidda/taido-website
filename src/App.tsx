import React from "react";
import { Routes, Route } from "react-router-dom";

import { Header, Footer, Splitter } from "./components";
import {
  TrainingPage,
  KalenderPage,
  BarnPage,
  KontactPage,
  OmStafPage,
  SplashPage,
} from "./pages";

import {
  AppContainer,
  ContentContainer,
  Divider,
} from "./app.styled-components";

function App() {
  return (
    <AppContainer>
      <Header />
      <Splitter />
      <ContentContainer>
        <Routes>
          <Route path="/taido-website/" element={<SplashPage />} />
          <Route path="/taido-website/training" element={<TrainingPage />} />
          <Route path="/taido-website/kalender" element={<KalenderPage />} />
          <Route path="/taido-website/staf" element={<OmStafPage />} />
          <Route path="/taido-website/barn" element={<BarnPage />} />
          <Route path="/taido-website/kontact" element={<KontactPage />} />
        </Routes>
      </ContentContainer>
      <Footer />
    </AppContainer>
  );
}

export default App;
