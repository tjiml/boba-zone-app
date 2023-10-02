import React, { createContext, useState } from "react";

export const ContextApp = createContext(null);

export default function Context(props) {

    const [cartItem, setCartItem] = useState([]);

    function addToCart(drink) {
        const exItem = cartItem.find((item) => item.id === drink.id);

        if (exItem) {
            setCartItem((prev) => prev.map((item) => 
            item.id === drink.id ? {...item, count: item.count + 1} : item
            ))
        } else {
        setCartItem([...cartItem, {...drink, count: 1}]);
        }
    }

    const values = { addToCart, cartItem, setCartItem }

    return (
        <ContextApp.Provider value={values}>{props.children}</ContextApp.Provider>
    )
}