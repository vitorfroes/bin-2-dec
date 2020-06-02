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

  const isValid = (bin) => {
    const isBinary = () => {
      let ret = true;

      if (bin && bin.length > 0) {
        for (let index = 0; index < bin.length; index++) {
          if (bin.charAt(index) !== "1" && bin.charAt(index) !== "0") {
            ret = false;
            break;
          }
        }
      }

      return ret;
    };
    const binary = isBinary();

    setError(!binary);

    return error;
  };

  const handleClear = () => {
    setBin("");
    setDec("");
  };

  const handleConvert = () => {
    const dec = convert(binNumber);

    setDec(dec);
  };

  const handleChange = (event) => {
    isValid(event.target.value);

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
