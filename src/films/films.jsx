import React from "react";
import Header from "../header/header";
import classes from "./films.module.css";

const Films = () => {
  return (
    <div className={classes.serialsContainer}>
      <Header page={"Фильмы"} />
      <div className={classes.serialsCardsContainer}>
        <h1> Сейчас тут ничего нет</h1>
      </div>
    </div>
  );
};

export default Films;
