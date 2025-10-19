import React, { useState, useEffect } from "react";
import api from "../api";

const CartPage = () => {
  const [items, setItems] = useState([]);
  const [form, setForm] = useState({ itemName: "", quantity: 1 });
  const [msg, setMsg] = useState("");

  const token = localStorage.getItem("token");

  const loadCart = async () => {
    try {
      const res = await api.get("/cart/view", {
        headers: { Authorization: token },
      });
      setItems(res.data);
    } catch (err) {
      setMsg("Please login again");
    }
  };

  const addItem = async (e) => {
    e.preventDefault();
    try {
      await api.post("/cart/add", form, {
        headers: { Authorization: token },
      });
      setMsg("Item added!");
      loadCart();
    } catch (err) {
      setMsg("Error adding item");
    }
  };

  useEffect(() => {
    loadCart();
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Cart</h2>
      <form onSubmit={addItem}>
        <input
          name="itemName"
          placeholder="Item Name"
          onChange={(e) => setForm({ ...form, itemName: e.target.value })}
        />
        <input
          name="quantity"
          type="number"
          placeholder="Quantity"
          onChange={(e) => setForm({ ...form, quantity: e.target.value })}
        />
        <button type="submit">Add to Cart</button>
      </form>
      <p>{msg}</p>

      <h3>Your Items</h3>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.item_name} × {item.quantity}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CartPage;
