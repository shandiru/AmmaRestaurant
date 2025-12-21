import React, { useState } from 'react';
import { SubHeading, MenuItem } from '../../components';
import menuData from '../../constants/menuData';
import { images } from '../../constants';
import './SpecialMenu.css';

const SpecialMenu = () => {
  const [leftCategory, setLeftCategory] = useState('Tiffin');
  const [rightCategory, setRightCategory] = useState('Dosa Veg');

  const leftData = menuData.find((c) => c.category === leftCategory);
  const rightData = menuData.find((c) => c.category === rightCategory);

  const handleCategoryChange = (category) => {
    // Deselect if already selected
    if (leftCategory === category) {
      setLeftCategory('');
      return;
    }
    if (rightCategory === category) {
      setRightCategory('');
      return;
    }

    // If one slot is empty, fill it
    if (!leftCategory) {
      setLeftCategory(category);
    } else if (!rightCategory) {
      setRightCategory(category);
    } else {
      // Both slots are full, replace the left category by default
      setLeftCategory(rightCategory); // move right to left
      setRightCategory(category);     // set new category to right
    }
  };

  return (
    <div className="app__specialMenu flex__center section__padding" id="menu">
      <div className="app__specialMenu-title">
        <SubHeading title="Menu that fits your palatte" />
        <h1 className="headtext__cormorant">Today's Special</h1>
      </div>

      {/* Category selector */}
      <div className="category-selector">
  {menuData.map((cat) => (
    <label className="category-checkbox" key={cat.category}>
      <input
        type="checkbox"
        checked={leftCategory === cat.category || rightCategory === cat.category}
        onChange={() => handleCategoryChange(cat.category)}
      />
      <span className="checkmark"></span>
      {cat.category}
    </label>
  ))}
</div>


      <div className="app__specialMenu-menu">
        {/* Left Category */}
        {leftData && (
          <div className="app__specialMenu-menu_wine flex__center">
            <p className="app__specialMenu-menu_heading">{leftData.category}</p>
            <div className="app__specialMenu_menu_items">
              {leftData.items.map((item, index) => (
                <MenuItem
                  key={item.title + index}
                  title={item.title}
                  price={item.price}
                  tags={item.tags}
                />
              ))}
            </div>
          </div>
        )}

        {/* Menu Image */}
        <div className="app__specialMenu-menu_img">
          <img src={images.menu} alt="menu__img" />
        </div>

        {/* Right Category */}
        {rightData && (
          <div className="app__specialMenu-menu_cocktails flex__center">
            <p className="app__specialMenu-menu_heading">{rightData.category}</p>
            <div className="app__specialMenu_menu_items">
              {rightData.items.map((item, index) => (
                <MenuItem
                  key={item.title + index}
                  title={item.title}
                  price={item.price}
                  tags={item.tags}
                />
              ))}
            </div>
          </div>
        )}
      </div>

      <div style={{ marginTop: 15 }}>
        <button type="button" className="custom__button">View More</button>
      </div>
    </div>
  );
};

export default SpecialMenu;
