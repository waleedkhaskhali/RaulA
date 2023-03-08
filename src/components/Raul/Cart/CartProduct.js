import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../../contexts/AuthContext";

const CartProduct = (product) => {
  const [errorMsg, setErrorMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const { currentUser } = useAuth();
  let p = product.product;
  let id = currentUser?.uid;

  return (
    <div className="product-div">
      <div>
        <a href={`/product/${p.producttype}/${p.id}`}>
          <img src={p.prodimage} className="product-image"></img>
        </a>
      </div>
      <Link to={id ? "/checkout" : "/login"}>Checkout</Link>
      <div>
        <a href={`/product/${p.producttype}/${p.id}`}>
          <button className="product-title">{p.producttitle}</button>
        </a>
      </div>
      <div>
        <p className="price">${p.price}</p>
      </div>
    </div>
  );
};

export default CartProduct;
