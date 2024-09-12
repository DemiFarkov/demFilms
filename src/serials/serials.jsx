import {
  Badge,
  Button,
  Card,
  Group,
  Image,
  NavLink,
  Paper,
  Rating,
  Spoiler,
  Text,
} from "@mantine/core";
import React, { useState } from "react";
import { data } from "./dataSerials";
import { Link } from "react-router-dom";
import classes from "./serials.module.css";
import Header from "../header/header";
import { is800px } from "../hooks/responsive";
const Serials = () => {

  return (
    <div className={classes.serialsContainer}>
      <Header page={"Сериалы"} />

      <div className={classes.serialsCardsContainer}>
        {data.map((el, i) => (
          <CardPoint key={i} data={el} />
        ))}
      </div>
    </div>
  );
};

const CardPoint = (props) => {
  const width800px = is800px();

  const { data } = props;
  return (
    <Card
      shadow="sm"
      padding="lg"
      radius="md"
      withBorder
      classNames={{
        root: classes.cardRoot,
        inner: "my-inner-class",
      }}
    >
      <Card.Section>
        <Image src={data.img} alt="Постер" />
      </Card.Section>
      <Card.Section
        styles={{
          section: { padding: "1rem" },
        }}
      >
        <Group justify="space-between" mt="md" mb="xs">
          <p className={classes.cardTitle}>{data.title}</p>
        </Group>
        <Rating defaultValue={data.rating} count={10} size={width800px ? "xl" :  "md"}/>

        <p className={classes.cardDescription}> {data.description}</p>
        <Spoiler
          maxHeight={0}
          showLabel="Мое мнение"
          hideLabel="Скрыть"
          styles={{}}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus,
          magni quisquam facilis saepe cumque consequatur ipsum animi, atque
          incidunt ipsa dolores repellat dicta voluptates dolor nesciunt quo ea.
          Distinctio, dolor. Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Ducimus, magni quisquam facilis saepe cumque consequatur ipsum
          animi, atque incidunt ipsa dolores repellat dicta voluptates dolor
          nesciunt quo ea. Distinctio, dolor.
        </Spoiler>
        <NavLink
          classNames={{
            root: classes.cardNavRoot,
            label: classes.cardNavLabel,
            inner: "my-inner-class",
          }}
          href={`https://yandex.ru/search/?text=${data.title}+сериал&lr=63`}
          label="Искать в интернете"
        />
      </Card.Section>
    </Card>
  );
};

export default Serials;
