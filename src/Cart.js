import React from 'react';
import CartItem from './CartItem';

class Cart extends React.Component {

    constructor(){
        super();
        this.state= {
            products: [
                {
                    price: 69,
                    title: 'I wont tell',
                    qty: 2,
                    img: '',
                    id: 1
                },
                {
                    price: 420,
                    title: 'Weed',
                    qty: 1,
                    img: '',
                    id: 2
                },
                {
                    price: 666,
                    title: 'Satan Watch',
                    qty: 1,
                    img: '',
                    id: 3
                }
            ]
        }
    }

    render(){
        const {products} = this.state;
        return (
            <div className='cart'>
                {products.map((product)=>{
                    return (
                        <CartItem 
                            product={product} 
                            key={product.id}
                        /> //passint the value in product to the 'props' to be accessed by this component
                    )
                })}
            </div>
        )
    }
}

export default Cart;