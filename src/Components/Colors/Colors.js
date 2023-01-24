import React from 'react';
import { useParams } from 'react-router-dom';

export default function Colors() {
  const { black, dustyPurple, lavender } = useParams();

  return (
    <p style={{ backgroundColor: `rgb(${black}, ${dustyPurple}, ${lavender})` }}>
      {black}, {dustyPurple}, {lavender}
    </p>
  );
}
