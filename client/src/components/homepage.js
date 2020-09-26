import React from 'react';
import { Link } from 'react-router-dom';

export default function homepage() {
  return (
    <div>
      <div class='jumbotron my-4'>
        <h1 class='display-4'>Welcome!</h1>
        <p class='lead'>This is a simple credit transfer app.</p>
        <hr class='my-4' />
        <p>Made by Samriddhi Jain.</p>
        <Link to={'/users'} className='btn btn-primary btn-lg'>
          Get started
        </Link>
      </div>
    </div>
  );
}
