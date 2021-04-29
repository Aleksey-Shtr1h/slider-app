export const AppRoute = {
  MAIN_ID: {
    USERS_DESKTOP: '/users/users-desktop/:id?',
    USER_ALBUMS: '/user/:id?',

    USERS_DESKTOP_ID: {
      START_TABLE: '/users/users-desktop/start-table',
    },

    USER_ALBUMS_ID: {
      USER_ALBUMS_NAME: '/user/albums/:id?',
      USER_ALBUMS_NAME_NUMBER: '/user/album/:id?/:id?',
    }
  },

  LOGIN: `/login/:id`,
};