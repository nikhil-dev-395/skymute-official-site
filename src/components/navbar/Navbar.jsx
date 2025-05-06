import React from "react";
import { Link } from "react-router-dom";
import { theme } from "../../utils/colors";
// const icon = "../../assets/icons.svg";
const Navbar = () => {
  const headerStyle = {
    backgroundColor: theme?.colors?.primary,
  };

  const navTextStyle = {
    color: theme?.colors?.secondary,
  };

  return (
    <header
      className="w-full max-h-20 border-b border-white py-5"
      style={headerStyle}
    >
      <nav
        className="w-full max-w-[1100px] mx-auto flex justify-between  text-2xl font-semibold capitalize"
        style={navTextStyle}
      >
        <Link to={"/"} className="flex items-center gap-2">
          <img src="/images/icon.svg" width={45} alt="icon" />
          <span>skymute</span>
        </Link>
        {
          <ul className="flex items-center gap-20">
            <li>
              <Link to="/about">about</Link>
            </li>
            <li>
              <Link to="/privacy-policy">Privacy policy</Link>
            </li>
            <li>
              <Link to="/terms-and-condition">T&Cs</Link>
            </li>
          </ul>
        }
      </nav>
    </header>
  );
};

export default Navbar;
