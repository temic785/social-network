import React from "react";
import n from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={n.nav}>
      <ul>
        <li>
          <a href="/profile" className={n.item}>
            Profile
          </a>
        </li>
        <li>
          <a href="/dialogs" className={n.item}>
            Messages
          </a>
        </li>
        <li>
          <a href="/news" className={n.item}>
            News
          </a>
        </li>
        <li>
          <a href="/music" className={n.item}>
            Music
          </a>
        </li>
        <li>
          <a href="/settings" className={n.item}>
            Settings
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
