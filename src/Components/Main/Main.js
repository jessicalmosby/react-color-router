import React from 'react';
import './Main.css';
import Colors from '../Colors/Colors.js';
import { Route, Switch } from 'react-router-dom';
import NotFound from '../NotFound/NotFound.js';

export default function Main() {
  return (
    <main>
      <Switch>
        <Route exact path="/" />
        <Route exact path="/rgb/:red/:green/:blue" component={Colors} />
        <Route path="*" component={NotFound} />
      </Switch>
    </main>
  );
}
