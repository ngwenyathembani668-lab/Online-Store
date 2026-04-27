import { useContext } from "react";
import { CartContext } from "../Context/cartState";
import './Cart.css'

function Cart() {
  const { cart, removeFromCart, totalPrice } = useContext(CartContext);

  return (
    <div className="cart-cont">
      <div className="cart-box">
        <h1>Your Cart</h1>
        {cart.length === 0 ? (
          <p>No items in cart</p>
        ) : (
          <ul>
            {cart.map(item => (
              <li className="item-li" key={item.id}>
                {item.Name} - ${item.Price}
                <button className="remove" onClick={() => removeFromCart(item.id)}>Remove</button>
              </li>
            ))}
          </ul>
        )}
        <h2>Total: ${totalPrice.toFixed(2)}</h2>
      </div>
    </div>

  );
}


export default Cart;