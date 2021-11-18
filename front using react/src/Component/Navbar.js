import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import logo from '../assets/img/2.png'

export default class Navbar extends Component {
    render() {
        return (
            <div className="pb-5">
                 <nav className="navbar navbar-expand-lg navbar-dark bg-info">
        <div className="container">
        <Link className="navbar-brand" to="/">
                <img src={logo} width="65" alt="" class="d-inline-block align-middle mr-2" />
  
                &nbsp;&nbsp;<span class="text-uppercase font-weight-bold"> ENSAM CASABLANCA</span>
          </Link>

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link  className="nav-link active" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/students">Student</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/add-student">Add Student</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
                
            </div>
        )
    }
}
