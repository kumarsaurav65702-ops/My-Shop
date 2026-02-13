import { useContext } from "react";
import { StoreContext } from "../context/StoreContext";

const Cart = () => {
  const { cart, removeFromCart, updateQty } = useContext(StoreContext);

  return (
    <div className="p-5">
      <h1 className="text-2xl font-bold mb-5">My Cart</h1>

      {cart.map((item) => (
        <div key={item.id} className="flex justify-between border p-3 mb-2">
<img src={item.images[0]} alt={item.title} className="w-60 h-60 object-cover rounded-md" />
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
