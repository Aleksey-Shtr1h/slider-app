export const ActionTypeUser = {
  USERS_APP: `USER/USERS_APP`,
};

export const ActionCreatorUser = {
  getUsersApp: (users) => ({
    type: ActionTypeUser.USERS_APP,
    payload: users,
  }),
};