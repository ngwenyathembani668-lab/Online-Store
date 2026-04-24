import { useContext } from "react";
import { CartContext } from "../Context/cartState";

function Cart() {
  const { cart, removeFromCart, totalPrice } = useContext(CartContext);

  return (
    <div>
      <h1>Your Cart</h1>
      {cart.length === 0 ? (
        <p>No items in cart</p>
      ) : (
        <ul>
          {cart.map(item => (
            <li key={item.id}>
              {item.Name} - ${item.Price}
              <button onClick={() => removeFromCart(item.id)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
      <h2>Total: ${totalPrice.toFixed(2)}</h2>
    </div>
  );
}


export default Cart;