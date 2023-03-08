import React, { useEffect, useState } from "react";
import { useAuth } from "../../../contexts/AuthContext";
import { db } from "../../../firebase-config";
import { collection, getDocs } from "firebase/firestore";
import ProductContainer from "./ProductContainer";
import Navbar from "../Navbar";
import "./ProductContainer.css";

const Floral = () => {
  const [product, setProduct] = useState([]);
  const [errorMsg, setErrorMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const { currentUser } = useAuth();

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

  return (
    <div>
      <Navbar />
      <div>
        <h1>Floral</h1>
      </div>
      <div className="product-container">
        {product.map((item) => (
          <ProductContainer key={item.id} product={item} />
        ))}
      </div>
    </div>
  );
};

export default Floral;
