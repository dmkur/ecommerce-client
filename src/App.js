import {CartPage, HomePage, LoginPage, ProductPage, ProductList, RegisterPage, OrdersPage} from "./pages";
import {Routes, Route} from "react-router-dom";
import {MainLayout} from "./layouts";
import {useSelector} from "react-redux";



const App = () => {
    const {currentUser} = useSelector(state => state.authReducer);

    return (
        <Routes>
            <Route path={'/'} element={<MainLayout/>}>
                <Route index element={<HomePage/>}/>
                <Route path={'products'} element={<ProductList/>}/>
                <Route path={'products/:category'} element={<ProductList/>}/>
                <Route path={'product/:id'} element={<ProductPage/>}/>
                <Route path={'cart'} element={<CartPage/>}/>
                <Route path={'login'} element={<LoginPage/>}/>
                <Route path={'register'} element={<RegisterPage/>}/>
                <Route path={'orders'} element={<OrdersPage/>}/>
            </Route>
        </Routes>
    )
};

export {App}

