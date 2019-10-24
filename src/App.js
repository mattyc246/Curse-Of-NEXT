import React from "react";
import "./App.css";
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
        <Route
          path="/round-1"
          component={props => {
            return <SpotTheDifference {...props} />;
          }}
        />
        <Route
          path="/round-2"
          component={props => {
            return <PumpkinSmash {...props} />;
          }}
        />
        <Route
          path="/round-3"
          component={props => {
            return <CardMatch {...props} />;
          }}
        />
        <Route
          path="/scare"
          component={props => {
            return <Scare {...props} />;
          }}
        />
        <Route
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
