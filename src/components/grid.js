import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';


const useStyles = makeStyles(theme => ({
//   root: {
// //    flexGrow: 1,
//   },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },

}));

export default function NestedGrid(grid) {
  const classes = useStyles();

  function FormRow(row) {
    return (
      <React.Fragment>
        <Grid item xs={1} justify="center">
          <Paper className={classes.paper}>{row[0]}</Paper>
        </Grid>
        <Grid item xs={1} justify="center" >
          <Paper className={classes.paper}>{row[1]}</Paper>
        </Grid>
        <Grid item xs={1} justify="center">
          <Paper className={classes.paper}>{row[2]}</Paper>
        </Grid>
        <Grid item xs={1} justify="center">
          <Paper className={classes.paper}>{row[3]}</Paper>
        </Grid>
        <Grid item xs={1} justify="center">
          <Paper className={classes.paper}>{row[4]}</Paper>
        </Grid>

        {/* </Box> */}
      </React.Fragment>
    );
  }

  return (
    <div className={classes.root}>
      <Grid container spacing={1} justify="center">
        <Grid container item xs={8} justify="center" spacing={1}>
          {FormRow(grid[0])}
        </Grid>
        <Grid container item xs={8} justify="center" spacing={1}>
        {FormRow(grid[1])}
        </Grid>
        <Grid container item xs={8} justify="center" spacing={1}>
        {FormRow(grid[2])}
        </Grid>
        <Grid container item xs={8} justify="center" spacing={1}>
        {FormRow(grid[3])}
        </Grid>
        <Grid container item xs={8} justify="center" spacing={1}>
        {FormRow(grid[4])}
        </Grid>
      </Grid>
    </div>
  );
}