import React, { useEffect, useState } from "react";
import { useAuth } from "../../../contexts/AuthContext";
import { db } from "../../../firebase-config";
import { collection, getDocs } from "firebase/firestore";
import Navbar from "../Navbar";
import CartProduct from "./CartProduct";
import { Link } from "react-router-dom";

const Cart = () => {
  const [product, setProduct] = useState([]);
  const [localCart, setLocalCart] = useState();
  const [cartProduct, setCartProduct] = useState([]);
  const [errorMsg, setErrorMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const { currentUser } = useAuth();

  let id = currentUser?.uid;

  useEffect(() => {
    const getProducts = () => {
      const productsArray = [];
      const path = `products-FLORAL`;

      getDocs(collection(db, path))
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            productsArray.push({ ...doc.data(), id: doc.id });
          });
          setProduct(productsArray);
        })
        .catch((error) => {
          setErrorMsg(error.message);
        });
    };

    getProducts();
  }, []);

  useEffect(() => {
    const getLocalCart = () => {
      if (!currentUser) {
        let productArray = [];
        product.map((item) => {
          const storageItem = localStorage.getItem("product" + item.id);
          if (storageItem) {
            productArray.push(JSON.parse(storageItem));
            setLocalCart(...productArray);
          }
        });
        setLocalCart(productArray);
      }
    };
    getLocalCart();
  }, [product]);

  useEffect(() => {
    const getCartProducts = async () => {
      if (currentUser) {
        const productsArray = localCart?.length > 0 ? { ...localCart } : [];
        const path = `cart-${id}`;

        await getDocs(collection(db, path))
          .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
              productsArray.push({
                ...doc.data(),
                id: doc.id,
              });
            });
            setCartProduct(productsArray);
          })
          .catch((error) => {
            setErrorMsg(error.message);
          });
      }
    };

    getCartProducts();
  }, []);

  return (
    <div>
      <Navbar />
      <h1 className="cart-title">Shopping Cart</h1>
      {localCart?.length > 0 && !currentUser ? (
        localCart.map((item) => (
          <div>
            <CartProduct key={item.id} product={item}></CartProduct>
          </div>
        ))
      ) : cartProduct && currentUser ? (
        <div>
          {cartProduct.map((item) => (
            <CartProduct
              key={item.id}
              product={item.product.product}
            ></CartProduct>
          ))}
          <Link to={id ? "/checkout" : "/login"}>Checkout</Link>
        </div>
      ) : (
        "Cart is empty"
      )}
    </div>
  );
};

export default Cart;
