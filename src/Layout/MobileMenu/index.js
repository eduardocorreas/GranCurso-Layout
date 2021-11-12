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
    <ul class="navbar-nav ms-auto mt-2 mt-lg-0">
      {menus.map((menu) => (
        <>
          {menu.category == "" ? (
            <>
              {menu.items.map((item) => (
                <li class="nav-item active">
                  <a class="nav-link" href="#!">
                    <i className={`${item.icon} mr-2`}></i>
                    {item.label}
                  </a>
                </li>
              ))}
            </>
          ) : (
            <>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
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
                  class="dropdown-menu dropdown-menu-end"
                  aria-labelledby="navbarDropdown"
                >
                  {menu.items.map((item) => (
                    <a class="dropdown-item" href="#!">
                      <i className={`${item.icon} mr-2`}></i>
                      {item.label}
                    </a>
                  ))}
                </div>
              </li>
            </>
          )}
        </>
      ))}

      <li class="nav-item">
        <a class="nav-link" href="#!">
          Link
        </a>
      </li>
      <li class="nav-item dropdown">
        <a
          class="nav-link dropdown-toggle"
          id="navbarDropdown"
          href="#"
          role="button"
          data-bs-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          Dropdown
        </a>
        <div
          class="dropdown-menu dropdown-menu-end"
          aria-labelledby="navbarDropdown"
        >
          <a class="dropdown-item" href="#!">
            Action
          </a>
          <a class="dropdown-item" href="#!">
            Another action
          </a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#!">
            Something else here
          </a>
        </div>
      </li>
    </ul>
  );
}

export default MobileMenu;
