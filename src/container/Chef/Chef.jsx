import React, { useEffect, useState } from "react";
import { SubHeading } from "../../components";
import { images } from "../../constants";
import "./Chef.css";

const chefSlides = [
  {
    sub: "Chef's word",
    title: "What we believe in",
    text1:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit auctor sit.",
    text2:
      "Auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget sit.",
    name: "Kevin Luo",
    role: "Chef & Founder",
  },
  {
    sub: "Our Philosophy",
    title: "Cooking with passion",
    text1:
      "Cooking is an art, but all art requires knowing something about technique.",
    text2:
      "Congue iaculis integer curabitur semper sit nunc.",
    name: "Maria Gonzales",
    role: "Executive Chef",
  },
  {
    sub: "Our Promise",
    title: "Quality & Taste",
    text1:
      "Good food is the foundation of genuine happiness.",
    text2:
      "Nulla scelerisque scelerisque congue ac consequat.",
    name: "John Smith",
    role: "Master Chef",
  },
];

const Chef = () => {
  const [index, setIndex] = useState(0);
  const [animate, setAnimate] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimate(false);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % chefSlides.length);
        setAnimate(true);
      }, 200);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const slide = chefSlides[index];

  return (
    <div className="app__bg app__wrapper section__padding">
      {/* LEFT IMAGE (STATIC) */}
      <div className="app__wrapper_img app__wrapper_img-reverse">
        <img src={images.chef} alt="chef" />
      </div>

      {/* RIGHT CONTENT (DYNAMIC) */}
      <div className={`app__wrapper_info chef-carousel ${animate ? "fade-slide" : ""}`}>
        <SubHeading title={slide.sub} />
        <h1 className="headtext__cormorant">{slide.title}</h1>

        <div className="app__chef-content">
          <div className="app__chef-content_quote">
            <img src={images.quote} alt="quote" />
            <p className="p__opensans">{slide.text1}</p>
          </div>

          <p className="p__opensans">{slide.text2}</p>
        </div>

        <div className="app__chef-sign">
          <p>{slide.name}</p>
          <p className="p__opensans">{slide.role}</p>
          <img src={images.sign} alt="sign" />
        </div>
      </div>
    </div>
  );
};

export default Chef;
