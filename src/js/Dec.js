import React from "react";
import { makeStyles, Card, CardContent } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  cardContent: {
    flexGrow: "1",
  },
}));

export default function Dec() {
  const classes = useStyles();

  return (
    <Grid item xs={12} sm={6}>
      <Card className={classes.card}>
        <div>Hello!</div>
        <CardContent className={classes.cardContent}></CardContent>
      </Card>
    </Grid>
  );
}
