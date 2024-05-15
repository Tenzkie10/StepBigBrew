import React, { useState } from 'react';
import { Link } from "react-router-dom";
import m_img1 from '../images/black_coffee.jpg';
import m_img2 from '../images/caf_latte.jpg';
import m_img3 from '../images/caffemocha.jpg';
import m_img4 from '../images/capc.jpg';
import m_img5 from '../images/car_mac.jpg';
import m_img6 from '../images/espreconpan.jpg';
import m_img7 from '../images/espremachi.jpg';
import m_img8 from '../images/esspresso.jpg';
import m_img9 from '../images/flatwhite.jpg';
import m_img10 from '../images/icecafam.jpg';
import m_img11 from '../images/whitechocmo.jpg';

export default function Menu() {
    const [cartItems, setCartItems] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [notification, setNotification] = useState('');

    const addToCart = (item) => {
        const existingItemIndex = cartItems.findIndex(cartItem => cartItem.id === item.id);
        if (existingItemIndex !== -1) {
            const newCartItems = [...cartItems];
            newCartItems[existingItemIndex].quantity += 1;
            newCartItems[existingItemIndex].price += item.price;
            setCartItems(newCartItems);
        } else {
            setCartItems([...cartItems, { ...item, quantity: 1 }]);
        }
        showNotification(`${item.name} added to cart`);
    };

    const incrementQuantity = (index) => {
        const newCartItems = [...cartItems];
        newCartItems[index].quantity++;
        setCartItems(newCartItems);
    };

    const removeFromCart = (index) => {
        const newCartItems = [...cartItems];
        const item = newCartItems[index];
        if (item.quantity > 1) {
            item.quantity--;
            item.price -= item.price / (item.quantity + 1); 
        } else {
            newCartItems.splice(index, 1); 
        }
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
        return cartItems.reduce((total, item) => total + item.price, 0);
    };

    const coffeeItems = [
        { id: 'bcoffee', name: 'Black Coffee', img: m_img1, price: 50 },
        { id: 'clatte', name: 'Caffe Latte', img: m_img2, price: 60 },
        { id: 'cmocha', name: 'Caffee Mocha', img: m_img3, price: 50 },
        { id: 'cchino', name: 'Capochino', img: m_img4, price: 55 },
        { id: 'cmacch', name: 'Caramel Macchiato', img: m_img5, price: 60 },
        { id: 'econpan', name: 'Espresso con panna', img: m_img6, price: 70 },
        { id: 'emacchi', name: 'Espresso Macchiato', img: m_img7, price: 55 },
        { id: 'espre', name: 'Espresso', img: m_img8, price: 60 },
        { id: 'fwhite', name: 'Flat White', img: m_img9, price: 80 },
        { id: 'icame', name: 'Iced Caffe Americano', img: m_img10, price: 75 },
        { id: 'wcmo', name: 'White Chocolate Mocha', img: m_img11, price: 70 },
    ];
    
    return (
        <>
            <div className="menu-page lg:flex-row">
                <div className="menu-text"><b>MENU</b></div>

                {/* Coffee */}
                <div className='coffee-container'>
                    {coffeeItems.map(item => (
                        <label key={item.id} className='coffee-label' onClick={() => addToCart(item)}>
                            <img src={item.img} alt={item.name}></img>
                            {item.name}
                            <div className='add-to-cart-overlay'>Add to Cart</div>
                        </label>
                    ))}
                </div>
            </div>

            {/* Add to Cart Modal */}
            <div className="cart-icon" onClick={toggleModal}>
                🛒
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
                                        <span>{item.name} - P{item.price}</span>
                                        <span> Qty: {item.quantity}</span>
                                    </div>
                                <button className='remove-button' onClick={() => removeFromCart(index)}>Remove</button>
                            </li>
                                
                            ))}
                        </ul>
                        )}
                        <div className='total'><hr></hr>Total: P{calculateTotal()}
                            <Link to={{ pathname: "/order", state: { cartItems: cartItems } }}>
                                <button className='place-order-button'>Place Order</button>
                            </Link>
                            
                        </div>
                    </div>
                </div>
            )}

            {/* Added Coffee Notification */}
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