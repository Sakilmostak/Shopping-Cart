import React from 'react';

class CartItem extends React.Component {
    constructor(){
        super();
        this.state= {
            price: 500,
            title: 'Phone',
            qty: 2,
            img: ''
        }
    }

    increseQuantity = () =>{    //arrow function bind this to the function 
        //setState() shallow merges the update with the state object and re-render the app

        // method 1
        // this.setState({
        //     qty: this.state.qty+1
        // });

        // method 2
        this.setState((prevState)=> {
            return {
                qty: prevState.qty+1
            }
        });
    }

    render(){
        const {price, title, qty} = this.state; //destructuring the object

        return (
            <div className='cart-item'>
                <div className='left-block'>
                    <img style={styles.image} src='' alt='item' a/>

                </div>
                <div className='right-block'>
                    <div style={ {fontSize: 25} }>{title}</div>
                    <div style={ {color: 'grey'} }>Rs. {price}</div>
                    <div style={ {color: 'grey'} }>Qty: {qty}</div>
                    <div className='cart-item-actions'>
                        {/* Button */}
                        <img 
                            alt='increase' 
                            className='action-icons' 
                            src='https://cdn-icons.flaticon.com/png/512/1665/premium/1665629.png?token=exp=1655871294~hmac=52fca6ac41f5ef714188f89e802fb41c' 
                            onClick= {this.increseQuantity}
                        />
                        <img 
                            alt='decrese' 
                            className='action-icons' 
                            src='https://cdn-icons.flaticon.com/png/512/1665/premium/1665663.png?token=exp=1655871375~hmac=7c0f0cbc318f83a5aeffc74542529008' 
                        />
                        <img 
                            alt='delete' 
                            className='action-icons' 
                            src='https://cdn-icons.flaticon.com/png/512/484/premium/484662.png?token=exp=1655871403~hmac=eb9af31bc56a0f7f37ef3aebf30e09e0' 
                        />
                    </div>

                </div>


            </div>
        )
    }
}

const styles = {
    image: {
        height: 100,
        width: 100,
        borderRadius: 4,
        background: '#ccc'
    }
}

export default CartItem;