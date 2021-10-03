import React from 'react'
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton } from '@material-ui/core'
import { AddShoppingCart } from '@material-ui/icons'
import useStyles from './Productstyles'

const Product = ({ product, onAddToCart }) => {
    const classes = useStyles();

   
    return (
        <Card className={classes.root}>
             <CardMedia className={classes.media} image={product.media.source} title={Product.name} />
             <CardContent>
                 <div className={classes.cardContent}>
                    <Typography variant='h6' gutterBottom>
                      {product.name}
                    </Typography>
                    
                 </div>
                 <Typography dangerouslySetInnerHTML={{ __html: product.description}} variant='body2' color='textSecondary'/>
             </CardContent>
             <CardActions  className={classes.cardActions}>
                    <IconButton aria-label="Add To Cart" onClick={()=> onAddToCart(product.id)}>
                       <AddShoppingCart />
                    </IconButton>
                 <Typography variant='h6' color='inherit' >
                      {product.price.formatted_with_symbol}
                 </Typography>
             </CardActions>
        </Card>
    )
}

export default Product 
