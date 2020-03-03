import React from 'react';
import { useParams, Redirect } from 'react-router-dom';

function DogDetails({ dogs }) {
  const { name } = useParams();

  const currentDog = dogs.find(dog => dog.name === name);
  if (!currentDog) {
    return <Redirect to='/dogs' />
  }

  const factsList = currentDog.facts.map((fact, index) => (
    <li key={index}>{fact}</li>
  ))

  return (
    <div>
      <div>
        Name: {currentDog.name}
      </div>
      <div>
        Age: {currentDog.age}
      </div>
      <div>
        <img src={currentDog.src} alt={`${currentDog.name}`} />
      </div>
      <ul>
        {factsList}
      </ul>
    </div>
  )
}

export default DogDetails;