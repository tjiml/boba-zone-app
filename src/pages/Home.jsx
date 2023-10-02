import React from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {

    const navigate = useNavigate();

    return (
        <>
        <div className="home-container">
            <div className="bz-logo-container">

            </div>
            <div className="homepage-banner-container">
                <h1 className="bz-title">Colorado Boba Zone</h1>
                    <p>Check Out Our Social Media!</p>
                    <div className="social-media">
                        <a href="https://www.instagram.com/coloradobobazone/" target="_blank">
                            <i className="instagram bi bi-instagram"></i>
                        </a>
                        <a href="https://www.facebook.com/Cobobazone" target="_blank">
                            <i className="facebook bi bi-facebook"></i>
                        </a>
                    </div>
                <p className="address">5005 S Kipling Pkwy, Littleton, CO</p>
                    <div className="hours">
                        <div className="dates">
                            <ul className="hours-list">
                                <li>mon</li>
                                <li>tues - sun</li>
                            </ul>
                        </div>
                        <div className="times">
                            <ul className="hours-list">
                                <li style={{color: 'red'}}>closed</li>
                                <li>11 am - 7 pm</li>
                            </ul>
                        </div>
                    </div>
                <button className="order-now-btn" onClick={() => navigate('/shop')}>order now</button>
            </div>
        </div>
        </>
    )
}