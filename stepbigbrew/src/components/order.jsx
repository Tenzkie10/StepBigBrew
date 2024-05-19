import React, { useContext, useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { CartContext } from './CartContext';
import axios from 'axios';

export default function Order() {
    const { cartItems } = useContext(CartContext);
    const navigate = useNavigate(); 

    const [values, setValues] = useState({
        fullname: '',
        phone_number: '',
        address: '',
        order_items: cartItems
    });

    function handleInputChange(e) {
        const { name, value } = e.target;
        setValues({
            ...values,
            [name]: value
        });
    }

    function placeOrder(e) {
        e.preventDefault();
        
        console.log('Submitting form with values:', values); 

        axios.post('http://localhost:5000/place_order', values)
            .then((res) => {
                console.log('Response from server:', res);
                navigate('/');
            })
            .catch((err) => {
                console.error('Error submitting form:', err); 
            });
    }

    const calculateItemTotal = (item) => {
        return item.price * item.quantity;
    };

    return (
        <>
            <div className='order-page lg:flex-row'>
                <div className='order-text'><b>REVIEW ORDER</b></div>
                <div className='order-overlay'>
                    <div className='userinfo-field'>
                        <Link to='/menu'>
                            <button className='go-backb' >Go Back</button>
                        </Link>
                        <label htmlFor='FullName'>Full Name:</label>
                        <input type='text' id='c_fname' name='fullname' maxLength={50} required onChange={handleInputChange} value={values.fullname} />
                        <label htmlFor='PNum'>Phone Number (+63):</label>
                        <input type='tel' id='c_pnum' name='phone_number' maxLength={11} required onChange={handleInputChange} value={values.phone_number} />
                        <label htmlFor='addre'>Address:</label>
                        <input type='text' id='c_add' name='address' maxLength={128} required onChange={handleInputChange} value={values.address} />
                        <label htmlFor='COrder'>Order:</label>
                    </div>
                    {cartItems.length === 0 ? (
                        <h1><b>No items in the cart.</b></h1>
                    ) : (
                        <ul>
                            {cartItems.map((item, index) => (
                                <li key={index} className='cart-item'>
                                    <img src={item.img} alt={item.name} className='cart-item-img' />
                                    <div>
                                        <span>{item.name} - ₱{calculateItemTotal(item)}</span>
                                        <span> Qty: {item.quantity}</span>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    )}
                    <div className='total'>
                        <hr />Total: ₱{cartItems.reduce((total, item) => total + calculateItemTotal(item), 0)}
                    </div>
                    <div className='button-container'>
                        <button className='submit-order' onClick={placeOrder}><b>PLACE ORDER</b></button>
                    </div>
                </div>
            </div>
        </>
    );
}
