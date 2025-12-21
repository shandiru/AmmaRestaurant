import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Header.css';

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      <SubHeading title="Authentic South Indian Taste" />

      <h1 className="app__header-h1">
        Amma Kitchen Coventry
      </h1>

      <p className="p__opensans" style={{ margin: '2rem 0' }}>
        Experience the warmth of home-style cooking at Amma Kitchen Coventry.
        We serve freshly prepared, authentic South Indian dishes made with
        traditional recipes and love.
      </p>

      <button type="button" className="custom__button">
        View Our Menu
      </button>
    </div>

    <div className="app__wrapper_img">
      <img src={images.welcome} alt="Amma Kitchen Coventry" />
    </div>
  </div>
);

export default Header;
