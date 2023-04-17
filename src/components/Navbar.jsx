import React, { useState } from 'react'
import '../styles/navbar.css'

import { GiHamburgerMenu } from 'react-icons/gi'
import { IoCloseCircleOutline } from 'react-icons/io5'

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false)

  return (
    <div className="navbar_main">
      <div className="navbar_main_left">
        <h1>Aquaflow</h1>
        <ul className="navbar_main_left_list">
          <li>Products</li>
          <li>About</li>
          <li>App</li>
          <li>FAQ</li>
        </ul>
      </div>
      <div className="navbar_main_right">
        <div>
          <button type="button">Login</button>
        </div>
        <div>
          <button type="button">Sign up</button>
        </div>
      </div>

      <div className="app_navbar_smallscreen">
        <div className="app_navbar_smallscreen_left">
          <h1>Aquaflow</h1>
        </div>

        <div className="app_navbar_smallscreen_right">
          <GiHamburgerMenu
            color="#fff"
            fontSize={27}
            onClick={() => {
              setToggleMenu(true)
            }}
          />

          {toggleMenu && (
            <div className="app_navbar_smallscreen_overlay">
              <IoCloseCircleOutline
                fontSize={27}
                className="overlay_close"
                onClick={() => {
                  setToggleMenu(false)
                }}
              />

              <ul className="navbar_main_left_list_smallscreen">
                <li>Products</li>
                <li>About</li>
                <li>App</li>
                <li>FAQ</li>
              </ul>
              <button type="button">Login</button>
              <button type="button">Sign up</button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
export default Navbar
