import React from 'react';
import './MainView.css';
import '../../../node_modules/react-vis/dist/style.css';
import HorizontalBars from '../HorizontalBars';
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
  row: {
    display: 'table-row'
  },
  colLeft: {
    float: 'left',
    padding: theme.spacing(1),
    display: 'table-cell'
  },
  colRight: {
    width: '100%',
    display: 'table-cell'
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
              <Grid container item className={classes.row} xs={12}>
                <div className={classes.colLeft}>
                  <AccessTimeIcon fontSize='large' />
                </div>
                <div className={classes.colRight}>
                  <HorizontalBars series={[48, 56]} />
                </div>
              </Grid>
              <Grid container item className={classes.row} xs={12}>
                <div className={classes.colLeft}>
                  <img src={ require('../../assets/images/discount.png') } alt="Discount" style={{width: 35}}></img>
                </div>
                <div className={classes.colRight}>
                  <HorizontalBars series={[27, 38]} />
                </div>
              </Grid>
              <Grid container item className={classes.row} xs={12}>
                <div className={classes.colLeft} style={{padding: 0}}>
                  <img src={ require('../../assets/images/sale.png') } alt="Sale" style={{width: 50}}></img>
                </div>
                <div className={classes.colRight}>
                  <HorizontalBars series={[22, 24]} />
                </div>
              </Grid>
            </Grid>
            <Grid item xs={12} sm={5}>
              <Grid className={classes.header} item xs={12}>
                Local Stock
              </Grid>
              <Grid container item className={classes.row} xs={12}>
                <div className={classes.colLeft}>Test1</div>
                <div className={classes.colRight}>Test2</div>
              </Grid>
              <Grid container item className={classes.row} xs={12}>
                <div className={classes.colLeft}>Test1</div>
                <div className={classes.colRight}>Test2</div>
              </Grid>
              <Grid container item className={classes.row} xs={12}>
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
