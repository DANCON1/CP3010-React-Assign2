import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <nav>
    <ul style={{ display: 'flex', flexDirection: 'row' }}>
      <li style={{ marginRight: '2rem' }}>
          <Link to="/">Movies</Link>
        </li>
        <li>
          <Link to="/submission">Submission Form</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;