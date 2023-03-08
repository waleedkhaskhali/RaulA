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
  let id = currentUser.uid;
  const addToCart = () => {
    if (currentUser) {
      console.log(id);
      addDoc(collection(db, `cart-${id}`), {
        product,
        quantity: 1,
      })
        .then(() => {
          setSuccessMsg("Product added to cart");
          console.log(successMsg);
        })
        .catch((error) => {
          setErrorMsg(error.message);
          console.log(errorMsg);
        });
    } else {
      setErrorMsg("You need to login first");
      console.log(errorMsg);
    }
  };

  return (
    <div className="product-div">
      <div>
        <a href={`/product/${p.producttype}/${p.id}`}>
          <img src={p.prodimage} className="product-image"></img>
        </a>
      </div>
      <div>
        <button className="addtocart" onClick={addToCart}>
          Add To Cart
        </button>
      </div>
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

export default ProductContainer;
