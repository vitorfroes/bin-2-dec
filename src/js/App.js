import React, { useState } from "react";
import Bin from "./Bin";
import Dec from "./Dec";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Header from "./Header";
import ActionButtons from "./ActionButtons";
import convert from "../utils/convert";

const useStyles = makeStyles((theme) => ({
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
}));

export default function App() {
  const classes = useStyles();

  const [binNumber, setBin] = useState("");
  const [decNumber, setDec] = useState("");
  const [error, setError] = useState(false);

  const isValid = () => {
    const isBinary = (binNumber) =>
      !String(binNumber).includes("2") &&
      !String(binNumber).includes("3") &&
      !String(binNumber).includes("4") &&
      !String(binNumber).includes("5") &&
      !String(binNumber).includes("6") &&
      !String(binNumber).includes("7") &&
      !String(binNumber).includes("8") &&
      !String(binNumber).includes("9") &&
      !String(binNumber).includes("e");

    if (!isBinary()) {
      console.log("NOT binary");

      setError(true);
    }

    return error === "";
  };

  const handleClear = () => {
    setBin("");
    setDec("");
  };

  const handleConvert = () => {
    const dec = convert(binNumber);

    console.log(dec);

    setDec(dec);
  };

  const handleChange = (event) => {
    //isValid();

    setBin(event.target.value);
  };

  return (
    <main>
      <Header />

      <Container maxWidth="md" className={classes.cardGrid}>
        <Grid container spacing={4}>
          <Bin binNumber={binNumber} onChange={handleChange} error={error} />
          <Dec decNumber={decNumber} />
        </Grid>

        <ActionButtons onClear={handleClear} onConvert={handleConvert} />
      </Container>
    </main>
  );
}
