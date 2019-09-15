import React from 'react';
import './MainView.css';
import '../../../node_modules/react-vis/dist/style.css';
import HorizontalBars from '../HorizontalBars';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import HomeIcon from '@material-ui/icons/Home';
import ApartmentIcon from '@material-ui/icons/Apartment';
import PeopleIcon from '@material-ui/icons/People';
import { RadialChart } from 'react-vis';

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
    display: 'table-cell',
    fontWeight: 600,
    paddingLeft: theme.spacing(1),
    verticalAlign: 'middle'
  }
}));

function MainView() {
    const classes = useStyles();

    return (
      <Container fixed>
        <div className={classes.root}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={7}>
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

              <Grid className={classes.header} item xs={12}>
                Rent Roll - my target audience & headroom
              </Grid>
              <Grid container alignItems="center" item xs={12}>
                <div style={{float: 'left', display: 'table-cell'}}><HomeIcon /></div>
                <div style={{display: 'table-cell'}}>
                  <RadialChart
                    data={[
                      {
                        angle: 27,
                        label: 'deck.gl'
                      },
                      {
                        angle: 28,
                        label: 'math.gl'
                      }
                    ]}
                    width={125}
                    height={125}
                  />
                </div>
                <div style={{display: 'table-cell'}}><HomeIcon fontSize='large' /></div>
              </Grid>
            </Grid>
            <Grid item xs={12} md={5}>
              <Grid className={classes.header} item xs={12}>
                Local Stock
              </Grid>
              <Grid container item className={classes.row} xs={12}>
                <div className={classes.colLeft}>
                  <HomeIcon fontSize='large' />
                </div>
                <div className={classes.colRight}>
                  9,726
                </div>
              </Grid>
              <Grid container item className={classes.row} xs={12}>
                <div className={classes.colLeft}>
                  <ApartmentIcon fontSize='large' />
                </div>
                <div className={classes.colRight}>
                  2,827
                </div>
              </Grid>
              <Grid container item className={classes.row} xs={12}>
                <div className={classes.colLeft}>
                  <PeopleIcon fontSize='large' />
                </div>
                <div className={classes.colRight}>
                  16,019
                </div>
              </Grid>
              <Grid container item className={classes.row} xs={12}>
                <div className={classes.colLeft} style={{padding: 0}}>
                  <img src={ require('../../assets/images/sale.png') } alt="Sale" style={{width: 50}}></img>
                </div>
                <div className={classes.colRight}>
                  [Line chart]
                </div>
              </Grid>
              <Grid container item className={classes.row} xs={12}>
                <div className={classes.colLeft}>
                  <img src={ require('../../assets/images/money.png') } alt="Money" style={{width: 35}}></img>
                </div>
                <div className={classes.colRight}>
                  [Line chart]
                </div>
              </Grid>
            </Grid>
            <Grid item xs={12} md={5}>
              <div className={classes.header}>Recommendation</div>
            </Grid>
            <Grid item xs={12} md={7}>
              <div className={classes.header}>Growth analysis</div>
            </Grid>
          </Grid>
        </div>
      </Container>
    );
}

export default MainView;
