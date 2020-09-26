import React, { Component } from 'react';
import axios from 'axios';

const Transaction = (props) => (
  <tr>
    <td>{props.transaction.sentBy}</td>
    <td>{props.transaction.sentTo}</td>
    <td>{props.transaction.credits}</td>
    <td>{props.transaction.date.slice(0, 10)}</td>
    <td>{props.transaction.date.slice(11, 19)}</td>
  </tr>
);

export default class TransactionsList extends Component {
  constructor(props) {
    super(props);
    this.state = { transactions: [] };
  }
  componentDidMount() {
    axios
      .get('/transactions')
      .then((response) => {
        console.log(response);
        this.setState({ transactions: response.data });
      })
      .catch((error) => console.log('The error is', error));
  }

  transactionList() {
    return this.state.transactions.map((currenttransaction) => {
      return (
        <Transaction
          transaction={currenttransaction}
          key={currenttransaction._id}
        />
      );
    });
  }

  render() {
    return (
      <div>
        <h3>All Transactions Logs</h3>
        <table className='table'>
          <thead className='thead-light'>
            <tr>
              <th>Sent By</th>
              <th>Sent To</th>
              <th>Credit Amount</th>
              <th>Date</th>
              <th>Time</th>
            </tr>
          </thead>
          <tbody>{this.transactionList()}</tbody>
        </table>
      </div>
    );
  }
}
