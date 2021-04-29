import React, { useCallback, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { OperationUser } from '../../redux/user/userReducer';
import UsersList from "./../UsersList/UsersList";
import { getUsersAppSelector } from "./../../redux/user/usersSelector";

const UsersSection = () => {
  const dispatch = useDispatch();
  const usersApp = useSelector((state) => getUsersAppSelector(state));

  const initUsersApp = useCallback(() => {
    dispatch(OperationUser.loadUsersApp())
  }, [dispatch]);

  useEffect(() => {
    initUsersApp();
  }, [initUsersApp]);

  return (
    <section className="users-section">
      <h2 className="users-title">Select User</h2>
      <UsersList usersApp={usersApp} />
    </section>
  )
}

export default UsersSection
