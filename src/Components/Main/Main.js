import React from 'react';
import './Main.css';
import Colors from '../Colors/Colors.js';
import { Route, Switch } from 'react-router-dom';

export default function Main() {
  return (
    <main>
      <div className="picked">
        <Switch>
          <Route exact path="/rgb/:black/:dustyPurple/:lavender" component={Colors} />
        </Switch>
      </div>
    </main>
  );
}
