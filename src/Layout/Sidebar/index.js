import React, { useState } from "react";
import Logo from "../../assets/img/logo.png";
// import { Container } from './styles';

function Sidebar() {
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
    <div className="border-end bg-white" id="sidebar-wrapper">
      <div className="sidebar-heading border-bottom bg-light">
        <img src={Logo} alt="Logo" style={{ width: "200px" }} />
      </div>
      {menus.map((menu) => (
        <div key={menu.category}>
          <p className="ml-3 mb-0 mt-3">
            <b>{menu.category}</b>
          </p>
          {menu.items.map((item) => (
            <div className="list-group list-group-flush" key={item.label}>
              <a
                className="list-group-item list-group-item-action list-group-item-light p-3"
                href="#!"
              >
                <i className={`${item.icon} mr-2`}></i>
                {item.label}
              </a>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default Sidebar;
