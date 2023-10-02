import React, { useContext, useEffect, useState } from "react"; 
import data from "../data.json";
import { ContextApp } from "../context/Context";

export default function Shop() {

    let menu = Object.getOwnPropertyNames(data);

    const [selected, setSelected] = useState(0);
    const [selectedDrink, setSelectedDrink] = useState("classic tea");

    const { addToCart, cartItem } = useContext(ContextApp);

    useEffect(() => {
        data[selectedDrink].forEach((item) => {
            item.id = item.id + item.name[0] + item.name[1];
        })
    })

    function handleClick(item, key) {
        setSelected(key);
        setSelectedDrink(item);
    }

    function added() {
        alert('Item added to your cart!');
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
            <div className="menu-wrapper">
                <div className="hidden-space">empty</div>
                <div className="menu-title">Boba Zone Menu</div>
                <div className="menu-list-wrapper">
                    <div className="menu-list text-center">
                        {menu.map((item, key) => (
                            <div className={selected === key ? "item-container active" : "item-container"}
                                onClick={() => handleClick(item)}
                                key={key}>
                                    <p>{item}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="drink-wrapper">
                    <div className="tea-wrapper">
                        <div className="tea-container">
                            {data[selectedDrink].map((drink) => (
                                <div className="tea-image-container" key={drink.id}>
                                <img src={drink.image} className="drink-image"/>
                                <h5 className="drink-name">{drink.name}</h5>
                                <p className="drink-price">${drink.price}</p>
                                <p>Dairy: {drink.dairy ? <i className="check bi bi-check-lg"></i> : <i className="x bi bi-x-lg"></i>}</p>
                                <p>Caffeine: {drink.caffeine ? <i className="check bi bi-check-lg"></i> : <i className="x bi bi-x-lg"></i>}</p>
                                <button className="add-order-btn"
                                    onClick={() => {addToCart(drink);added()}}>
                                        Add To Order
                                </button>
                                <button className="added-btn">Added</button>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {backToTop && (
                    <button className="btt-button" onClick={scrollUp}>Back To Top <i className="bi bi-arrow-up-short"></i></button>
                )}
            </div>
        </>
    )
}