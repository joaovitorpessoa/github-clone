import "react-calendar-heatmap/dist/styles.css";

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Header } from "./components";
import { Profile, Repo } from "./pages";

import { GlobalStyles } from "./styles";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />

      <Header />

      <Routes>
        <Route path="/" element={<Profile />} />
        <Route path="/:username" element={<Profile />} />
        <Route path="/:username/:reponame" element={<Repo />} />
      </Routes>

      {/* <Footer/> */}
    </BrowserRouter>
  );
}

export default App;
