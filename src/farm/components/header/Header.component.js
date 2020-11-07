import React from 'react';
import { NavLink } from 'react-router-dom';

function HeaderComponent() {
  return (
    <React.Fragment>
      {/* --------------------------------- */}
      <div className="py-1 bg-primary">
        <div className="container">
          <div className="row no-gutters d-flex align-items-start align-items-center px-md-0">
            <div className="col-lg-12 d-block">
              <div className="row d-flex">
                <div className="col-md pr-4 d-flex topper align-items-center">
                  <div className="icon mr-2 d-flex justify-content-center align-items-center"><span className="icon-phone2"></span>
                  </div>
                  <span className="text">+ 1235 2355 98</span>
                </div>
                <div className="col-md pr-4 d-flex topper align-items-center">
                  <div className="icon mr-2 d-flex justify-content-center align-items-center"><span
                    className="icon-paper-plane"></span></div>
                  <span className="text">youremail@email.com</span>
                </div>
                <div className="col-md-5 pr-4 d-flex topper align-items-center text-lg-right">
                  <span className="text">3-5 Business days delivery &amp; Free Returns</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* --------------------------------- */}
      <nav className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light" id="ftco-navbar" style={{boxShadow: '0px 1px #c8c8c8'}}>
        <div className="container">
          <a className="navbar-brand" href="index.html">Vegefoods</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="/ftco-nav"
            aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="oi oi-menu"></span> Menu
			    </button>

          <div className="collapse navbar-collapse" id="ftco-nav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active"><a href="/" className="nav-link">Home</a></li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="dropdown04" data-toggle="dropdown" aria-haspopup="true"
                  aria-expanded="false">Shop</a>
                <div className="dropdown-menu" aria-labelledby="dropdown04">
                  <a className="dropdown-item" href="/">Shop</a>
                  <a className="dropdown-item" href="/">Wishlist</a>
                  <a className="dropdown-item" href="/">Single Product</a>
                  <a className="dropdown-item" href="/">Cart</a>
                  <a className="dropdown-item" href="/">Checkout</a>
                </div>
              </li>
              <li className="nav-item"><NavLink to="/about" className="nav-link">About</NavLink></li>
              <li className="nav-item"><NavLink to="/blog" className="nav-link">Blog</NavLink></li>
              <li className="nav-item"><NavLink to="/contact" className="nav-link">Contact</NavLink></li>
              <li className="nav-item"><NavLink to="/admin" className="nav-link">Admin</NavLink></li>
              <li className="nav-item cta cta-colored"><NavLink to={`/cards`} className="nav-link"><span
                className="icon-shopping_cart"></span>[0]</NavLink></li>

            </ul>
          </div>
        </div>
      </nav>
      {/* END nav */}
    </React.Fragment>
  )
}

export default HeaderComponent;