import React from 'react'
import PropTypes from 'proptypes'

const Header = (props) => {
  return (
    <header className="Header">
      <div className="container-fluid">
        <div className="row">
          <div className="col-xs-4">
            <ul className="top-nav">
              <li>
                <a href="https://shop.circleofmana.com">Shop</a>
              </li>
              <li>
                <a href="https://journal.circleofmana.com">Journal</a>
              </li>
            </ul>
          </div>
          <div className="col-xs-2">
            <a href="/" className="logo-mark"></a>
          </div>
          <div className="col-xs-4">
            <a className="cart" href="https://shop.circleofmana.com/cart"></a>
          </div>
        </div>
      </div>
    </header>
  )
}

Header.propTypes = {
}

export default Header
