import React from 'react';
import { Link } from 'react-router-dom';


function DogList({ dogs }) {
  return dogs.map(dog => (
    <div key={dog.name}>
      <Link to={`./dogs/${dog.name}`}>
        <img src={dog.src} alt={`${dog.name}`}/>
      </Link>
    </div>
  ))
}

export default DogList;