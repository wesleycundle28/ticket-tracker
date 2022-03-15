import "./Navbar.css";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div className="link-container">
      <Link to="/">Home</Link>
      <Link to="/admin/programs">Programs</Link>
      <Link to="/admin/employees">Employees</Link>
      <Link to="/admin/addprogram">Add Program</Link>
      <Link to="/admin/addticket">Add Ticket</Link>
      <Link to="/myprograms">My Programs</Link>
      <Link to="/mytickets">My Tickets</Link>
      <Link to="/logout">Logout</Link>
    </div>
  );
};
