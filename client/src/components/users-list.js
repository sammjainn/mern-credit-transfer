import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const User = (props) => (
  <tr>
    <td>{props.user.username}</td>
    <td>{props.user.email}</td>
    <td>{props.user.credits}</td>
    <td>
      <Link to={'/transfer/' + props.user._id}>Transfer</Link>
    </td>
  </tr>
);

export default class UsersList extends Component {
  constructor(props) {
    super(props);
    this.state = { users: [] };
  }
  componentDidMount() {
    axios
      .get('http://localhost:5000/users')
      .then((response) => {
        // console.log(response);
        this.setState({ users: response.data });
      })
      .catch((error) => console.log('The error is', error));
  }

  userList() {
    return this.state.users.map((currentuser) => {
      return <User user={currentuser} key={currentuser._id} />;
    });
  }

  render() {
    return (
      <div>
        <h3>All Users</h3>
        <table className='table'>
          <thead className='thead-light'>
            <tr>
              <th>Username</th>
              <th>Email</th>
              <th>Credits</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>{this.userList()}</tbody>
        </table>
      </div>
    );
  }
}
