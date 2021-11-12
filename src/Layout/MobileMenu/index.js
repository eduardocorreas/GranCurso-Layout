import React, { useState } from "react";

// import { Container } from './styles';

function MobileMenu() {
  const [menus] = useState([
    {
      category: "",
      items: [
        {
          icon: "fal fa-home-alt",
          label: "Dashboard",
        },
        {
          icon: "fal fa-circle",
          label: "eCommerce",
        },
      ],
    },
    {
      category: "APPS",
      items: [
        {
          icon: "fal fa-envelope",
          label: "E-mail",
        },
        {
          icon: "fal fa-comment-alt",
          label: "Chat",
        },
        {
          icon: "fal fa-check-square",
          label: "Todo",
        },
        {
          icon: "fal fa-calendar",
          label: "Calendar",
        },
      ],
    },
    {
      category: "UI Elements",
      items: [
        {
          icon: "fal fa-th-large",
          label: "Grid",
        },
        {
          icon: "fal fa-tint",
          label: "Colors",
        },
        {
          icon: "fal fa-browser",
          label: "Card",
        },
        {
          icon: "fal fa-table",
          label: "Table",
        },
        {
          icon: "fal fa-archive",
          label: "Components",
        },
      ],
    },
    {
      category: "Forms",
      items: [
        {
          icon: "fal fa-copy",
          label: "Form Element",
        },
        {
          icon: "fal fa-columns",
          label: "Form Layout",
        },
        {
          icon: "fal fa-file-alt",
          label: "Form Wizard",
        },
        {
          icon: "fal fa-check-circle",
          label: "Form Validation",
        },
      ],
    },
  ]);
  return (
    <ul className="navbar-nav ms-auto mt-2 mt-lg-0">
      {menus.map((menu) => (
        <div key={menu.category}>
          {menu.category === "" ? (
            <>
              {menu.items.map((item) => (
                <li className="nav-item active" key={item.label}>
                  <a className="nav-link" href="#!">
                    <i className={`${item.icon} mr-2`}></i>
                    {item.label}
                  </a>
                </li>
              ))}
            </>
          ) : (
            <div>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  id="navbarDropdown"
                  href="/"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  {menu.category}
                </a>
                <div
                  className="dropdown-menu dropdown-menu-end"
                  aria-labelledby="navbarDropdown"
                >
                  {menu.items.map((item) => (
                    <a className="dropdown-item" key={item.label} href="#!">
                      <i className={`${item.icon} mr-2`}></i>
                      {item.label}
                    </a>
                  ))}
                </div>
              </li>
            </div>
          )}
        </div>
      ))}
    </ul>
  );
}

export default MobileMenu;
