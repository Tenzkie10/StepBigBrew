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
                    <label htmlFor='FName'>FullName:</label>
                            <input type='text' id='FName' name='FullName' maxLength={50} required></input>

                                <label htmlFor='PNum'>Phone#:</label>
                                    <input type='text' id='PNum' name='Phone' maxLength={11} required></input>

                                    <label htmlFor='addre'>Address:</label>
                                    <input type='text' id='addre' name='Address' maxLength={128} required></input>
                                       

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
                        <hr></hr>Total: ₱{cartItems.reduce((total, item) => total + calculateItemTotal(item), 0)}
                    </div>
                </div>
            </div>
        </>
    );
}