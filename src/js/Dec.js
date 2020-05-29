import React from "react";
import {
  makeStyles,
  Card,
  CardContent,
  Typography,
  TextField,
} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  cardContent: {
    flexGrow: "1",
    display: "flex",
    flexWrap: "wrap",
  },
}));

export default function Dec() {
  const classes = useStyles();

  return (
    <Grid item xs={12} sm={6}>
      <Card className={classes.card}>
        <CardContent className={classes.cardContent}>
          <Typography variant="h6" gutterBottom>
            Decimal
          </Typography>

          <TextField
            margin="normal"
            variant="outlined"
            label="Number"
            type="number"
            fullWidth
            InputProps={{
              readOnly: true,
            }}
          ></TextField>
        </CardContent>
      </Card>
    </Grid>
  );
}
