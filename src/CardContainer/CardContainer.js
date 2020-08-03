import React, { useState } from "react";
import NewsCard from "../Card";
import WeatherCard from "../WeatherCard";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  container: {
    display: "grid",
    gridTemplateColumns: "repeat(6,1fr)",
    gridColumnGap: "10px",
    gridRowGap: "10px",
  },
});

export default function CardContainer({ val }) {
  const classes = useStyles();

  let newsCardList = val.map((v, i) => <NewsCard articles={val} index={i} />);
  if (val.length) {
    return (
      <React.Fragment>
        <CssBaseline />
        <Container
          maxWidth="xl"
          disableGutters="false"
          className={classes.container}
        >
          {newsCardList}
        </Container>
      </React.Fragment>
    );
  } else {
    return (
      <div>
        <WeatherCard />
      </div>
    );
  }
}
