import { useContext } from "react";
import { StoreContext } from "../context/StoreContext";

const Cart = () => {
  const { cart, removeFromCart, updateQty } = useContext(StoreContext);

  return (
    <div className="p-5">
      <h1 className="text-2xl font-bold mb-5">My Cart</h1>

      {cart.map((item) => (
        <div key={item.id} className="flex justify-between border p-3 mb-2">

          <p>{item.title}</p>

          <div>
            <button onClick={() => updateQty(item.id, "dec")}>-</button>
            {item.qty}
            <button onClick={() => updateQty(item.id, "inc")}>+</button>
          </div>

          <button onClick={() => removeFromCart(item.id)}>
            Remove
          </button>
        </div>
      ))}
    </div>
  );
};

export default Cart;
