import React from 'react';

export default function Order({ cartItems }) {
    const calculateItemTotal = (item) => {
        return item.price * item.quantity;
    };
    console.log(cartItems);
    return (
        <>
            <div className='order-page lg:flex-row'>
                <div className='order-text'><b>Order List</b></div>
                <div className='order-overlay'>
                    <table className="order-table">
                        <thead>
                            <tr>
                                <th>Item</th>
                                <th>Quantity</th>
                                <th>Total Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}