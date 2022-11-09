import React from "react";
import n from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={n.nav}>
      <ul>
        <li>
          <a href="#" className={n.item}>
            Profile
          </a>
        </li>
        <li>
          <a href="#" className={n.item}>
            Messages
          </a>
        </li>
        <li>
          <a href="#" className={n.item}>
            News
          </a>
        </li>
        <li>
          <a href="#" className={n.item}>
            Music
          </a>
        </li>
        <li>
          <a href="#" className={n.item}>
            Settings
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
