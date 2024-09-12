import { Burger, Button, Drawer, NavLink } from "@mantine/core";
import React, { useState } from "react";
import { is900px } from "../hooks/responsive";
import { useDisclosure } from "@mantine/hooks";
import classes from "./header.module.css";
const Header = (props) => {
  const { page } = props;
  const width900px = is900px();

  return (
    <div className={classes.header}>
      {width900px ? (
        <>
          {" "}
          <h1 className={classes.pageTitle}>{page}</h1>
          <BurgerMenu />
        </>
      ) : (
        <>
          <h1 className={classes.pageTitle}>{page}</h1>
          <nav className={classes.pageNav}>
            <NavLink
              classNames={{
                root: classes.pageNavPointRoot,
                label: classes.pageNavPointLabel,
              }}
              href={`../serials/serials`}
              label="Сериалы"
              active = {page == "Сериалы" && true}
              color="#d13e3e"
            />{" "}
            <NavLink
              classNames={{
                root: classes.pageNavPointRoot,
                label: classes.pageNavPointLabel,
              }}
              href={`../films/films`}
              label="Фильмы"
              active = {page == "Фильмы" && true}

              color="#d13e3e"
            />{" "}
            <NavLink
              classNames={{
                root: classes.pageNavPointRoot,
                label: classes.pageNavPointLabel,
              }}
              // href={`https://yandex.ru/search/?text=${data.title}+сериал&lr=63`}
              label="Аниме"
              active = {page == "Аниме" && true}

              color="#d13e3e"
            />
          </nav>
        </>
      )}
    </div>
  );
};

export default Header;

const BurgerMenu = () => {
  const [opened, setOpened] = useState(false);
  const [openBurger, setOpenBurger] = useState(false);
  return (
    <>
      <Drawer opened={opened} onClose={()=>{setOpened(false),setOpenBurger(false)}} size="100%">
        <nav className={classes.pageNav}>
          <NavLink
            classNames={{
              root: classes.pageNavPointRootDrawer,
            }}
            href={`../serials/serials`}
            label="Сериалы"
            active
            color="#d13e3e"
          />{" "}
          <NavLink
            classNames={{
              root: classes.pageNavPointRootDrawer,
            }}
            href={`../films/films`}
            label="Фильмы"
            color="#d13e3e"
          />{" "}
          <NavLink
            classNames={{
              root: classes.pageNavPointRootDrawer,
              label: "my-label-class",
              inner: "my-inner-class",
            }}
            // href={`https://yandex.ru/search/?text=${data.title}+сериал&lr=63`}
            label="Аниме"
            color="#d13e3e"
          />
        </nav>
      </Drawer>
      <Burger onClick={()=>{setOpened(true), setOpenBurger(true)} } lineSize={3} size="xl" opened={openBurger} aria-label="Toggle navigation" />
    </>
  );
};
