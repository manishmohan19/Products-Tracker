import ProductList from "../components/products/ProductList";
import { useState, useEffect, useContext } from "react";
import { ProductContext } from "../components/store/productContext";

const AllProductsPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedProducts, setLoadedProducts] = useContext(ProductContext);

  useEffect(() => {
    setIsLoading(true);
    fetch("http://localhost:5000/api/products")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setIsLoading(false);
        setLoadedProducts(data);
      });
  }, [setLoadedProducts]);

  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }

  return (
    <section>
      <h1>All Products</h1>
      <ProductList products={loadedProducts} />
    </section>
  );
};

export default AllProductsPage;
