export const getSelectUserIdSelector = (state) => {
  return state.APP.selectUserId;
};

export const changeVisiblePicSelector = (state) => {
  return state.APP.isPictureVisible;
};

export const getUserPhotosSelector = (state) => {
  return state.APP.userPhotos;
};

export const changeActiveSliderSelector = (state) => {
  return state.APP.isActiveSlider;
};

export const saveNameUserLocationSelector = (state) => {
  return state.APP.nameUserLocation;
};