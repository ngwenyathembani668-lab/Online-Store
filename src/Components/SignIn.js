import React from 'react'
import './SignIn.css';
import './Cart.css';
// import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth, googleProvider } from './Firebase-config';
import { useState } from 'react';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const SignIn = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const loginWithEmail = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/products"); // redirect after login
    } catch (error) {
      console.error(error.message);
    }
  };

  const signupWithEmail = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate("/products");
    } catch (error) {
      console.error(error.message);
    }
  };

  const loginWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      navigate("/products");
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <div className='Sign-in-page'>
      <div className='sign-box'>
        <h2>Login / Signup</h2>
        <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
        <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
        <button className='remove sign-btn' onClick={loginWithEmail}>Login</button>
        <button className='remove sign-btn' onClick={signupWithEmail}>Signup</button>
        <button className='sign-in-with-google' onClick={loginWithGoogle}> <svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M564 325.8C564 467.3 467.1 568 324 568C186.8 568 76 457.2 76 320C76 182.8 186.8 72 324 72C390.8 72 447 96.5 490.3 136.9L422.8 201.8C334.5 116.6 170.3 180.6 170.3 320C170.3 406.5 239.4 476.6 324 476.6C422.2 476.6 459 406.2 464.8 369.7L324 369.7L324 284.4L560.1 284.4C562.4 297.1 564 309.3 564 325.8z"/></svg> Sign in with Google</button>
        
      </div>
    </div>
  );

}

export default SignIn;
