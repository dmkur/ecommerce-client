import {useLocation} from "react-router-dom";

const OrdersPage = () => {
    const location = useLocation()
    console.log(location)
    return (
        <div>
            SuccessPage component
        </div>
    )
};

export {OrdersPage}