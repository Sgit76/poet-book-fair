import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus} from '@fortawesome/free-solid-svg-icons';
import './Writerdetails.css';
const Writerdtails = (props) => {
    // console.log(props);
    const {name, born, dide, occupation , img , book , price, quantity} = props.writerinfo;
    return (
        <div className="writer-dtails">
            <img style={{width: '200px' , height: '200px'}} src={img} alt="" />
            <h3>{name}</h3>
            <p><b>Born:</b> {born}</p>
            <p><b>Dide:</b> {dide}</p>
            <p><b>Occupation:</b> {occupation}</p>
            <p><b>Book:</b> {book}</p>
            <p><b>Price:</b> {price}</p>
            <p><b>Quantity:</b> {quantity}</p>
            <button 
                onClick={() => props.handleAddToCart(props.writerinfo)}
                className="btn-reguler"><FontAwesomeIcon icon={faCartPlus} /> Booking Books</button>
            <br/>
            <span>
                <i class="fab fa-facebook-square social"></i>
                <i class="fab fa-twitter-square social"></i>
                <i class="fab fa-google-plus-g social"></i>
                <i class="fab fa-linkedin social"></i>
            </span>
        </div>
    );
};

export default Writerdtails;