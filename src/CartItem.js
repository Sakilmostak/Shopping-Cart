import React from 'react';

class CartItem extends React.Component {

    render(){
        const {price, title, qty} = this.props.product; //props contain the value passed into this component when this is called
        const {product,onIncreaseQuantity,onDecreaseQuantity,handleDeleteProduct} = this.props;
        return (
            <div className='cart-item'>
                <div className='left-block'>
                    <img style={styles.image} src='' alt='item'/>

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
                            src='plus.png' 
                            onClick= {()=> onIncreaseQuantity(product)}
                        />
                        <img 
                            alt='decrese' 
                            className='action-icons' 
                            src='minus.png' 
                            onClick= {()=> onDecreaseQuantity(product)}
                        />
                        <img 
                            alt='delete' 
                            className='action-icons' 
                            src='bin.png' 
                            onClick={()=> handleDeleteProduct(product.id)}
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