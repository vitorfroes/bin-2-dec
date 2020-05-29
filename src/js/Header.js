import React from "react";
import { Typography, Container, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  heroContent: {
    backgroundColor: "#BFFFA8",
    padding: theme.spacing(2, 0, 2),
    boxShadow:
      "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
  },
  span: {
    color: "#D175C6",
    fontWeight: "bold",
  },
}));

export default function Header() {
  const classes = useStyles();
  return (
    <div className={classes.heroContent}>
      <Container maxWidth="sm">
        <Typography
          component="h1"
          variant="h2"
          align="center"
          color="textPrimary"
          gutterBottom
        >
          Bin <span className={classes.span}>2</span> Dec
        </Typography>
      </Container>
    </div>
  );
}
