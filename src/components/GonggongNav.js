import React from "react";
import { Link } from "react-router-dom";
import "./GonggongNav.scss";

function GonggongNav({ logoSrc, menu }) {
  return (
    <nav className="GonggongNav">
      <div className="GonggongNav__wrap">
        <Link className="GonggongNav__logo" to="/">
          <img src={logoSrc} alt="Logo" />
        </Link>
        <ul className="GonggongNav__menu-container">
          {menu.map(m => (
            <li key={m.name} className="GonggongNav__menu-item">
              <Link to={m.link}>{m.name}</Link>
              {m.subMenu && (
                <ul className="GonggongNav__submenu-container">
                  {m.subMenu.map(sm => (
                    <li key={sm.name} className="GonggongNav__submenu-item">
                      <Link to={sm.link}>{sm.name}</Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default GonggongNav;
