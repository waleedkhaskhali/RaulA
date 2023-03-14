import React, { useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth, db, storage } from "../firebase-config";
import { collection, addDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import Navbar from "./Raul/Navbar";
import "./AddProduct.css";

const AddProducts = () => {
  const [user, setUser] = useState({});

  const [producttitle, setProductTitle] = useState("");
  const [producttype, setProductType] = useState("");
  const [keyspecs, setKeyspecs] = useState("");
  const [description, setDescription] = useState("");
  const [brand, setBrand] = useState("");
  const [customersupport, setCustomersupport] = useState("");
  const [price, setPrice] = useState("");
  const [warranty, setWarranty] = useState("");
  const [productimage, setProductImage] = useState("");

  const navigate = useNavigate();
  const [imageError, setImageError] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const [uploadError, setUploadError] = useState("");

  // onAuthStateChanged(auth, (currentUser) => {
  //   setUser(currentUser);
  // });

  const types = ["image/jpg", "image/jpeg", "image/png", "image/PNG"];

  const handleProductImg = (e) => {
    let selectedFile = e.target.files[0];
    // console.log(producttype.toUpperCase())

    if (selectedFile) {
      if (selectedFile && types.includes(selectedFile.type)) {
        setProductImage(selectedFile);
        setImageError("");
      } else {
        setProductImage(null);
        setImageError("please select a valid image file type(png or jpg)");
      }
    } else {
      setImageError("please select your file");
    }
  };

  const handleAddProduct = (e) => {
    e.preventDefault();
    const storageRef = ref(
      storage,
      `product-images${producttype.toUpperCase()}/${Date.now()}`
    );
    // console.log(storageRef._location.path)
    uploadBytes(storageRef, productimage)
      .then(() => {
        getDownloadURL(storageRef).then((url) => {
          addDoc(collection(db, `products-${producttype.toUpperCase()}`), {
            producttitle,
            producttype,
            description,
            brand,
            customersupport,
            price,
            warranty,
            prodimage: url,
            keyspecs: keyspecs,
            qty: 0,
          })
            .then(() => {
              setSuccessMsg("Product added successfully");
            })
            .catch((error) => {
              setUploadError(error.message);
            });
        });
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  // if (user) {
  //   console.log(user);
  // }

  return (
    <div>
      <Navbar />

      <div
        style={{ position: "absolute", top: "15vh" }}
        className="addprod-container"
      >
        <form onSubmit={handleAddProduct} className="addprod-form">
          <p>Add Data</p>
          {successMsg && (
            <>
              <div className="success-msg">{successMsg}</div>
            </>
          )}
          {uploadError && (
            <>
              <div className="error-msg">{uploadError}</div>
            </>
          )}

          <label>Product Title</label>
          <input
            onChange={(e) => setProductTitle(e.target.value)}
            type="text"
            placeholder="Product Title"
          />
          <label>Product Type</label>
          <input
            onChange={(e) => setProductType(e.target.value)}
            type="text"
            placeholder="Product Type"
          />
          <label>Brand Name </label>
          <input
            onChange={(e) => setBrand(e.target.value)}
            type="text"
            placeholder="Brand Name"
          />
          <label>warranty</label>
          <input
            onChange={(e) => setWarranty(e.target.value)}
            type="text"
            placeholder="Product Warranty"
          />
          <label>Image</label>
          <input onChange={handleProductImg} type="file" />
          {imageError && (
            <>
              <div className="error-msg">{imageError}</div>
            </>
          )}
          <label>Key Specifications</label>
          <textarea
            onChange={(e) => setKeyspecs(e.target.value)}
            placeholder="Enter some key specifications"
          ></textarea>

          <label>Description</label>
          <textarea
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Describe your Product in breif"
          ></textarea>
          <label>Price Without Tax -</label>
          <input
            onChange={(e) => setPrice(e.target.value)}
            type="text"
            placeholder="Enter Price without tax"
          />
          <label>Customer Support</label>
          <input
            onChange={(e) => setCustomersupport(e.target.value)}
            type="text"
            placeholder="Customer Support Email, Phone or address"
          />

          <button type="submit">Add</button>
        </form>
      </div>
    </div>
  );
};

export default AddProducts;
