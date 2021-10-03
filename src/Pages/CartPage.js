import React ,{ useState, useEffect} from 'react';
import Cart from '../components/Cart/Cart'
import Navbar from '../components/Navbar/Navbar'
import { commerce } from '../lib/commerce';

const CartPage = () => {

    const [cart, setCart] = useState({});
    const fetchCart = async()=>{
      
        setCart( await commerce.cart.retrieve())
      } 
  
      const handleUpdateCartQty = async(productId, quantity) => {
          const {cart} = await commerce.cart.update(productId , {quantity});
  
          setCart(cart)
      }
      const handleRemoveFromCart = async(productId) => {
            const {cart} = await commerce.cart.remove(productId);
            setCart(cart);
      }
      const handleEmptyCart = async() =>{
          const {cart} = await commerce.cart.empty();
          setCart(cart)
      }
      useEffect(()=>{
        
        fetchCart();
        },[]);
  
    return ( 
        <>
           <Navbar />
           <Cart cart={cart}
                 handleUpdateCartQty={handleUpdateCartQty}
                 handleRemoveFromCart={handleRemoveFromCart}
                 handleEmptyCart={handleEmptyCart}   
                 />
            
        </>
    )
}

export default CartPage