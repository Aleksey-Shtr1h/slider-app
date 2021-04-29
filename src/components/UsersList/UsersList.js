import React from 'react'
import { Link } from 'react-router-dom';
import sprite from '../../assets/image/spirte.svg';
import { useDispatch } from "react-redux";
import { ActionCreatorApp } from '../../redux/app/appAction';
import { getRondomCollor } from '../../utils/utils';

const UsersList = ({ usersApp }) => {
  const dispatch = useDispatch()

  const onSelectUserIdClick = (userInfo) => {
    dispatch(ActionCreatorApp.getSelectUserId(userInfo.id))
    dispatch(ActionCreatorApp.saveNameUserLocation(userInfo.username))
  };

  return (
    <>
      {usersApp && <ul className="users__list">
        {usersApp.map((userApp, idx) => {
          return (
            <li className="users__item" key={idx + userApp.username}>
              <Link
                className="users__link"
                to={`/user/albums/${userApp.username}`}
                onClick={() => onSelectUserIdClick(userApp)}
              >

                <svg className="user__avatar" style={{ fill: getRondomCollor() }}>
                  <use xlinkHref={`${sprite}#avatar`}>
                  </use>
                </svg>
                <p>{userApp.username}</p>
              </Link>
            </li>
          )
        })}

      </ul>}
    </>
  )
}

export default UsersList
