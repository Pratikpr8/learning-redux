import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Navbar() {

  const items = useSelector((state)=> state.cart)

  return (
    <div className="navbar">
      <span className="logo">Online Store</span>
      <div>
        <Link className="navLink" to="/">
          Home
        </Link>
        <Link className="navLink" to="/cart">
          Cart
        </Link>
        <span className="cartCount">Cart Item: {items.length}</span>
      </div>
    </div>
  );
}
