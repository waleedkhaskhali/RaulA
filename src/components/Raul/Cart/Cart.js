import React, { useEffect, useState } from "react";
import { useAuth } from "../../../contexts/AuthContext";
import { db } from "../../../firebase-config";
import { collection, getDocs } from "firebase/firestore";
import Navbar from "../Navbar";
import CartProduct from "./CartProduct";

const Cart = () => {
  const [cartProduct, setCartProduct] = useState([]);
  const [errorMsg, setErrorMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const { currentUser } = useAuth();

  let id = currentUser?.uid;

  useEffect(() => {
    const getCartProducts = () => {
      const productsArray = [];
      const path = `cart-${id}`;

      getDocs(collection(db, path))
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            productsArray.push({ ...doc.data(), id: doc.id });
          });
          setCartProduct(productsArray);
        })
        .catch((error) => {
          setErrorMsg(error.message);
        });
    };

    getCartProducts();
  }, []);

  return (
    <div>
      <Navbar />
      <h1>cart</h1>
      {cartProduct
        ? cartProduct.map((item) => (
            <CartProduct
              key={item.id}
              product={item.product.product}
            ></CartProduct>
          ))
        : "No cart Items"}
    </div>
  );
};

export default Cart;
