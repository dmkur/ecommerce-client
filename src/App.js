import {
  ShopingBagPage,
  HomePage,
  LoginPage,
  SingleProductPage,
  ProductListPage,
  RegisterPage,
  OrdersPage,
} from "./pages";
import { Routes, Route } from "react-router-dom";
import { MainLayout } from "./layouts";

const App = () => {
  return (
    <Routes>
      <Route path={"/"} element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path={"products"} element={<ProductListPage />}/>         
        <Route path={'products/:category'} element={<ProductListPage/>}/>
        <Route path={'products/:category/:id'} element={<SingleProductPage/>}/>
        <Route path={"shopingBag"} element={<ShopingBagPage />} />
        <Route path={"login"} element={<LoginPage />} />
        <Route path={"register"} element={<RegisterPage />} />
        <Route path={"orders"} element={<OrdersPage />} />
      </Route>
    </Routes>
  );
};

export { App };
