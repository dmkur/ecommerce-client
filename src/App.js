import {Cart, Home, Login, Product, ProductList, Register} from "./pages";
import {Routes, Route} from "react-router-dom";
import {MainLayout} from "./layouts";


const App = () => {

    return (
        <Routes>
            <Route path={'/'} element={<MainLayout/>}>
                <Route index element={<Home/>}/>
                <Route path={'products'} element={<ProductList/>}/>
                <Route path={'products/:category'} element={<ProductList/>}/>
                <Route path={'product/:id'} element={<Product/>}/>
                <Route path={'cart'} element={<Cart/>}/>
                <Route path={'login'} element={<Login/>}/>
                <Route path={'register'} element={<Register/>}/>
            </Route>
        </Routes>


    )
};

export {App}

