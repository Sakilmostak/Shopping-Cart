import React from 'react';
import CartItem from './CartItem';

const Cart = (props) => {
    const {products} = props;
    return (
        <div className='cart'>
            {products.map((product)=>{
                return (
                    <CartItem 
                        product={product} 
                        key={product.id}
                        onIncreaseQuantity={props.onIncreaseQuantity}
                        onDecreaseQuantity={props.onDecreaseQuantity}
                        handleDeleteProduct={props.handleDeleteProduct}
                    /> //passint the value in product to the 'props' to be accessed by this component
                )
            })}
        </div>
    )
}

export default Cart;