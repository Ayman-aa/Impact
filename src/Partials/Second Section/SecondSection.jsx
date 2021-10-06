import React from 'react';
import useStyles from './SecondSectionStyles';
import { Grid, Typography,  Button} from '@material-ui/core';
import Shape from '../images/secondShape.svg';
import { Link } from 'react-router-dom';

const SecondSection = () => {
    const classes = useStyles();
    return (
        <Grid container justify='space-between' className={classes.container}>
             <Grid item className={classes.leftSide}>
                 <img src={Shape} alt='Second section shape' className={classes.svg} />
             </Grid>
             <Grid item className={classes.rightSide}>
               <Typography variant='h1' className={classes.heroTitle}>Whether if you are a gamer or video editor..We got your Back</Typography>
               <Typography variant='body1' className={classes.herodescription}>Best monitors with high frame rates, Best monitors with high frame rates </Typography>
               <Button  className={classes.exploreBtn} component={Link} to='/shop' >Explore</Button>
             </Grid>
        </Grid>
    )
}

export default SecondSection
