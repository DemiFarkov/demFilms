import { useState } from "react";
import "./App.css";
import "@mantine/core/styles.css";

import { MantineProvider } from "@mantine/core";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Welcome from "./welcome";
import Serials from "./serials/serials";
import Films from "./films/films";

function App() {

  return (
    <MantineProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/serials/serials" element={<Serials />} />
          <Route path="/films/films" element={<Films />} />

        </Routes>
      </BrowserRouter>
    </MantineProvider>
  );
}

export default App;
