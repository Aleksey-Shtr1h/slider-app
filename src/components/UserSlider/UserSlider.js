import React, { useState } from 'react'
import { useDispatch } from 'react-redux';

import { ActionCreatorApp } from '../../redux/app/appAction';

const UserSlider = ({ slides, photoId }) => {
  const [current, setCurrent] = useState(photoId);
  const dispatch = useDispatch();

  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  const onCloseSliderClick = () => {
    dispatch(ActionCreatorApp.changeActiveSlider(false));
  }

  return (
    <section className="user-slider--flex">
      <div className="wrapper-slider">
        <button className="left-arrow" onClick={prevSlide}></button>
        {slides.map((slide, index) => {
          return (
            <div
              className={index === current ? 'slide active' : 'slide'}
              key={index + slide.title}
            >
              {index === current && (
                <img src={slide.url} alt="" />
              )}
            </div>
          );
        })}
        <button className="right-arrow" onClick={nextSlide} ></button>
        <button className="close-slider-btn" onClick={() => onCloseSliderClick()}></button>
      </div>
    </section>
  );
}

export default UserSlider
