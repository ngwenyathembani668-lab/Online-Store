import React from "react";
import { useEffect, useState } from "react";
import './Header.css';
import { Link } from 'react-router-dom';
// import Products from './Products';
import { useContext } from "react";
import { CartContext } from "../Context/cartState";
import { auth } from "./Firebase-config";
import { signOut, onAuthStateChanged } from "firebase/auth";

function Header() {

    const { cart } = useContext(CartContext);

    const [user, setUser] = useState(null);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });
        return () => unsubscribe();
    }, []);

    const logout = async () => {
        await signOut(auth);
    };

    return (

        <nav>

            <div className='logo'>
                <h1>Urban Threads.</h1>
            </div>

            <div className="links">

                <div className="search-bar">
                    <input type="text" placeholder="Search" />
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#fff">
                            <path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z" />
                        </svg>
                    </span>
                </div>

                <div className='nav-links'>
                    <Link className="link" to='/'>Home</Link>
                    <Link className="link" to='/Products'>
                        Products
                    </Link>
                </div>


            </div>

            <div className='user-options'>



                {user ? (

                    <button className="Sign-in-button log-out" onClick={logout}>
                        Log Out <span>({user.email})</span>
                    </button>


                ) : (
                    <Link to={'/SignIn'}>
                        <button className="Sign-in-button">
                            <span>Sign In</span>
                        </button>
                    </Link>

                )}

                <Link to={"/yourCart"}>
                    <button className="Sign-in-button">
                        <svg xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M223.5-103.5Q200-127 200-160t23.5-56.5Q247-240 280-240t56.5 23.5Q360-193 360-160t-23.5 56.5Q313-80 280-80t-56.5-23.5Zm400 0Q600-127 600-160t23.5-56.5Q647-240 680-240t56.5 23.5Q760-193 760-160t-23.5 56.5Q713-80 680-80t-56.5-23.5ZM246-720l96 200h280l110-200H246Zm-38-80h590q23 0 35 20.5t1 41.5L692-482q-11 20-29.5 31T622-440H324l-44 80h480v80H280q-45 0-68-39.5t-2-78.5l54-98-144-304H40v-80h130l38 80Zm134 280h280-280Z" /></svg>
                        <span className="cart-span"> {cart.length}</span>
                    </button>
                </Link>



            </div>

        </nav>

    );
}

export default Header;
