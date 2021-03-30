import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Index from '../pages/Index';
import Locations from '../pages/Locations';

export default function RouterView() {
  return (
    <Switch>
      <Route path="/locations">
        <Locations />
      </Route>
      <Route path="/">
        <Index />
      </Route>
    </Switch>
  );
}
