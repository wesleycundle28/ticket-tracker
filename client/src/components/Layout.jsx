import { Outlet } from "react-router-dom";
import { Navbar, NavItem, Footer, FooterItem } from "./index";
import { ToastContainer } from "react-toastify";

export const Layout = () => {
  return (
    <main className="main-container">
      <Outlet />
      <ToastContainer
        position="top-left"
        autoClose={3000}
        hideProgressBar={true}
        newestOnTop={true}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        closeButton=""
      />
    </main>
  );
};

export default Layout;
