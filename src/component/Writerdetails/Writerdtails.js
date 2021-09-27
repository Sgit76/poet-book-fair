import React from 'react';

const Writerdtails = (props) => {
    console.log(props.writerinfo);
    const {name, born, dide, occupation , img , book , price, quantity} = props.writerinfo;
    return (
        <div>
            <img style={{width: '200px' , height: '200px'}} src={img} alt="" />
            <h3>Name: {name}</h3>
            <h3>Born: {born}</h3>
            <h3>Dide: {dide}</h3>
            <h3>Occupation: {occupation}</h3>
            <h3>Book: {book}</h3>
            <h3>Price: {price}</h3>
            <h3>Quantity: {quantity}</h3>

        </div>
    );
};

export default Writerdtails;