import React from "react";
import H from "./Header.module.css";

const Header = () => {
  return (
    <header className={H.header}>
      <img
        alt="logo"
        src="https://upload.wikimedia.org/wikipedia/ru/2/28/%D0%A1%D0%B0%D0%BA%D0%B0%D1%80%D1%8C%D1%8F%D1%81%D0%BF%D0%BE%D1%80_%28%D0%BB%D0%BE%D0%B3%D0%BE%29.png"
      />
    </header>
  );
};

export default Header;
