import React, { Component } from 'react';

import '../App.css';

class ContactCard extends Component {
  render() {
    return (
      <div className="card">
        <img src={this.props.urlName} alt="Avatar" />
        <div className="container">
          <h4>
            <b>{this.props.name}</b>
          </h4>
          <p> mobile:{this.props.mobile} </p>
          <p> work:{this.props.work}</p>
          <p> email: {this.props.email}</p>
        </div>
      </div>
    );
  }
}

export default ContactCard;
