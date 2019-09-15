import React from 'react';
import './MainView.css';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import AccessTimeIcon from '@material-ui/icons/AccessTime';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  header: {
    fontWeight: 600,
    padding: theme.spacing(1)
  },
  colLeft: {
    float: 'left',
    padding: theme.spacing(1)
  },
  colRight: {
    padding: theme.spacing(1)
  },
  row: {
    '&::after': {
      display: 'table',
      clear: 'both'
    }
  }
}));

function MainView() {
    const classes = useStyles();

    return (
      <Container fixed>
        <div className={classes.root}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={7}>
              <Grid className={classes.header} item xs={12}>
                All Agents Stats
              </Grid>
              <Grid container xs={12}>
                <div className={classes.colLeft}><AccessTimeIcon /></div>
                <div className={classes.colRight}>Test2</div>
              </Grid>
              <Grid container xs={12}>
                <div className={classes.colLeft}><AccessTimeIcon /></div>
                <div className={classes.colRight}>Test2</div>
              </Grid>
              <Grid container xs={12}>
                <div className={classes.colLeft}><AccessTimeIcon /></div>
                <div className={classes.colRight}>Test2</div>
              </Grid>
            </Grid>
            <Grid item xs={12} sm={5}>
              <Grid className={classes.header} item xs={12}>
                Local Stock
              </Grid>
              <Grid container xs={12}>
                <div className={classes.colLeft}>Test1</div>
                <div className={classes.colRight}>Test2</div>
              </Grid>
              <Grid container xs={12}>
                <div className={classes.colLeft}>Test1</div>
                <div className={classes.colRight}>Test2</div>
              </Grid>
              <Grid container xs={12}>
                <div className={classes.colLeft}>Test1</div>
                <div className={classes.colRight}>Test2</div>
              </Grid>
            </Grid>
            <Grid item xs={12} sm={5}>
              <div className={classes.header}>xs=12 sm=5</div>
            </Grid>
            <Grid item xs={12} sm={7}>
              <div className={classes.header}>xs=12 sm=7</div>
            </Grid>
          </Grid>
        </div>
      </Container>
    );
}

export default MainView;
