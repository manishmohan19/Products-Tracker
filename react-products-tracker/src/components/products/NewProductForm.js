import { useState } from "react";
import Card from "../ui/Card";
import classes from "./NewProductForm.module.css";

const NewProductForm = ({ onAddProduct }) => {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");

  const submitHandler = (event) => {
    event.preventDefault();

    onAddProduct({ name, image, price });
    setName("");
    setImage("");
    setPrice("");
  };

  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="title">Product Name:</label>
          <input
            type="text"
            required
            id="title"
            value={name}
            placeholder="Add Name"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className={classes.control}>
          <label htmlFor="image">Image url:</label>
          <input
            type="url"
            required
            id="image"
            value={image}
            placeholder="Add Image"
            onChange={(e) => setImage(e.target.value)}
          />
        </div>
        <div className={classes.control}>
          <label htmlFor="price">Price:</label>
          <input
            type="text"
            required
            id="price"
            value={price}
            placeholder="Add Price"
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>

        <div className={classes.actions}>
          <button>Add Product</button>
        </div>
      </form>
    </Card>
  );
};

export default NewProductForm;
