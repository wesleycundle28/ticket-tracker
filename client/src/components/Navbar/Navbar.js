import "./Navbar.css";
import { Link } from "react-router-dom";

export const Navbar = ({ children }) => {
  return <div className="link-container">{children}</div>;
};
