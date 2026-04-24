import React from 'react'
import './SignIn.css';
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
    <div>
      <h2>Login / Signup</h2>
      <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
      <button onClick={loginWithEmail}>Login</button>
      <button onClick={signupWithEmail}>Signup</button>
      <button onClick={loginWithGoogle}>Sign in with Google</button>
    </div>
  );
  
}

export default SignIn;
