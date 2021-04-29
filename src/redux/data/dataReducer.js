import { ActionTypeData, ActionCreatorData } from "./dataAction";

export const initialState = {
  userAlbums: null,
};

export const OperationData = {
  loadAlbums: (selectUserId) => async (dispatch, getState, api) => {
    const albumsAllResponse = await api.get(`/albums`);
    const photosAllResponse = await api.get(`/photos`);
    const albumsAll = albumsAllResponse.data;
    const photosAll = photosAllResponse.data;

    const userAlbums = albumsAll.filter((album) =>
      album.userId === selectUserId
    );

    userAlbums.forEach((userAlbum, idx) => {
      const test = photosAll.filter((photos) => photos.albumId === userAlbum.id)
      userAlbums[idx].photos = test;
    });

    if (userAlbums.length !== 0) {
      await dispatch(ActionCreatorData.getUserAlbums(userAlbums));
    }
  }
};

export const dataReducer = (state = initialState, action) => {
  switch (action.type) {

    case ActionTypeData.GET_USER_ALBUMS:
      return { ...state, userAlbums: action.payload }

    default:
      break;
  }

  return state;
};
