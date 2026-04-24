// import React from 'react'
import './Products.css';
import '../index.css';
import React, { useContext, useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "./Firebase-config";
// import { CartProvider } from "cartState";
import { CartContext } from "../Context/cartState";


function Products() {

  const { addToCart } = useContext(CartContext);
  
  const [products, setProducts] = useState([]);

    useEffect(() => {
    const fetchProducts = async () => {
      const querySnapshot = await getDocs(collection(db, "products"));
      const productData = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setProducts(productData);
    };

    fetchProducts();
  }, [])

  

    return (
      <div>

        <div className="product-box">
          {products.map(product => (
            <div key={product.id} className="product-img">
              <img src={product.Image} alt={product.Name} />
              <h3>{product.Name}</h3>
              <p>{product.Description}</p>
              <p>{product.category}</p>
              <span>${product.Price}</span>
              <button onClick={() => addToCart(product)}>Add to Cart</button>
            </div>
            ))}
        </div>

      </div>
    );
}

export default Products;
