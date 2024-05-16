import React, { useContext } from 'react';
import { CartContext } from './CartContext';

export default function Order() {
    const { cartItems } = useContext(CartContext);

    const calculateItemTotal = (item) => {
        return item.price * item.quantity;
    };

    return (
        <>
            <div className='order-page lg:flex-row'>
                <div className='order-text'><b>REVIEW ORDER</b></div>
                <div className='order-overlay'>
                    <div className='userinfo-field'>
                        <label htmlFor='FullName'>Full Name:</label>
                        <input type='text' id='c_fname' name='FullName' maxLength={50} required />
                        <label htmlFor='PNum'>Phone#:</label>
                        <input type='tel' id='c_pnum' name='Phone' maxLength={11} required />
                        <label htmlFor='addre'>Address:</label>
                        <input type='text' id='c_add' name='Address' maxLength={128} required />
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
                        <button className='submit-order'><b>PLACE ORDER</b></button>
                    </div>
                </div>
            </div>
        </>
    );
}