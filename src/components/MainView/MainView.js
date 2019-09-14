import React from 'react';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary
    }
  }));

function MainView() {
    const classes = useStyles();

    return (
      <Container fixed>
        <div className={classes.root}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={7}>
              <div className={classes.paper}>xs=12 sm=7</div>
            </Grid>
            <Grid item xs={12} sm={5}>
              <div className={classes.paper}>xs=12 sm=5</div>
            </Grid>
            <Grid item xs={12} sm={5}>
              <div className={classes.paper}>xs=12 sm=5</div>
            </Grid>
            <Grid item xs={12} sm={7}>
              <div className={classes.paper}>xs=12 sm=7</div>
            </Grid>
          </Grid>
        </div>
      </Container>
    );
}

export default MainView;
