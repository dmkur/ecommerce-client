import {useLocation} from "react-router-dom";
import {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import {orderService} from "../services"
import {useNavigate} from "react-router";

const OrdersPage = () => {
    const location = useLocation()
    const data = location.state.data;
    const cart = location.state.cart;
    const {currentUser} = useSelector((state) => state.authReducer);
    const [orderId, setOrderId] = useState(null);
    const navigate = useNavigate()

    useEffect(() => {
        const createOrder = async () => {
            try {
                const {data: res} = await orderService.createProducts({
                    userId: currentUser._id,
                    products: cart.map((item) => ({
                        productId: item._id,
                        quantity: item.quantity
                    })),
                    amount: data.amount,
                    address: data.billing_details.address
                })
                setOrderId(res._id)
            } catch {
            }
        };
        data && createOrder();
    }, [cart, data, currentUser]);

    const handleClick = () => {
        navigate('/')
    };

    return (
        <div
            style={{
                height: "100vh",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
            }}
        >
            {orderId
                ? `Order has been created successfully. Your order number is ${orderId}`
                : `Successfull. Your order is being prepared...`}
            <button style={{padding: 10, marginTop: 20}} onClick={handleClick}>Go to Homepage</button>
        </div>
    )
};

export {OrdersPage}
