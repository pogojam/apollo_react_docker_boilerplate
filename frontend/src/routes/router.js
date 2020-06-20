import React, { useCallback } from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import { Dash, Login } from "../pages";
import { Nav } from "../components/blocks/nav/Nav_Block";
import { Auth } from "../components/auth/index";
import { Drawer } from "@material-ui/core";
import store from "../state/stors/Layout_Store";
import { observer } from "mobx-react-lite";

const PrivateRoutes = ({ User, children }) => {
  return (
    <Route
      render={({ location, ...rest }) => {
        return !User ? (
          <Redirect key={location.pathname} to="/Login" />
        ) : (
          children
        );
      }}
    />
  );
};

const AppRouter = observer(() => {
  const { User, handleLogout } = Auth.useContainer();
  const withUser = useCallback((Component) => () => <Component User={User} />, [
    User,
  ]);
  return (
    <Router>
      <Nav isLoggedIn={User} logout={handleLogout} />
      <Drawer anchor={store.drawer.side} open={store.drawer.isOpen}>
        {store.Component}
      </Drawer>
      <Switch>
        <Route path="/Login" component={Login} />
        <PrivateRoutes User={User}>
          <Route path="/Dash" component={withUser(Dash)} />
        </PrivateRoutes>
      </Switch>
    </Router>
  );
});

export default AppRouter;
