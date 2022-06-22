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

    decreaseQuantity = () =>{
        this.setState((prevState)=>{
            if(prevState.qty>0){
                return {
                    qty: prevState.qty-1
                }
            }
        })
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
                            src='https://cdn-icons.flaticon.com/png/512/1665/premium/1665629.png?token=exp=1655912641~hmac=60edf7261d67b6c49ee46ffa1503229c' 
                            onClick= {this.increseQuantity}
                        />
                        <img 
                            alt='decrese' 
                            className='action-icons' 
                            src='https://cdn-icons.flaticon.com/png/512/1665/premium/1665663.png?token=exp=1655912896~hmac=a89908822a6df8eb55765999cc29453b' 
                            onClick= {this.decreaseQuantity}
                        />
                        <img 
                            alt='delete' 
                            className='action-icons' 
                            src='https://cdn-icons.flaticon.com/png/512/484/premium/484662.png?token=exp=1655912922~hmac=a1e78b90d025bced0e07ebedaa00bc89' 
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