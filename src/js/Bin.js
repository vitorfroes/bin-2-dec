import React from "react";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, TextField, InputAdornment } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  card: {
    height: "100%",
    display: "flex",
    flexDiretion: "column",
  },
  cardContent: {
    flexGrow: "1",
    display: "flex",
    flexWrap: "wrap",
  },
}));

export default function Bin() {
  const classes = useStyles();

  return (
    <Grid item xs={12} sm={6}>
      <Card className={classes.card}>
        <CardContent className={classes.cardContent}>
          <Typography variant="h6" gutterBottom>
            Binary
          </Typography>

          <TextField
            id="binary"
            variant="outlined"
            label="Number"
            type="number"
            margin="normal"
            fullWidth
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">Bin</InputAdornment>
              ),
            }}
          ></TextField>
        </CardContent>
      </Card>
    </Grid>
  );
}
