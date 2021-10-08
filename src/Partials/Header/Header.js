import React,{useState} from 'react';
import { AppBar, IconButton, Toolbar, Badge,Typography, Drawer, MenuList, List, ListItem} from '@material-ui/core';
import {  ShoppingCart,Menu } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import useStyles from './headerStyles';

const Header = ({totalItems}) => {
  const classes = useStyles();
  const [openDrawer, setOpenDrawer] = useState(true);

    return (
      <>
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
             <IconButton className={classes.menu} onClick={()=>setOpenDrawer(!openDrawer)}>
                     <Menu className={classes.menuStyle}>  
                     </Menu>
               </IconButton>
                     
          </Toolbar>

        </AppBar>
        <Drawer anchor='right' open={openDrawer} onClose={()=>setOpenDrawer(false)} className={classes.Drawer}> 
        <List className={classes.list}>
          <ListItem><Typography component={Link} to='/blog' className={classes.listitem}>Blog</Typography></ListItem>
          <ListItem><Typography component={Link} to='/shop' className={classes.listitem}>Shop</Typography></ListItem>
        </List>
                           
        </Drawer>
        </>
    )
}

export default Header