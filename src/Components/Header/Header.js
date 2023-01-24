import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

export default function Header() {
  return (
    <header>
      <ul>
        <NavLink to="/rgb/0/0/0">Black; like my soul.</NavLink>
      </ul>
    </header>
  );
}
