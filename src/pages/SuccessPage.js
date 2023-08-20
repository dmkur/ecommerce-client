import {useLocation} from "react-router-dom";

const SuccessPage = () => {
    const location = useLocation()
    console.log(location)
    return (
        <div>
            SuccessPage component
        </div>
    )
};

export {SuccessPage}
