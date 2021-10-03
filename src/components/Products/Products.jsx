import React from "react";
import  {Grid}  from "@material-ui/core";
import Product from "./Product/Product";
import useStyles from './productsStyles'


const Products = ( {products, onAddToCart} ) => {
    const classes = useStyles();
    return(
        <main className={classes.content}>
            <div className={classes.toolbar} />
        <Grid container justify="center" spacing={4} className={classes.grid}>
           {products.map((product) =>(
               <Grid item key={product.id} xs={10} sm={5} md={5} lg={3} >
                   <Product product={product} onAddToCart={onAddToCart} />
                   </Grid>
           ))}
        </Grid>
    </main>

    )
   
}
export default Products;
