import React from "react";
import { Container, Button, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  heroButton: {
    marginTop: theme.spacing(2),
  },
  buttonGrid: {
    display: "flex",
    paddingLeft: "0",
  },
  button: {
    margin: "0 5px 0 0",
  },
}));

export default function ActionButtons(props) {
  const classes = useStyles();

  return (
    <div className={classes.heroButton}>
      <Container maxWidth="md" className={classes.buttonGrid}>
        <Button
          size="large"
          variant="contained"
          color="primary"
          className={classes.button}
          onClick={props.onConvert}
        >
          Convert
        </Button>

        <Button
          size="large"
          variant="contained"
          color="secondary"
          className={classes.button}
          onClick={props.onClear}
        >
          Clear
        </Button>
      </Container>
    </div>
  );
}
