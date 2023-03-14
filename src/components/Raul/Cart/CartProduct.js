import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../../contexts/AuthContext";
import "./Cart.css";

const CartProduct = (product) => {
  const [errorMsg, setErrorMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const { currentUser } = useAuth();
  let p = product.product;
  let id = currentUser?.uid;

  return (
    <div className="cart-page">
      <div className="cart-container">
        <div>
          <a href={`/product/${p.producttype}/${p.id}`}>
            <img src={p.prodimage} className="cartproduct-image"></img>
          </a>
        </div>
        <div>
          <a
            href={`/product/${p.producttype}/${p.id}`}
            style={{ textDecoration: "none" }}
          >
            <a className="cart-title">{p.producttitle}</a>
          </a>
        </div>
        <div>
          <p>Quantity: {p.qty}</p>
          <button>Update Cart</button>
        </div>
        <div>
          <p className="cart-price">${p.price}</p>
        </div>
      </div>
    </div>
  );
};

export default CartProduct;
