import {Cart, Home, Login, Product, Register} from "./pages";
import {Routes, Route} from "react-router-dom";


const App = () => {

    return (
        <Routes>
            <Route path={'/'} element={<Home/>}/>
            <Route path={'/login'} element={<Login/>}/>
            <Route path={'/register'} element={<Register/>}/>
            <Route path={'/products'} element={<Product/>}>
                <Route path={':category'} element={<Product/>}/>
                <Route path={':id'} element={<Product/>}/>
            </Route>
            <Route path={'/cart'} element={<Cart/>}/>

        </Routes>


    )
};

export {App}

