import React from 'react';
import { Route, Switch } from 'react-router';
import Index from '../pages/Index';
import Locations from '../pages/Locations';

export default function RouterView() {
  return (
    <Switch>
      <Route path="/">
        <Index />
      </Route>
      <Route path="/locations">
        <Locations />
      </Route>
    </Switch>
  );
}
