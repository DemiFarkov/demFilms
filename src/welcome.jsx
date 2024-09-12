import { NavLink, Rating } from "@mantine/core";
import React from "react";
import "./style.css";
const Welcome = () => {
  return (
    <div className="welcomeBlock">
      <h1> Что ищем?</h1>
      <NavLink
        href="./serials/serials"
        label="Сериалы"
        color="#f76c5b"
        classNames={{
          root: "root",

          label: "label",
        }}
      />
      <NavLink
        href="./films/films"
        label="Фильмы"
        color="#f76c5b"
        classNames={{
          root: "root",

          label: "label",
        }}
      />
      <NavLink
        href="./serials"
        label="Аниме"
        color="#f76c5b"
        classNames={{
          root: "root",

          label: "label",
        }}
      />
    </div>
  );
};

export default Welcome;
