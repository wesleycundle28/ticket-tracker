import "./Layout.css";
import { Outlet } from "react-router-dom";
import { Navbar, NavItem, Footer, FooterItem } from "../index";
import { ToastContainer } from "react-toastify";

export const Layout = () => {
  return (
    <main className="main-container">
      <Navbar>
        <NavItem href="/">Home</NavItem>
        <NavItem href="/admin/programs">Programs</NavItem>
        <NavItem href="/admin/employees">Employees</NavItem>
        <NavItem href="/admin/addprogram">Add Program</NavItem>
        <NavItem href="/admin/addticket">Add Ticket</NavItem>
        <NavItem href="/myprograms">My Programs</NavItem>
        <NavItem href="/mytickets">My Tickets</NavItem>
        <NavItem href="/login">Login/Register</NavItem>
        <NavItem href="/logout">Logout</NavItem>
      </Navbar>
      <div className="outlet-footer-container">
        <Outlet />
        <Footer className="footer-container">
          <FooterItem>footer</FooterItem>
        </Footer>
      </div>
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
