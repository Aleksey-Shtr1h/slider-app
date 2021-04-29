import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom";

import { OperationData } from "../../redux/data/dataReducer";
import { OperationApp } from "../../redux/app/appReducer";
import { getUserAlbumsSelector } from "../../redux/data/dataSelector";
import { getSelectUserIdSelector, saveNameUserLocationSelector } from "./../../redux/app/appSelector";
import { ActionCreatorApp } from "../../redux/app/appAction";

import { getRondomCollor } from "../../utils/utils";

import sprite from '../../assets/image/spirte.svg';
import { AppRoute } from "../../utils/constants";

const UserAlbums = () => {
  const dispatch = useDispatch();

  const selectUserId = useSelector((state) => getSelectUserIdSelector(state));
  const userAlbums = useSelector((state) => getUserAlbumsSelector(state));
  const nameUserLocation = useSelector((state) => saveNameUserLocationSelector(state));

  const initAlbumsUser = useCallback(() => {
    dispatch(OperationData.loadAlbums(selectUserId));
    dispatch(ActionCreatorApp.changeActiveSlider(false));
  }, [dispatch, selectUserId]);

  useEffect(() => {
    initAlbumsUser();
  }, [initAlbumsUser]);

  const onChangeVisiblePicClick = (idxAlbum) => {
    dispatch(ActionCreatorApp.changeVisiblePic(true));
    dispatch(OperationApp.getPicForUserId(idxAlbum, userAlbums));
  }

  return (
    <section className="user-albums-section">
      <h2 className="user-albums-title ">Select Albums</h2>
      {userAlbums && (
        <ul className="user-albums__list">
          {userAlbums.map((userAlbum, idx) => {
            return (
              <li className="user-albums__item" key={idx + userAlbum.title}>
                <Link
                  className="users-albums-link"
                  to={`/user/album/${nameUserLocation}/album${idx}`}
                  onClick={() => onChangeVisiblePicClick(idx)}
                >
                  <svg className="user__avatar" style={{ fill: getRondomCollor() }}>
                    <use xlinkHref={`${sprite}#albums`}>
                    </use>
                  </svg>
                  <p className="users-albums-title">Title: {userAlbum.title}</p>
                  <p>Count: {userAlbum.photos.length}</p>
                </Link>
              </li>
            );
          })}
        </ul>
      )}
      <Link
        className="prev-location-link"
        to={`${AppRoute.MAIN_ID.USERS_DESKTOP_ID.START_TABLE}`}
      >
        <svg className="prev-location-svg" >
          <use xlinkHref={`${sprite}#prev-btn`}>
          </use>
        </svg>
      </Link>
    </section>
  );
};

export default UserAlbums;
