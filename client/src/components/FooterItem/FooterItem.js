import { Link } from "react-router-dom";
import "./FooterItem.css";

export const FooterItem = ({ to, children }) => {
  return (
    <li>
      <Link to={to}>{children}</Link>
    </li>
  );
};
