import { Link } from "react-router-dom";
import "./FooterItem.css";

export const FooterItem = ({ href, children }) => {
  return (
    <li>
      <a href={href}>{children}</a>
    </li>
  );
};
