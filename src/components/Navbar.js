import React, { useState, useEffect } from 'react';
import logoLight from '../images/logo-light.png';
import logoDark from '../images/logo-dark.png';


const Navbar = () => {

    const [state, setState] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
    }, []);

    const handleScroll = () => {
        if (window.scrollY > 120) {
            setState(true);
        } else {
            setState(false);
        }
    }

    return (
        <div className={`navbar ${state === true ? "whiteBg" : "transparent"}`}>
            <div className="container">
                <div className="navbar__content">
                    <div className="navbar__left">
                        <img src={state ? logoDark : logoLight} alt="logo" />
                    </div>
                    <ul className="navbar__right">
                        <li>
                            <a href="">
                                Home
                            </a>
                        </li>
                        <li>
                            <a href="">
                                Showcases
                            </a>
                        </li>
                        <li>
                            <a href="">
                                About
                            </a>
                        </li>
                        <li>
                            <a href="">
                                Portfolio
                            </a>
                        </li>
                        <li>
                            <a href="">
                                Contact
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar
