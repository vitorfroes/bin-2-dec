import React from "react";
import Bin from "./Bin";
import Dec from "./Dec";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import Header from "./Header";

const useStyles = makeStyles((theme) => ({
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  heroButton: {
    marginTop: theme.spacing(2),
  },
  buttonGrid: {
    display: "flex",
    justifyContent: "center",
  },
}));

export default function App() {
  const classes = useStyles();

  return (
    <main>
      <Header />

      <Container maxWidth="md" className={classes.cardGrid}>
        <Grid container spacing={4}>
          <Bin />
          <Dec />
        </Grid>

        <div className={classes.heroButton}>
          <Container maxWidth="md" className={classes.buttonGrid}>
            <Button size="large" variant="contained" color="primary">
              Converter
            </Button>
          </Container>
        </div>
      </Container>
    </main>
  );
}
