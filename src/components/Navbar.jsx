import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {

    const [click, setClick] = useState();

    function handleClick() {
        setClick(!click);
    }

    function closeMenu() {
        setClick(false);
    }
  

    return (
        <>

        <div className="nav-container">
            <div className="menu-icon" onClick={handleClick}>
                <i className="bi bi-list"></i>
            </div>
            <ul className={click ? "nav-menu active" : "nav-menu"}>
                <li className="close-nav list-inline-item" onClick={closeMenu}><i className="bi bi-x"></i></li>
                <Link to="/" className="links" onClick={closeMenu}><li className="list-inline-item">HOME</li></Link>
                <Link to="/shop" className="links" onClick={closeMenu}><li className="list-inline-item">ORDER</li></Link>
                <Link to="/cart" className="links" onClick={closeMenu}><li className="list-inline-item">CART</li></Link>
            </ul>
            <div className="shop-title">
                <h1 className="title-text"><span className="littleton-text">LITTLETON'S</span> FIRST BUBBLE TEA SHOP</h1>
            </div>
        </div>
        </>
    )
}