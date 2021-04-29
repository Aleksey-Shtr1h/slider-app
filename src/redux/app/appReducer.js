import { ActionTypeApp, ActionCreatorApp } from "./appAction";

export const initialState = {
  selectUserId: null,
  isPictureVisible: false,
  userPhotos: null,
  isActiveSlider: false,
  nameUserLocation: null,
};

export const OperationApp = {
  getPicForUserId: (idxAlbum, userAlbums) => (dispatch) => {
    const photos = userAlbums[idxAlbum].photos;
    dispatch(ActionCreatorApp.getUserPhotos(photos));
  }
};

export const appReducer = (state = initialState, action) => {
  switch (action.type) {

    case ActionTypeApp.GET_SELECT_USER_ID:
      return { ...state, selectUserId: action.payload }

    case ActionTypeApp.IS_VISIBLED:
      return { ...state, isPictureVisible: action.payload }

    case ActionTypeApp.GET_USER_PHOTOS:
      return { ...state, userPhotos: action.payload }

    case ActionTypeApp.IS_ACTIVE_SLIDER:
      return { ...state, isActiveSlider: action.payload }

    case ActionTypeApp.SAVE_NAME_USER_LOCATION:
      return { ...state, nameUserLocation: action.payload }

    default:
      break;
  }

  return state;
};
