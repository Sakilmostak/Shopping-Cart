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

    handleIncreaseQuantity = (product)=> {
        const {products}= this.state; //getting the array
        const index= products.indexOf(product); //getting the index where the product is

        products[index].qty+=1; //incrementing value

        //updating the render
        this.setState({
            products: products
        })
    }

    handleDecreaseQuantity = (product)=> {
        const {products}= this.state; //getting the array
        const index= products.indexOf(product); //getting the index where the product is
        
        if(products[index].qty>0){
            products[index].qty-=1;

            this.setState({
                products: products
            })
        }
    }

    handleDeleteProduct =(id)=> {
        const {products} = this.state;

        const items = products.filter((item)=> item.id!==id);

        this.setState({
            products: items
        })
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
                            onIncreaseQuantity={this.handleIncreaseQuantity}
                            onDecreaseQuantity={this.handleDecreaseQuantity}
                            handleDeleteProduct={this.handleDeleteProduct}
                        /> //passint the value in product to the 'props' to be accessed by this component
                    )
                })}
            </div>
        )
    }
}

export default Cart;