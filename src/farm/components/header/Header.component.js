import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Badge, Menu, Dropdown } from 'antd';
import { ShoppingCartOutlined, UserOutlined } from '@ant-design/icons';
import api from 'api';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getOrdersCount, setToken } from 'app-redux/actions';


function HeaderComponent({ orderCount, orders, getOrdersCountAction, token, setTokenAction }) {
  const loginUser = (
    <Menu>
      <Menu.Item key="0" >
        <a href="/" className="user-sign-out" style={{ fontSize: 11 }} onClick={handleSignOut}>SIGN OUT</a>
      </Menu.Item>
    </Menu>
  );

  useEffect(() => {
    async function fetData() {
      const result = await api.get('/orders');
      getOrdersCountAction(result.data.count);
    }
    fetData();
    return () => { }
  }, [getOrdersCountAction, orders])

  function handleSignOut(e) {
    e.preventDefault();
    setTokenAction('');
  }

  return (
    <React.Fragment>
      {/* --------------------------------- */}
      <div className="py-1 bg-primary">
        <div className="container">
          <div className="row no-gutters d-flex align-items-start align-items-center px-md-0">
            <div className="col-lg-12 d-block">
              <div className="row d-flex">
                <div className="col-md-2 pr-4 d-flex topper align-items-center">
                  <div className="icon mr-2 d-flex justify-content-center align-items-center"><span className="icon-phone2"></span>
                  </div>
                  <span className="text pt-10 pb-10">+ 1235 2355 98</span>
                </div>
                <div className="col-md-3 pr-4 d-flex topper align-items-center">
                  <div className="icon mr-2 d-flex justify-content-center align-items-center"><span
                    className="icon-paper-plane"></span></div>
                  <span className="text pt-10 pb-10">youremail@email.com</span>
                </div>
                <div className="col-md-5 pr-4 d-flex topper align-items-center text-lg-right">
                  <span className="text pt-10 pb-10">3-5 Business days delivery &amp; Free Returns</span>
                </div>
                <div className="col-md-2 pr-4 topper align-items-center text-lg-right">
                  {
                    token
                      ? <Dropdown overlay={loginUser} trigger={['click']}>
                        <a className="ant-dropdown-link color-white line-height-0 pt-10 pb-10" href="/" style={{ fontSize: 15 }} onClick={e => e.preventDefault()}><UserOutlined /></a>
                      </Dropdown>
                      : <div className="">
                        <NavLink className="ant-dropdown-link color-white pt-10 pb-10 mr-20" to="/sign-up">SIGN UP</NavLink>
                        <NavLink className="ant-dropdown-link color-white pt-10 pb-10" to="/sign-in">SIGN IN</NavLink>
                      </div>
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* --------------------------------- */}
      <nav className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light" id="ftco-navbar" style={{ boxShadow: '0px 1px #c8c8c8' }}>
        <div className="container">
          <a className="navbar-brand" href="index.html">Vegefoods</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="/ftco-nav"
            aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="oi oi-menu"></span> Menu
			    </button>

          <div className="collapse navbar-collapse" id="ftco-nav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active"><NavLink to="/" className="nav-link">Home</NavLink></li>
              <li className="nav-item"><NavLink to="/about" className="nav-link">About</NavLink></li>
              <li className="nav-item"><NavLink to="/blog" className="nav-link">Blog</NavLink></li>
              <li className="nav-item"><NavLink to="/contact" className="nav-link">Contact</NavLink></li>
              <li className="nav-item"><NavLink to="/admin" className="nav-link">Admin</NavLink></li>
              <li className="nav-item cta cta-colored">
                <NavLink to={`/cards`} className="nav-link">
                  <Badge count={orderCount}>
                    <ShoppingCartOutlined />
                  </Badge>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/* END nav */}
    </React.Fragment>
  )
}


function mapStateToProps({ ordersReducer, tokenReducer }) {
  return {
    orderCount: ordersReducer.count,
    orders: ordersReducer.orders,
    token: tokenReducer.token
  }
}

function mapDispatchToProps( dispatch ) {
  return bindActionCreators({
    getOrdersCountAction: getOrdersCount,
    setTokenAction: setToken
  }, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(HeaderComponent);