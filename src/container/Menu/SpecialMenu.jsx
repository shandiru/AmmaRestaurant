import React, { useState } from "react";
import { SubHeading } from "../../components";
import menuData from "../../constants/menuData";
import "./SpecialMenu.css";

const SpecialMenu = () => {
  const [activeCategory, setActiveCategory] = useState(menuData[0].category);

  const activeData = menuData.find(
    (item) => item.category === activeCategory
  );

  return (
    <section className="delicious-menu" id="menu">
      {/* HEADER */}
      <div className="menu-header">
        <SubHeading title="Special Selection" />
        <h1 className="menu-main-title">Delicious Menu</h1>
      </div>

      {/* CATEGORY NAV */}
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

      {/* MENU GRID */}
      <div className="menu-card-grid">
        {activeData?.items.map((item, index) => (
          <div className="menu-card" key={index}>
            <div className="menu-image-wrapper">
              <img src={item.image} alt={item.title} />
            </div>

            <div className="menu-card-footer">
              <h3>{item.title}</h3>
              <span className="menu-card-price">{item.price}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SpecialMenu;
