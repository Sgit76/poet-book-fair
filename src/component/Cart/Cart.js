import React from 'react';
import './Cart.css'
const Cart = (props) => {
    console.log(props);
    const {cart} = props;
    let total = 0;
    for(const writerinfo of cart){
        total = total + writerinfo.price;
    }
    
    return (
        <div className="cart-container">
            <h2>Details</h2>
            <h5>Total Booked: {cart.length}</h5>
            <p>Total Price: {total}</p>
            <p>Book Name: {cart[0]?.book}</p>
        </div>
    );
};

export default Cart;