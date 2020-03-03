import React from 'react';
import { NavLink } from 'react-router-dom';


function Nav({ dogNames }) {
  return (
    <ul>
      <li>
        <NavLink to="/dogs">All Dogs</NavLink>
      </li>
      {dogNames.map(name => (
        <li key={name}>
          <NavLink to={`/dogs/${name}`}>{name}</NavLink>
        </li>
      ))}
    </ul>
  )
}

export default Nav;