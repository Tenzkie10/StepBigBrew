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

    const [paymentMode, setPaymentMode] = useState('COD');

    const [errors, setErrors] = useState({
        phone_number: '',
        cart: ''
    });

    function handleInputChange(e) {
        const { name, value } = e.target;
        setValues({
            ...values,
            [name]: value
        });
    }

    function handlePaymentModeChange(e) {
        setPaymentMode(e.target.value);
    }

    function validatePhoneNumber(phoneNumber) {
        const phoneRegex = /^09\d{9}$/;
        return phoneRegex.test(phoneNumber);
    }

    function placeOrder(e) {
        e.preventDefault();

        if (cartItems.length === 0) {
            setErrors({ cart: '* Your cart is empty. Please add items to your cart before placing an order.' });
            return;
        }

        if (values.fullname.trim() === '' || values.phone_number.trim() === '' || values.address.trim() === '') {
            setErrors({ ...errors, fullname: '* Full Name, Phone Number, and Address are required.' });
            return;
        }

        if (!validatePhoneNumber(values.phone_number)) {
            setErrors({ phone_number: '* Phone number must start with "09" and contain 11 digits.' });
            return;
        }

        console.log('Submitting form with values:', values); 

        const orderData = {
            ...values,
            payment_mode: paymentMode
        };

        axios.post('http://localhost:5000/place_order', orderData)
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
                <div className='order-text'><b>CHECKOUT ORDER</b></div>
                <div className='order-overlay'>
                    <div className='userinfo-field'>
                        <Link to='/menu'>
                            <button className='go-backb'>Go Back</button>
                        </Link>
                        <label htmlFor='FullName'>Full Name:</label>
                        <input type='text' id='c_fname' name='fullname' maxLength={50} onChange={handleInputChange} value={values.fullname} />
                        <label htmlFor='PNum'>Phone Number (+63):</label>
                        <input type='tel' id='c_pnum' name='phone_number' maxLength={11} onChange={handleInputChange} value={values.phone_number} />
                        {errors.phone_number && <div className='error'>{errors.phone_number}</div>}
                        <label htmlFor='addre'>Address:</label>
                        <input type='text' id='c_add' name='address' maxLength={128} onChange={handleInputChange} value={values.address} />
                        {errors.fullname && <div className='error'>{errors.fullname}</div>}
                        <div className='payment-mode'>
                            <label htmlFor='paymentMode'>Select Payment Mode:</label>
                            <select id='paymentMode' value={paymentMode} onChange={handlePaymentModeChange}>
                                <option value='COD'>Cash on Delivery</option>
                                <option value='DebitCard'>Debit Card</option>
                                <option value='GCash'>GCash</option>
                            </select>
                        </div>
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
                    {errors.cart && <div className='error'>{errors.cart}</div>}
                    <div className='button-container'>
                        <button className='submit-order' onClick={placeOrder}><b>PLACE ORDER</b></button>
                    </div>
                </div>
            </div>
        </>
    );
}
