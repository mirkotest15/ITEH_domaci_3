import React from 'react'
import {NavLink} from 'react-router-dom'

export default function Navbar(){
  return(
    <nav ClassName="">
      <NavLink className="" to="/"> Online Roulette club </NavLink>
      <div className="navbar-collapse collapse">
        <ul className="navbar-nav mx-auto">
          <li className="nav-item mx-auto">
            <NavLink className="nav-link" to="/"> Online Roulette club </NavLink>
          </li>
          <li className="nav-item mx-auto">
            <NavLink className="nav-link" to="/statistika"> Online Roulette club </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  )
}
