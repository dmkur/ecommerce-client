import {Outlet} from "react-router-dom";
import { CustomScroll } from "../components";

const MainLayout = () => {
    return (
        <div>
            <CustomScroll/>
            <Outlet/>
        </div>
    )
};

export {MainLayout}
