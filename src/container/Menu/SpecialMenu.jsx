import React, { useState } from "react";
import { SubHeading } from "../../components";
import menuData from "../../constants/menuData";
import "./SpecialMenu.css";

const SpecialMenu = () => {
  const [activeCategory, setActiveCategory] = useState(menuData[0].category);

  const activeData = menuData.find(
    (item) => item.category === activeCategory
  );

  // Split items into two columns
  const leftItems =
    activeData?.items.slice(0, Math.ceil(activeData.items.length / 2)) || [];
  const rightItems =
    activeData?.items.slice(Math.ceil(activeData.items.length / 2)) || [];

  return (
    <section className="delicious-menu" id="menu">
      {/* HEADER */}
      <div className="menu-header">
        <SubHeading title="Special Selection" />
        <h1 className="menu-main-title">Delicious Menu</h1>
      </div>

      {/* CATEGORY NAVIGATION (TEXT STYLE) */}
      <div className="menu-category-nav">
        {menuData.map((cat) => (
          <span
            key={cat.category}
            className={`menu-category-item ${
              activeCategory === cat.category ? "active" : ""
            }`}
            onClick={() => setActiveCategory(cat.category)}
          >
            {cat.category}
          </span>
        ))}
      </div>

      {/* MENU CONTENT */}
      <div className="menu-columns">
        {/* LEFT COLUMN */}
        <div className="menu-column">
          {leftItems.map((item, index) => (
            <MenuRow key={index} item={item} />
          ))}
        </div>

        {/* CENTER DIVIDER */}
        <div className="menu-divider" />

        {/* RIGHT COLUMN */}
        <div className="menu-column">
          {rightItems.map((item, index) => (
            <MenuRow key={index} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

const MenuRow = ({ item }) => (
  <div className="menu-row">
    <img src={item.image} alt={item.title} className="menu-img" />

    <div className="menu-info">
      <div className="menu-title-row">
        <h3>{item.title}</h3>
        {item.badge && <span className="menu-badge">{item.badge}</span>}
      </div>
      <p className="menu-desc">{item.tags}</p>
    </div>

    <div className="menu-line" />

    <span className="menu-price">{item.price}</span>
  </div>
);

export default SpecialMenu;
