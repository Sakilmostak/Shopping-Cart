import React from 'react';

class CartItem extends React.Component {
    render(){
        return (
            <div className='cart-item'>
                <div className='left-block'>
                    <img style={styles.image} a/>

                </div>
                <div className='right-block'>
                    <div style={ {fontSize: 25} }>Phone</div>
                    <div style={ {color: 'grey'} }>Rs. 500</div>
                    <div style={ {color: 'grey'} }>Qty: 1</div>
                    <div className='cart-item-actions'>
                        {/* Button */}
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