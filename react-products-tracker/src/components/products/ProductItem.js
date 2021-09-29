import { useState } from "react";
import Card from "../ui/Card";
import classes from "./ProductItem.module.css";
import DeleteModal from "./DeleteModal";
import UpdateModal from "./UpdateModal";
import { useContext } from "react";
import { ProductContext } from "../store/productContext";

const ProductItem = ({ id, name, image, price }) => {
  const [deleteModalIsOpen, setDeleteModalIsOpen] = useState(false);
  const [updateModalIsOpen, setUpdateModalIsOpen] = useState(false);
  const [loadedProducts, setLoadedProducts] = useContext(ProductContext);

  const deleteHandler = () => {
    setDeleteModalIsOpen(true);
  };

  const updateHandler = () => {
    setUpdateModalIsOpen(true);
  };

  const closeModalHandler = () => {
    setDeleteModalIsOpen(false);
    setUpdateModalIsOpen(false);
  };

  const deleteItem = async () => {
    await fetch(`http://localhost:5000/api/products/${id}`, {
      method: "DELETE",
    }).then(() => {
      setDeleteModalIsOpen(false);
      setLoadedProducts(loadedProducts.filter((product) => id !== product.id));
    });
  };

  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={image} alt={name} />
        </div>
        <div className={classes.content}>
          <h3>{name}</h3>
          <p>{price}</p>
        </div>
        <div className={classes.actions}>
          <button className={classes.btn} onClick={deleteHandler}>
            DELETE
          </button>
          <button className={classes.btn} onClick={updateHandler}>
            UPDATE
          </button>

          {deleteModalIsOpen ? (
            <DeleteModal onCancel={closeModalHandler} onConfirm={deleteItem} />
          ) : null}
          {updateModalIsOpen && (
            <UpdateModal
              onCancel={closeModalHandler}
              onConfirm={updateHandler}
              id={id}
              name={name}
              image={image}
              price={price}
            />
          )}
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
