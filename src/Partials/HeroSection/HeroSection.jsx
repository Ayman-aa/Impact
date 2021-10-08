import React from 'react'
import { Typography, Button, Grid} from '@material-ui/core';
import useStyles from './HersoSectionStyles'
import Shape from '../images/Shape.svg'
import { Link } from 'react-router-dom';

const HeroSection = () => {
    const classes = useStyles();
    return (
        <Grid container justify='space-between' className={classes.container}> 
            <Grid item className={classes.leftSide} xs={10} sm={5}>
              <Typography variant='h1' className={classes.heroTitle}>Take Your Gaming Experiece To The Extreme</Typography>
              <Typography variant='body1' className={classes.herodescription}>Play the Newest video games with the highest configuration that we offering</Typography>
              <Typography variant='body1' className={classes.herodescription1}>Build your own custom set-up or check our collection for the most recommended set-ups for upcoming 2022</Typography>
              <div className={classes.buttons}>
               <Button component={Link} to='/shop' variant='contained'className={classes.buttonE}>Explore</Button>
               <Button variant='outlined'className={classes.buttonC}>Contact us</Button>
              </div>
            </Grid>
            <Grid item className={classes.rightSide} xs={10} sm={5}>
              <img alt='Hero design' className={classes.svg} src={Shape} />
            </Grid>
        </Grid>
    )
}

export default HeroSection
