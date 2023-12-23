import React, { Component } from 'react'
import { Link } from 'react-router-dom'
export default class Nevbar extends Component {
  render() {
    return (
           <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Link to="/"><span className="navbar-brand">EveryThing</span></Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
             <Link to='/business'><span className="nav-link active" aria-current="page">Business</span></Link>
            </li>
            <li className="nav-item">
             <Link to="/entertainment"><span className="nav-link active" aria-current="page">Entertainement</span></Link>
            </li>
            <li className="nav-item">
            <Link to="/general"><span className="nav-link active" aria-current="page">General</span></Link>  
            </li>
            <li className="nav-item">
            <Link to="/health"><span className="nav-link active" aria-current="page">Health</span></Link> 
            </li>
            <li className="nav-item">
             <Link to="/science"><span className="nav-link active" aria-current="page" >Science</span></Link> 
            </li>
            <li className="nav-item">
             <Link to="/sports"> <span className="nav-link active" aria-current="page" >Sports</span></Link>
            </li>
            <li className="nav-item">
             <Link to="/technology"><span className="nav-link active" aria-current="page">Technology</span></Link> 
            </li>
           </ul>
        </div>
      </div>
    </nav>
    </div>
    )
  }
}
