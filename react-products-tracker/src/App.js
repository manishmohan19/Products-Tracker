import { Route, Switch } from "react-router-dom";
import Layout from "./components/layout/Layout";
import AllProductsPage from "./pages/AllProductsPage";
import NewProductPage from "./pages/NewProductPage";
import { ProductsProvider } from "./components/store/productContext";

function App() {
  return (
    <ProductsProvider>
      <Layout>
        <Switch>
          <Route path="/" exact={true}>
            <AllProductsPage />
          </Route>
          <Route path="/new-product">
            <NewProductPage />
          </Route>
        </Switch>
      </Layout>
    </ProductsProvider>
  );
}

export default App;
