import React from 'react';
import { AppBar, IconButton, Toolbar, Badge,Typography} from '@material-ui/core';
import {  ShoppingCart } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import useStyles from './headerStyles'

const Header = ({totalItems}) => {
  const classes = useStyles();

    return (
        <AppBar position='relative' className={classes.header}>
          <Toolbar className={classes.toolbar}>
             <Typography component={Link} to='/' variant='h5' className={classes.title}>IMPACT</Typography>
             <div className={classes.navLinks}>
                  <Typography component={Link} to='/blog' className={classes.navlinksTitle}>Blog</Typography>
                  <Typography component={Link} to='/shop' className={classes.navlinksTitle}>Shop</Typography>
                  <IconButton component={Link} to='/cart' aria-label='Show cart items' className={classes.cart}>
                           <Badge badgeContent={totalItems} color='#0F082C'>
                               <ShoppingCart/>
                           </Badge>
                   </IconButton>
             </div>
          </Toolbar>

        </AppBar>
    )
}

export default Header