import React, { useState } from "react";
import api from "../api";

const SignupPage = () => {
  const [form, setForm] = useState({ username: "", password: "" });
  const [msg, setMsg] = useState("");

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await api.post("/auth/signup", form);
      setMsg(res.data.message);
    } catch (err) {
      setMsg(err.response?.data?.message || "Signup failed");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Signup</h2>
      <form onSubmit={handleSubmit}>
        <input name="username" placeholder="Username" onChange={handleChange} /><br /><br />
        <input name="password" type="password" placeholder="Password" onChange={handleChange} /><br /><br />
        <button type="submit">Signup</button>
      </form>
      <p>{msg}</p>
    </div>
  );
};

export default SignupPage;
