import React, { useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { useAuth } from "../../../contexts/AuthContext";
import { Link } from "react-router-dom";
import { db } from "../../../firebase-config";
import "./ProductContainer.css";

const ProductContainer = (product) => {
  const [errorMsg, setErrorMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const { currentUser } = useAuth();
  let p = product.product;

  const addToCart = () => {
    if (currentUser) {
      console.log(currentUser[0].uid);
      addDoc(collection(db, `cart-${currentUser[0].uid}`), {
        product,
        quantity: 1,
      })
        .then(() => {
          setSuccessMsg("Product added to cart");
        })
        .catch((error) => {
          setErrorMsg(error.message);
        });
    } else {
      setErrorMsg("You need to login first");
    }
  };

  return (
    <div className="product-container">
      <a href={`/product/${p.producttype}/${p.id}`}>
        <img src={p.prodimage} className="product-image"></img>
      </a>
      <button className="addtocart" onClick={addToCart}>
        Add To Cart
      </button>

      <a href={`/product/${p.producttype}/${p.id}`}>
        <button className="product-title">{p.producttitle}</button>
      </a>
      <p className="price">${p.price}</p>
    </div>
  );
};

export default ProductContainer;
