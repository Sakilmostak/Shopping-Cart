import React from 'react';


const Navbar = (props)=>{
    
    return (
        <div style={styles.nav}>
                <img style={styles.cartIcon} src='shopping-cart.png' alt='cart-icon'/>
                <span style={styles.cartCount}>{props.count()}</span>
        </div>
    )
}

const styles = {
    nav: {
        height: 70,
        background: '#4767b2',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end'
    },
    cartIcon: {
        height: 32
    },
    cartCount: {
        background: 'yellow',
        borderRadius: '50%',
        minWidth: '20px',
        minHeight: '20px',
        marginRight: '20px',
        textAlign: 'center',
        position: 'relative',
        bottom: '10px',
        right: '5px'

    }
}

export default Navbar;