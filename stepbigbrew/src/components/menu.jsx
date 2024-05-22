import React, { useContext, useState } from 'react';
import { Link } from "react-router-dom";
import { Products } from "./products";
import { CartContext } from './CartContext';

export default function Menu() {
    const { cartItems, setCartItems } = useContext(CartContext);
    const [showModal, setShowModal] = useState(false);
    const [notification, setNotification] = useState('');

    const addToCart = (item) => {
        const existingItemIndex = cartItems.findIndex(cartItem => cartItem.id === item.id);
        if (existingItemIndex !== -1) {
            const newCartItems = [...cartItems];
            newCartItems[existingItemIndex].quantity += 1;
            setCartItems(newCartItems);
        } else {
            setCartItems([...cartItems, { ...item, quantity: 1 }]);
        }
        showNotification(`${item.name} added to cart`);
    };

    const removeFromCart = (index) => {
        const newCartItems = [...cartItems];
        const item = newCartItems[index];
        if (item.quantity > 1) {
            item.quantity--;
        } else {
            newCartItems.splice(index, 1);
        }
        setCartItems(newCartItems);
    };

    const addFromCart = (index) => {
        const newCartItems = [...cartItems];
        const item = newCartItems[index];
        item.quantity++; 
        setCartItems(newCartItems);
    };
    

    const toggleModal = () => {
        setShowModal(!showModal);
    };

    const showNotification = (message) => {
        setNotification(message);
        setTimeout(() => {
            setNotification('');
        }, 3000);
    };

    const calculateTotal = () => {
        return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    };

    const totalItemsInCart = cartItems.reduce((total, item) => total + item.quantity, 0);

    return (
        <>
            <div className="menu-page lg:flex-row">
                <div className="menu-text"><b>MENU</b></div>

                <div className='coffee-container'>
                    {Products.map(item => (
                        <label key={item.id} className='coffee-label' onClick={() => addToCart(item)}>
                            <img src={item.img} alt={item.name}></img>
                            {item.name}
                            <div className='add-to-cart-overlay'>Add to Cart <br></br>₱{item.price}</div>
                        </label>
                    ))}
                </div>
            </div>

            <div className="cart-icon" onClick={toggleModal}>
                {totalItemsInCart > 0 && <span className="cart-counter">{totalItemsInCart}</span>}🛒 
            </div>
            {showModal && (
                <div className='modal' onClick={toggleModal}>
                    <div className='modal-content' onClick={(e) => e.stopPropagation()}>
                        <div className='modal-header'>
                            <h1><b>My Cart</b></h1>
                            <button className='close-button' onClick={toggleModal}>&times;</button>
                        </div>
                        <br></br>
                        {cartItems.length === 0 ? (
                            <h1><b>No items in the cart.</b></h1>
                        ) : (
                            <ul>
                                {cartItems.map((item, index) => (
                                    <li key={index} className='cart-item'>
                                        <img src={item.img} alt={item.name} className='cart-item-img' />
                                        <div>
                                            <span>{item.name} - ₱{item.price * item.quantity}</span>
                                            <span> Qty: {item.quantity}</span>
                                        </div>
                                        <button className='add-button' onClick={() => addFromCart(index)}>+</button>
                                        <button className='remove-button' onClick={() => removeFromCart(index)}>-</button>
                                    </li>
                                ))}
                            </ul>
                        )}
                        <div className='total'><hr></hr>Total: ₱{calculateTotal()}
                            <Link to="/order">
                                <button className='place-order-button'>Check Out Order</button>
                            </Link>
                        </div>
                    </div>
                </div>
            )}

            {notification && (
                <div className={`notification ${notification ? 'show' : ''}`}>
                    {notification}
                </div>
            )}
            <footer className='footer-sbb bg-neutral text-white text-center lg:text-center'>
                <p>© 2024 Step BigBrew</p>
            </footer>
        </>
    );
}