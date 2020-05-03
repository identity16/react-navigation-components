import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./GonggongNav.scss";

function GonggongNav({ logoSrc, menu }) {
  const [isExpanded, setExpanded] = useState(false);
  const toggleMenu = () => setExpanded(!isExpanded);

  return (
    <>
      <nav className="GonggongNav">
        <div className="wrap">
          <Link className="GonggongNav__logo" to="/">
            <img src={logoSrc} alt="Logo" />
          </Link>
          <button
            className="GonggongNav__mobile-menu-btn"
            style={{
              backgroundImage: `url(${
                isExpanded ? "/btn-close.png" : "/btn-menu.png"
              })`
            }}
            onClick={toggleMenu}
          />
          <ul
            className={`GonggongNav__menu-container ${
              isExpanded ? "expand" : "collapse"
            }`}
          >
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
      <div
        className="overlay"
        style={{ display: isExpanded ? "block" : "none" }}
        onClick={toggleMenu}
      />
    </>
  );
}

export default GonggongNav;
