import "./slider.css";
import { useState, useEffect } from "react";

export default function Slider({ images }) {
  const [position, setPosition] = useState(0);
  const [slide, setSlide] = useState(images[0]);

  useEffect(() => {
    setSlide(images[position]);
  }, [position]);

  function handleLess() {
    switch (position) {
      case 0:
        setPosition(images.length -1);
        break;
      default:
        setPosition(position - 1);
        break;
    }
  }

  function handleMore() {
    switch (position) {
      case (images.length -1) :
        setPosition(0);
        break;
      default:
        setPosition(position + 1);
        break;
    }
  }

  return (
    <div className="slider-size slider-layout">
      <span
        className="slider--button-size slider--button-layout slider--button-bg slider--button-text"
        onClick={handleLess}
      >
        {'<'}
      </span>
      <img className="slider--img-size" src={slide} />
      <span
        className="slider--button-size slider--button-layout slider--button-bg slider--button-text"
        onClick={handleMore}
      >
        {'>'}
      </span>
    </div>
  );
}
