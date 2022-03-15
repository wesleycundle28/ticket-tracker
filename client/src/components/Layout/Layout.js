import "./Layout.css";
import { Outlet } from "react-router-dom";
import { Navbar, Footer } from "../index";

export const Layout = () => {
  return (
    <main className="main-container">
      <Navbar />
      <Outlet />
      <Footer />
    </main>
  );
};

export default Layout;
