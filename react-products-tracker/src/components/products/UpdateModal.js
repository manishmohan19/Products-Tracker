import { useState, useContext } from "react";
import classes from "./UpdateModal.module.css";
import { ProductContext } from "../store/productContext";

const UpdateModal = ({ onCancel, onConfirm, id, name, image, price }) => {
  const [confirmUpdate, setConfirmUpdate] = useState(false);
  const [updtdName, setUpdtdName] = useState(name);
  const [updtdImage, setUpdtdImage] = useState(image);
  const [updtdPrice, setUpdtdPrice] = useState(price);
  const [loadedProducts, setLoadedProducts] = useContext(ProductContext);

  const cancelHandler = () => {
    onCancel();
  };
  const confirmHandler = () => {
    onConfirm();
    setConfirmUpdate(true);
  };

  const onUpdateProduct = async (e) => {
    e.preventDefault();
    updateProduct({
      id,
      name: updtdName,
      image: updtdImage,
      price: updtdPrice,
    });
    setUpdtdName(name);
    setUpdtdImage(image);
    setUpdtdPrice(price);
  };

  const updateState = (updatedProduct) => {
    const index = loadedProducts.findIndex(
      (product) => product.id === updatedProduct.id
    );
    const products = [...loadedProducts];
    products[index] = updatedProduct;
    setLoadedProducts(products);
  };

  const updateProduct = async (productData) => {
    const res = await fetch(`http://localhost:5000/api/products/${id}`, {
      method: "PUT",
      body: JSON.stringify(productData),
      headers: { "Content-Type": "application/json" },
    });
    const updatedProduct = await res.json();
    updateState(updatedProduct);
    cancelHandler();
  };

  return (
    <>
      {confirmUpdate ? (
        <div className={classes.modal}>
          <form onSubmit={onUpdateProduct}>
            <div className={classes.control}>
              <label htmlFor="title">Product Name</label>
              <input
                type="text"
                id="title"
                value={updtdName}
                onChange={(e) => setUpdtdName(e.target.value)}
              />
            </div>
            <div className={classes.control}>
              <label htmlFor="image">image url</label>
              <input
                type="url"
                id="image"
                value={updtdImage}
                onChange={(e) => setUpdtdImage(e.target.value)}
              />
            </div>
            <div className={classes.control}>
              <label htmlFor="price">Price</label>
              <input
                type="text"
                id="price"
                value={updtdPrice}
                onChange={(e) => setUpdtdPrice(e.target.value)}
              />
            </div>
            <div className={classes.actions}>
              <button>Update Product</button>
            </div>
          </form>
          <div className={classes.actions}>
            <button onClick={cancelHandler}>Cancel</button>
          </div>
        </div>
      ) : (
        <div className={classes.modal}>
          <p>Update the Product?</p>
          <button className={classes.btn} onClick={cancelHandler}>
            Cancel
          </button>
          <button className={classes.btn} onClick={confirmHandler}>
            Confirm
          </button>
        </div>
      )}
    </>
  );
};

export default UpdateModal;
