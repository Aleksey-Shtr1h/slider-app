export const ActionTypeData = {
  GET_USER_ALBUMS: `DATA/GET_USER_ALBUMS`,
};

export const ActionCreatorData = {
  getUserAlbums: (userAlbums) => ({
    type: ActionTypeData.GET_USER_ALBUMS,
    payload: userAlbums,
  }),
};