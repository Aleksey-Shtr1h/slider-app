import { ActionTypeUser, ActionCreatorUser } from "./userAction";

export const initialState = {
  users: null,
};

export const OperationUser = {
  loadUsersApp: () => async (dispatch, getState, api) => {
    const usersResponse = await api.get(`/users`)
    await dispatch(ActionCreatorUser.getUsersApp(usersResponse.data))
  }
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {

    case ActionTypeUser.USERS_APP:
      return { ...state, users: action.payload }

    default:
      break;
  }

  return state;
};
