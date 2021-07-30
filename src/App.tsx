import "react-calendar-heatmap/dist/styles.css";

import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import { Footer, Header } from "./components";
import { Profile, Repo } from "./pages";

import { GlobalStyles, ThemeName, themes } from "./styles";

function App() {
  const [themeName, setThemeName] = useState<ThemeName>("light");
  const currentTheme = themes[themeName];

  return (
    <ThemeProvider theme={currentTheme}>
      <BrowserRouter>
        <GlobalStyles />

        <Header themeName={themeName} setThemeName={setThemeName} />

        <Routes>
          <Route path="/" element={<Profile />} />
          <Route path="/:username" element={<Profile />} />
          <Route path="/:username/:reponame" element={<Repo />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
