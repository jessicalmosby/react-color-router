import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

export default function Header() {
  return (
    <header>
      <h3>Choose your color: there will be a duel.</h3>
      <div className="nav">
        <NavLink exact={true} className="black" to="/rgb/0/0/0">
          Black; like my soul.
        </NavLink>
        <NavLink exact={true} className="dusty-purple" to="/rgb/115/93/120">
          Dusty Purple
        </NavLink>
        <NavLink exact={true} className="lavender" to="/rgb/190/149/196">
          Lavender; because you classy.
        </NavLink>
      </div>
    </header>
  );
}
