import React from 'react';
import './Main.css';
import Colors from '../Colors/Colors.js';
import { Route, Switch } from 'react-router-dom';

export default function Main() {
  return (
    <main>
      <Switch>
        <Route exact path="/rgb/:red/:green/:blue" component={Colors} />
      </Switch>
    </main>
  );
}
