import React, { useState} from 'react';
import { AppBar, IconButton, Toolbar, Badge, Typography,Drawer,ListItem, List } from '@material-ui/core';
import {  ShoppingCart,Menu,Close } from '@material-ui/icons';
import { Link, useLocation } from 'react-router-dom';

import useStyles from './NavbarStyles'  


const Navbar = ( { totalItems } ) => {
  const classes = useStyles();
  const location = useLocation();
  const [openDrawer, setOpenDrawer] = useState(true);

     

    return (
   <>
          <AppBar position='fixed' className={classes.appBar} >
              <Toolbar className={classes.toolbar}>
                  <Typography component={Link} to='/' variant='h5' className={classes.title} color='#0F082C'>
                      <img src=' ' alt="" height='25px' className={classes.image} />
                      IMPACT
                  </Typography>
                  <div className={classes.grow} />
                  
                  <div className={classes.button}>
                      <Typography component={Link} to='/shop' variant='h6' color='#0F082C' className={classes.shop} onClick={()=>setOpenDrawer(!openDrawer)}>Shop</Typography>
                      {location.pathname === '/shop' && ( <IconButton component={Link} to='/cart' aria-label='Show cart items' className={classes.cart} onClick={()=>setOpenDrawer(!openDrawer)}>
                        <Badge badgeContent={totalItems} color='#0F082C' className={classes.Badge}>
                               <ShoppingCart/>
                        </Badge>
                       </IconButton> )}
                       
                  </div>
                 
                 <IconButton className={classes.menu} onClick={()=>setOpenDrawer(!openDrawer)}>
                     <Menu className={classes.menuStyle}>  
                     </Menu>
               </IconButton>
              </Toolbar>
              </AppBar>  
              <Drawer anchor='right' open={!openDrawer} onClose={()=>setOpenDrawer(false)} className={classes.Drawer}> 
                <List className={classes.list}>
                     <ListItem>  <IconButton className={classes.closeBtn} onClick={()=>setOpenDrawer(!openDrawer)}> <Close></Close> </IconButton>  </ListItem>
                     <ListItem><Typography component={Link} to='/blog' className={classes.listitem}>Blog</Typography></ListItem>
                     <ListItem><Typography component={Link} to='/shop' className={classes.listitem}>Shop</Typography></ListItem>
                     <ListItem><IconButton component={Link} to='/cart' aria-label='Show cart items' className={classes.cart}><Badge badgeContent={totalItems} color='#0F082C'><ShoppingCart/></Badge></IconButton></ListItem>
                </List>
                           
        </Drawer>
       
    </>

    )
}

export default Navbar
