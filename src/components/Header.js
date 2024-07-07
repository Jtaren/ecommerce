import React from 'react'
import {NavLink, Link} from "react-router-dom";

const Header = () => {
  return (
    <>
      <header className="header-top-strip py-3">
        <div className="container-xxl">
          <div className="row">
            <div className="row">
              <p>Free Shipping Over $100 & Free Returns</p>
            </div>
            <div className="col-6">
              <p className="text-end">
                Hotline: <a href="tel:+91 8264954234">+91 8264954234</a>
              </p>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header