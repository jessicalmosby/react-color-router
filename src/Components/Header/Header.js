import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

export default function Header() {
  return (
    <header>
      <p>Choose your color: there will be a duel.</p>
      <ul>
        <NavLink exact={true} className="colors" to="/rgb/0/0/0">
          Black; like my soul.
        </NavLink>
        <NavLink exact={true} className="colors" to="/rgb/115/93/120">
          Dusty Purple
        </NavLink>
        <NavLink exact={true} className="colors" to="/rgb/190/149/196">
          Lavender; because you classy.
        </NavLink>
      </ul>
    </header>
  );
}
