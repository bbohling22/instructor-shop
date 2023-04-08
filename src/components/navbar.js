import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";

export const Navbar = () => {
    return (
        <div>
            <nav class="navbar is-dark" role="navigation" aria-label="main navigation">
                <div class="navbar-brand">
                    <a class="navbar-item" href="https://bulma.io">
                    <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28"/>
                    </a>

                    <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    </a>
                </div>

                <div id="navbarBasicExample" class="navbar-menu has-background-dark">
                    <div class="navbar-start">
                        <Link to="/" class="navbar-item has-text-white ">Shop</Link>


                    
                    </div>

                    <div class="navbar-end">
                    <div class="navbar-item">
                        <Link to="/cart" class="navbar-item">
                            <ShoppingCart size={40} color="white"/>
                        </Link>
                        <div class="buttons">
                        <a class="button is-primary">
                            <strong><Link to="/signup">Sign up</Link></strong>
                        </a>
                        <a class="button is-light">
                            <Link to="/login">Login</Link>
                        </a>
                        </div>
                    </div>
                    </div>
                </div>
            </nav>
        </div>
    )
};