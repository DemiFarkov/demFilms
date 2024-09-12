import { useState } from "react";
import "./App.css";
import "@mantine/core/styles.css";

import { MantineProvider } from "@mantine/core";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Welcome from "./welcome";
import Serials from "./serials/serials";
import Films from "./films/films";
import Page404 from "./page404";

function App() {
  return (
    <>
      <div>hi hi</div>
      //{" "}
      <BrowserRouter>
        <MantineProvider>
          <Routes>
            {/* <Route path="*" element={<Page404 />} /> */}

            <Route path="/" element={<Welcome />} />
            <Route path="/serials/serials" element={<Serials />} />
            <Route path="/films/films" element={<Films />} />
          </Routes>
        </MantineProvider>
      </BrowserRouter>
      //{" "}
    </>
  );
}

export default App;
