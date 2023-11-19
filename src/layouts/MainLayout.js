import { Outlet } from "react-router-dom";
import { CustomScroll, Footer, Newsletter, Announcement, Navbar } from "../components";

const MainLayout = () => {
  return (
    <>
      <CustomScroll />
      <Navbar/>
      <Announcement />
      <Outlet />
      <Newsletter />
      <Footer />
    </>
  );
};

export { MainLayout };
