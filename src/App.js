import React from "react";
import "./App.css";
import PrivateRoute from "./helpers/PrivateRoute";
import HomePage from "./pages/HomePage";
import CardMatch from "./pages/CardMatch";
import Scare from "./pages/Scare";
import { Switch, Route } from "react-router-dom";
import EndPage from "./pages/EndPage";
import SpotTheDifference from "./pages/SpotTheDifference";
import PumpkinSmash from "./pages/PumpkinSmash";

function App() {
  return (
    <>
      <Switch>
        <Route
          exact
          path="/"
          component={props => {
            return <HomePage {...props} />;
          }}
        />
        <PrivateRoute
          path="/round-3"
          component={props => {
            return <SpotTheDifference {...props} />;
          }}
        />
        <PrivateRoute
          path="/round-1"
          component={props => {
            return <PumpkinSmash {...props} />;
          }}
        />
        <PrivateRoute
          path="/round-2"
          component={props => {
            return <CardMatch {...props} />;
          }}
        />
        <PrivateRoute
          path="/scare"
          component={props => {
            return <Scare {...props} />;
          }}
        />
        <PrivateRoute
          path="/end"
          component={props => {
            return <EndPage {...props} />;
          }}
        />
      </Switch>
    </>
  );
}

export default App;
