import { useSelector } from "react-redux";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import UsersSection from "./../../components/UsersSection/UsersSection";
import UserAlbums from "./../../components/UserAlbums/UserAlbums";
import UserAlbum from "../../components/UserAlbum/UserAlbum";

import { changeVisiblePicSelector } from "../../redux/app/appSelector";

import { AppRoute } from "./../../utils/constants";

export const App = () => {
  const isPictureVisible = useSelector((state) => changeVisiblePicSelector(state))
  return (
    <main className="main">
      <Router>
        <Switch>
          <>
            <Route exact path={[AppRoute.MAIN_ID.USERS_DESKTOP, AppRoute.MAIN_ID.USERS_DESKTOP_ID.START_TABLE]}>
              <UsersSection />
            </Route>

            <Route exact path={[AppRoute.MAIN_ID.USER_ALBUMS, AppRoute.MAIN_ID.USER_ALBUMS_ID.USER_ALBUMS_NAME]}>
              <UserAlbums />
            </Route>

            <Route exact path={AppRoute.MAIN_ID.USER_ALBUMS_ID.USER_ALBUMS_NAME_NUMBER}>
              {isPictureVisible && <UserAlbum />}
            </Route>


            <Redirect exact from="/" to={AppRoute.MAIN_ID.USERS_DESKTOP_ID.START_TABLE} />

          </>
        </Switch>
      </Router>
    </main>
  );
}
