import React from 'react'
import {NavLink} from 'react-router-dom'

export default function Navbar(){
  return(
    <nav ClassName="navbar navbar-expand-lg navbar-dark sticky-top bg-dark">
      <NavLink className="navbar-brand" to="/"> Online Roulette club </NavLink>
      <div className="navbar-collapse collapse">
        <ul className="navbar-nav mx-auto">
          <li className="nav-item mx-auto">
            <NavLink className="nav-link" to="/"> Online Roulette </NavLink>
          </li>
          <li className="nav-item mx-auto">
            <NavLink className="nav-link" to="/statistika"> Stats </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  )
}
