import React from "react";
import { RiMovie2Line } from "react-icons/ri";
import { Link, NavLink } from "react-router-dom";
import { menu } from "../../assets/fake-data/menu";
import "./header.scss";

const Header = () => {
  return (
    <div className="header">
      <div className="header__logo">
        <Link to={"/"}>
          <RiMovie2Line className="icon" />
          <span>Exxmon</span>
        </Link>
      </div>
      <div className="header__title">Menu</div>
      <div className="header__content">
        {menu.map((item) => (
          <NavLink
            to={item.path}
            key={item.id}
            className="header__item"
            title={item.title}
          >
            {item.icon}
            <span>{item.title}</span>
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Header;
