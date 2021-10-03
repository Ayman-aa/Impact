import React, { useState} from 'react';
import { AppBar, IconButton, Toolbar, Badge, MenuItem, Menu, Typography } from '@material-ui/core';
import {  ShoppingCart } from '@material-ui/icons';
import { Link, useLocation } from 'react-router-dom';

import useStyles from './NavbarStyles'


const Navbar = ( { totalItems } ) => {
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);
  const classes = useStyles();
  const location = useLocation();

  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleMobileMenuClose = () => setMobileMoreAnchorEl(null);

  const mobileMenuId = 'primary-search-account-menu-mobile';

  const renderMobileMenu = (
    <Menu anchorEl={mobileMoreAnchorEl} anchorOrigin={{ vertical: 'top', horizontal: 'right' }} id={mobileMenuId} keepMounted transformOrigin={{ vertical: 'top', horizontal: 'right' }} open={isMobileMenuOpen} onClose={handleMobileMenuClose}>
      <MenuItem>
        <IconButton component={Link} to="/cart" aria-label="Show cart items" color="inherit">
          <Badge badgeContent={totalItems} color="secondary">
            <ShoppingCart />
          </Badge>
        </IconButton>
        <p>Cart</p>
      </MenuItem>
    </Menu>
  );
     

    return (
   <>
          <AppBar position='fixed' className={classes.appBar} >
              <Toolbar className={classes.toolbar}>
                  <Typography component={Link} to='/' variant='h5' className={classes.title} color='#0F082C'>
                      <img src=' ' alt="" height='25px' className={classes.image} />
                      IMPACT
                  </Typography>
                  <div className={classes.grow} />
                  {location.pathname === '/shop' && (
                  <div className={classes.button}>
                      <Typography component={Link} to='/shop' variant='h6' color='#0F082C' className={classes.shop}>Shop</Typography>
                       <IconButton component={Link} to='/cart' aria-label='Show cart items' className={classes.cart}>
                           <Badge badgeContent={totalItems} color='#0F082C'>
                               <ShoppingCart/>
                           </Badge>
                       </IconButton>
                  </div>
                  )}

              </Toolbar>
              </AppBar>  
        {renderMobileMenu}
    </>

    )
}

export default Navbar
