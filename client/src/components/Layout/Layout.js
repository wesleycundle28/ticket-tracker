import "./Layout.css";
import { Outlet } from "react-router-dom";
import { Navbar, Footer, NavItem } from "../index";

export const Layout = () => {
  return (
    <main className="main-container">
      <Navbar>
        <NavItem to="/">Home</NavItem>
        <NavItem to="/admin/programs">Programs</NavItem>
        <NavItem to="/admin/employees">Employees</NavItem>
        <NavItem to="/admin/addprogram">Add Program</NavItem>
        <NavItem to="/admin/addticket">Add Ticket</NavItem>
        <NavItem to="/myprograms">My Programs</NavItem>
        <NavItem to="/mytickets">My Tickets</NavItem>
        <NavItem to="/logout">Logout</NavItem>
      </Navbar>
      <Outlet />
      <Footer />
    </main>
  );
};

export default Layout;
