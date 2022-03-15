import "./Layout.css";
import { Outlet } from "react-router-dom";
import { Navbar, NavItem, Footer, FooterItem } from "../index";

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
        <NavItem href="/logout">Logout</NavItem>
      </Navbar>
      <Outlet />
      <Footer>
        <FooterItem>copy</FooterItem>
      </Footer>
    </main>
  );
};

export default Layout;
