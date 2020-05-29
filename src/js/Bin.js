import React from "react";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  card: {
    height: "100%",
    display: "flex",
    flexDiretion: "column",
  },
  cardContent: {
    flexGrow: "1",
  },
}));

export default function Bin() {
  const classes = useStyles();

  return (
    <Grid item xs={12} sm={6}>
      <Card className={classes.card}>
        <div>Olá</div>
        <CardContent className={classes.cardContent}></CardContent>
      </Card>
    </Grid>
  );
}
