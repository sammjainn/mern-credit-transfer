import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {
  render() {
    return (
      <nav className='navbar navbar-dark bg-dark navbar-expand-lg'>
        <Link to='/' className='navbar-brand'>
          CreditTransfer
        </Link>
        <div className='container-fluid collapse navbar-collapse'>
          <ul className='navbar-nav mr-auto'>
            <li className='nav-item'>
              <Link to='/' className='nav-link'>
                HomePage
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/users' className='nav-link'>
                See all users
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/transactions' className='nav-link'>
                See all logs
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
