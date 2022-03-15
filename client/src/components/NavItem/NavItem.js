import { Link } from "react-router-dom";
import "./NavItem.css";

export const NavItem = ({ to, children }) => {
  return (
    <li>
      <Link to={to}>{children}</Link>
    </li>
  );
};
