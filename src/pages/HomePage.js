import {Announcement, Categories, Footer, Navbar, Newsletter, Products, Slider} from "../components";


const HomePage = () => {
    return (
        <>
            <Announcement/>
            <Navbar/>
            <Slider/>
            <Categories/>
            <Products/>
            <Newsletter/>
            <Footer/>
        </>
    )
};

export {HomePage}
