import React from 'react';
import { useParams } from 'react-router-dom';
import './Colors.css';

export default function Colors() {
  const { red, green, blue } = useParams();

  return (
    <p style={{ backgroundColor: `rgb(${red}, ${green}, ${blue})` }}>
      {red}, {green}, {blue}
    </p>
  );
}
