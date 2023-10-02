import React, { useContext, useEffect, useState } from "react";
import { ContextApp } from "../context/Context";
import { useNavigate } from "react-router-dom";

export default function Cart() {

    const { cartItem, addToCart, setCartItem } = useContext(ContextApp);
    const [totalAmount, setTotalAmount] = useState(0);

    useEffect(() => {
        let total = 0;

        cartItem.forEach((item) => {
            total += Number((item.price * item.count) + 0.50);
        });

        setTotalAmount(total);
    }, [cartItem])


    const nagivate = useNavigate();

    function removeFromCart(id) {
        const updateCart = cartItem.map((item) => {
            if (item.id === id && item.count > 1) {
                return {
                    ...item, count: item.count - 1,
                };
            } else if (item.id === id && item.count <= 1) {
                return null;
            }
            return item;
        });

        const filteredCart = updateCart.filter((item) => item !== null);
    
        setCartItem(filteredCart);
    }

    const [backToTop, setBackToTop] = useState(false);

    useEffect(() => {
            window.addEventListener("scroll", () => {
                if (window.scrollY > 500) {
                    setBackToTop(true);
                } else {
                    setBackToTop(false);
                }
            })
        }, [])

    function scrollUp() {
            window.scrollTo({
                top: 0,
                behavior: "smooth",
            })
        }

    return (
        <>
        <div className="cart-container text-center">
            <h1 className="hidden-space">empty</h1>
           <h1 className="cart-title">Your Cart Items</h1>

           {cartItem.length === 0 ? "Your Cart Is Empty!" : (
                <div className="cart-wrapper">
                {cartItem.map((item) => (
                     <div className="cart" key={item.id}>
                     <img src={item.image} className="drink-image-cart"/>
                        <div className="details text-start">
                         <p className="drink-name">{item.name}</p>
                         <p className="drink-price">${item.price}</p>
                         <p>Dairy: {item.dairy ? <i className="check bi bi-check-lg"></i> : <i className="x bi bi-x-lg"></i>}</p>
                         <p>Caffeine: {item.caffeine ? <i className="check bi bi-check-lg"></i> : <i className="x bi bi-x-lg"></i>}</p>
                         <select className="toppings">
                            <option value="no-topping">No Topping</option>
                            <option value="tapioca">Tapioca</option>
                            <option value="popping-boba">Popping Boba</option>
                            <option value="lychee-jelly">Lychee Jelly</option>
                            <option value="crystal">Crystal</option>
                         </select>
                         <br />
                         <select className="sugar-level">
                            <option value="0-sugar">0% Sugar</option>
                            <option value="25-sugar">25% Sugar</option>
                            <option value="50-sugar">50% Sugar</option>
                            <option value="75-sugar">75% Sugar</option>
                            <option value="100-sugar">100% Sugar</option>
                         </select>
                           <div className="buttons">
                             <i onClick={() => removeFromCart(item.id)} 
                                className="bi bi-dash-circle" 
                                id="remove-from-cart-btn">
                             </i>
                                <p className="item-count">{item.count}</p>
                             <i onClick={() => addToCart(item)} 
                                className="bi bi-plus-circle"
                                id="add-to-cart-btn">
                             </i>
                          </div>
                        </div>
                     </div>
                 ))}
                 <p className="total-price">Total Price: ${totalAmount}</p>
                </div>
           )} 

           <div className="more-buttons">
            {cartItem.length !== 0 && (
                <button className="check-out-btn">Check Out</button>
            )} 
            <button className="continue-shopping-btn" onClick={() => nagivate("/shop")}>Continue Ordering</button>
           </div>

           {backToTop && (
                    <button className="btt-button" onClick={scrollUp}>Back To Top <i className="bi bi-arrow-up-short"></i></button>
                )}

        </div>
        </>
    )
}