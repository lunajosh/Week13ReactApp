import React, { Component } from 'react'

export default class navbar extends Component {
  render() {
    return (
        <nav className="navbar bg-primary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Monarch Claims Management</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Login Account</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Claim Number Search</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Medical Records Queue</a>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled">MP240s</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
    )
  }
}
