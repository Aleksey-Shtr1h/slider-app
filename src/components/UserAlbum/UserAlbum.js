import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { ActionCreatorApp } from "../../redux/app/appAction";

import UserSlider from "../UserSlider/UserSlider";

import { changeActiveSliderSelector, getUserPhotosSelector, saveNameUserLocationSelector } from "./../../redux/app/appSelector";

import sprite from '../../assets/image/spirte.svg';

const UserAlbum = () => {
  const [photoId, setPhotoId] = useState(0)
  const dispatch = useDispatch();
  const userPhotos = useSelector((state) => getUserPhotosSelector(state));
  const isActiveSlider = useSelector((state) => changeActiveSliderSelector(state));
  const nameUserLocation = useSelector((state) => saveNameUserLocationSelector(state));

  const onShowSliderClick = (index) => {
    dispatch(ActionCreatorApp.changeActiveSlider(true));
    setPhotoId(index);
  }

  return (
    <section className="user-photos-section">
      <h2 className="user-photos-title ">Select Photo</h2>
      {userPhotos && (
        <ul className="user-photos__list">
          {userPhotos.map((userPhoto, idx) => {
            return (
              <li className="user-photos__item" key={idx} onClick={() => onShowSliderClick(idx)}>
                <img className="user-photos__img" src={userPhoto.thumbnailUrl} alt="" />
                <p className="user-photos__title">Title: {userPhoto.title}</p>
              </li>
            );
          })}
        </ul>
      )}
      {isActiveSlider && <UserSlider slides={userPhotos} photoId={photoId} />}

      <Link
        className="prev-location-link"
        to={`/user/albums/${nameUserLocation}`}
      >
        <svg className="prev-location-svg" >
          <use xlinkHref={`${sprite}#prev-btn`}>
          </use>
        </svg>
      </Link>
    </section>
  );
};

export default UserAlbum;
