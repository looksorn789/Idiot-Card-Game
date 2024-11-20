import React from "react";
import { Routes, Route } from "react-router-dom";
import Lobby from "./pages/Lobby";
import LandingPage from "./pages/LandingPage";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/lobby" element={<Lobby />} />
    </Routes>
  );
};

export default App;