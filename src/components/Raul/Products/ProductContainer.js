import React, { useEffect, useState } from "react";
import { addDoc, collection, getDocs } from "firebase/firestore";
import { useAuth } from "../../../contexts/AuthContext";
import { Link } from "react-router-dom";
import { db } from "../../../firebase-config";
import "./ProductContainer.css";

const ProductContainer = (product) => {
  const [localCart, setLocalCart] = useState([]);
  const localstorag = { ...localStorage };

  const [errorMsg, setErrorMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const { currentUser } = useAuth();
  let id = currentUser?.uid;
  let p = product.product;

  const addToCart = () => {
    if (!currentUser && !id) {
      const productArray = localCart;
      const localProductExist = productArray.find((item) => item.id === p.id);

      if (localProductExist) {
        let updatedQty = p.qty++;
        localStorage.setItem(
          `product${localProductExist?.id}`,
          JSON.stringify(p)
        );
      } else {
        localStorage.setItem(`product${p.id}`, JSON.stringify(p));
        productArray.push(p);
        setLocalCart(productArray);
      }
    }

    if (currentUser) {
      addDoc(collection(db, `cart-${id}`), {
        product,
      })
        .then(() => {
          setSuccessMsg("Product added to cart");
          console.log(successMsg);
        })
        .catch((error) => {
          setErrorMsg(error.message);
          console.log(errorMsg);
        });
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
