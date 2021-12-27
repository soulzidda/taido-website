import React from "react";
import { Routes, Route } from "react-router-dom";

import { Header, Footer } from "./components";
import {
  TrainingPage,
  KalenderPage,
  BarnPage,
  KontactPage,
  OmStafPage,
  SplashPage,
} from "./pages";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<SplashPage />} />
        <Route path="/training" element={<TrainingPage />} />
        <Route path="/kalender" element={<KalenderPage />} />
        <Route path="/staf" element={<OmStafPage />} />
        <Route path="/barn" element={<BarnPage />} />
        <Route path="/kontact" element={<KontactPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
