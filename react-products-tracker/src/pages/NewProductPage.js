import NewProductForm from "../components/products/NewProductForm";
import { useHistory } from "react-router-dom";

const NewProductPage = () => {
  const history = useHistory();

  const addProductHandler = async (productData) => {
    await fetch("http://localhost:5000/api/products/add", {
      method: "POST",
      body: JSON.stringify(productData),
      headers: { "Content-Type": "application/json" },
    }).then(() => {
      history.push("/");
    });
  };

  return (
    <section>
      <h1>Add New Product</h1>
      <NewProductForm onAddProduct={addProductHandler} />
    </section>
  );
};

export default NewProductPage;
