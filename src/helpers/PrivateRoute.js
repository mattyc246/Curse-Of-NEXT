import React from "react";
import { Route, Redirect } from "react-router-dom";
import { observer } from "mobx-react";
import useStores from "../hooks/useStores";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { gameStore } = useStores();
  return (
    <Route
      {...rest}
      render={props =>
        gameStore.inPlay ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/",
              state: { from: props.location }
            }}
          />
        )
      }
    />
  );
};

export default observer(PrivateRoute);
