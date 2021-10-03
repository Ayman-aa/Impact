import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar/Navbar';
import Products from '../components/Products/Products';
import { commerce } from '../lib/commerce';
const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState({});

    const fetchProducts = async () => {
        const {data} = await commerce.products.list();

        setProducts(data);
    }
    const handleAddToCart = async(productId, quantity) => {
        
        const item = await commerce.cart.add(productId, quantity);
         
        setCart(item.cart);
    } 
    useEffect(()=>{
    fetchProducts();
    },[]);
    return (
        <>
      <Navbar totalItems={cart.total_items}/>
      <Products products={products} onAddToCart={handleAddToCart}/>
            
        </>
    )
}

export default Shop
