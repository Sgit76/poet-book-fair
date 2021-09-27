import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Writerdtails from '../Writerdetails/Writerdtails';
import './Writer.css';
const Writer = () => {
    const [writers , setWriters] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(() => {
        fetch('./writersdata.JSON')
        .then(res => res.json())
        .then(data => setWriters(data));
    } , [])

    const handleAddToCart = (writerinfo) =>{
        const newCart = [...cart , writerinfo];
        setCart(newCart);
    }
    return (
        <div className="main-container">
            <div className="product-container">
                
                {
                    writers.map(writerinfo => <Writerdtails
                        key={writerinfo.key}
                        writerinfo={writerinfo}
                        handleAddToCart={handleAddToCart}
                        ></Writerdtails>) 
                }
                </div>
                <div className="cart-container">
                    <Cart cart={cart}></Cart>
                </div>
        </div>
    );
};

export default Writer;