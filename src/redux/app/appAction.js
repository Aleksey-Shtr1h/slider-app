export const ActionTypeApp = {
  GET_SELECT_USER_ID: `APP/GET_SELECT_USER_ID`,
  IS_VISIBLED: `APP/IS_VISIBLED`,
  GET_USER_PHOTOS: `APP/GET_USER_PHOTOS`,
  IS_ACTIVE_SLIDER: `APP/IS_ACTIVE_SLIDER`,
  SAVE_NAME_USER_LOCATION: `APP/SAVE_NAME_USER_LOCATION`,
};

export const ActionCreatorApp = {
  getSelectUserId: (id) => ({
    type: ActionTypeApp.GET_SELECT_USER_ID,
    payload: id,
  }),

  changeVisiblePic: (bool) => ({
    type: ActionTypeApp.IS_VISIBLED,
    payload: bool,
  }),

  getUserPhotos: (pic) => ({
    type: ActionTypeApp.GET_USER_PHOTOS,
    payload: pic,
  }),

  changeActiveSlider: (bool) => ({
    type: ActionTypeApp.IS_ACTIVE_SLIDER,
    payload: bool,
  }),

  saveNameUserLocation: (name) => ({
    type: ActionTypeApp.SAVE_NAME_USER_LOCATION,
    payload: name,
  }),
};