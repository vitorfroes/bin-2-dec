import React from "react";
import Bin from "./Bin";
import Dec from "./Dec";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(2, 0, 2),
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
      <div className={classes.heroContent}>
        <Container maxWidth="sm">
          <Typography
            component="h1"
            variant="h2"
            align="center"
            color="textPrimary"
            gutterBottom
          >
            Bin 2 Dec
          </Typography>
        </Container>
      </div>

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
