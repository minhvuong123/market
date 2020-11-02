import React, { useEffect, useState } from 'react';

import { Badge } from 'antd';
import { SearchOutlined, TwitterOutlined, SkypeOutlined, ShoppingCartOutlined, ExclamationCircleOutlined } from '@ant-design/icons';
import product from '../../assets/images/product.jpg';
import logo from '../../assets/images/logo/fruits-horizontal.png';
import { NavLink } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import api from 'api';
import { getCategoriesSub } from 'redux/actions';

function HeaderComponent({ ordersStore, getCategoriesSubAction, categories_sub }) {
  const [amountOrders, setAmountOrders] = useState(ordersStore.length);
  useEffect(() => {
    api.get('/orders').then(function(result){
      setAmountOrders(result.data.length);
    })

    api.get('/categories-sub').then(function(result){
      getCategoriesSubAction(result.data);
    })
    return () => {

    }
  }, [ordersStore.length, getCategoriesSubAction])
  return (
    <div className="app-header" style={{ background: 'linear-gradient(-180deg,#f53d2d,#f63)' }}>
      {/* header top : start */}
      <div className="container d-flex justify-between">
        <ul className="header-connect d-flex">
          <li>
            <a href="/" className="color-white p-5">Kênh người bán</a>
          </li>
          <li>
            <a href="/" className="color-white p-5">Tải ứng dụng</a>
          </li>
          <li className="color-white p-5">
            Kết nối
            <a href="/" className="color-white pl-5"><TwitterOutlined /></a>
            <a href="/" className="color-white pl-5"><SkypeOutlined /></a>
          </li>
        </ul>
        <ul className="header-consumer d-flex">
          <li>
            <a href="/" className="color-white p-5">Thông báo</a>
          </li>
          <li>
            <a href="/" className="color-white p-5">Trợ giúp</a>
          </li>
          <li>
            <a href="/" className="color-white p-5">Đăng ký</a>
            <a href="/" className="color-white p-5">Đăng nhập</a>
          </li>
        </ul>
      </div>
      {/* header top : end */}
      {/* header search: start */}
      <div className="container d-flex pt-10 pb-10">
        <div className="header-logo" style={{ width: '150px', background: 'black' }}>
          <img src={logo} alt="Fruits world" />
        </div>
        <div className="header-search flex-grow pl-10 pr-10">
          <div className="form-search d-flex p-5 bg-white" style={{ borderRadius: '.5rem' }}>
            <input type="text" className="w-100 p-5 border-0 outline-0" placeholder="Hàng Quốc Tế - Đồng Giá Hôm Nay" />
            <button type="button" className="primary p-5 border-0 outline-0 pointer color-white" style={{ width: 60, background: '#fb5533' }}><SearchOutlined /></button>
          </div>
          <ul className="header-list d-flex">
            {
              categories_sub 
              && categories_sub.length
              && categories_sub.map(category => (
                <React.Fragment key={category.category_id}>
                  <li><NavLink to={`/category-sub/${category.category_sale}`} className="color-white p-5">{ category.category_name }</NavLink></li>
                </React.Fragment>
              )) 
            }
          </ul>
        </div>
        <div className="header-cart"
          style={{
            width: '150px',
            fontSize: '30px',
            textAlign: 'center'
          }}>
          <div className="d-inline-block" style={{ position: 'relative' }}>
            <Badge count={amountOrders}>
              <NavLink to='/product/card/order'>
                <ShoppingCartOutlined style={{ fontSize: '35px', color: '#fff' }} />
              </NavLink>
            </Badge>
            <div className="cart-popup flex-column justify-center align-center" style={{
              position: 'absolute',
              width: '400px',
              top: '100%',
              right: '0',
              zIndex: 1000,
              backgroundColor: '#fff',
              fontSize: '1.5rem',
              display: 'none'
            }}>
              {
                true
                  ?
                  <React.Fragment>
                    <div className="cart-list-small">
                      {/* prodct cart: start */}
                      <div className="d-flex" style={{ margin: '1.5rem 1rem' }}>
                        <div style={{ minWidth: '50px', width: '50px' }}>
                          <Badge count={1}>
                            <img src={product} alt="" />
                          </Badge>
                        </div>
                        <div className="d-flex flex-column justify-around text-left" style={{ fontSize: '1.2rem', maxWidth: '260px', padding: '0 1rem' }}>
                          <p className="text-ellipsis">Giày Bốt Martin Gót Vuông Dày Phong Cách Hàn Quốc Cho Nữ</p>
                          <p>Phân loại hàng: xl, pink</p>
                        </div>
                        <div className="d-flex flex-column flex-grow text-right">
                          <span style={{ color: '#f53d2d' }}>đ 103.700</span>
                          <a href="/">Xóa</a>
                        </div>
                      </div>
                      {/* prodct cart: end */}
                      {/* prodct cart: start */}
                      <div className="d-flex" style={{ margin: '1.5rem 1rem' }}>
                        <div style={{ minWidth: '50px', width: '50px' }}>
                          <Badge count={10}>
                            <img src={product} alt="" />
                          </Badge>
                        </div>
                        <div className="d-flex flex-column justify-around text-left" style={{ fontSize: '1.2rem', maxWidth: '260px', padding: '0 1rem' }}>
                          <p className="text-ellipsis">Giày Bốt Martin Gót Vuông Dày Phong Cách Hàn Quốc Cho Nữ</p>
                          <p>Phân loại hàng: xl, pink</p>
                        </div>
                        <div className="d-flex flex-column flex-grow text-right">
                          <span style={{ color: '#f53d2d' }}>đ 103.700</span>
                          <a href="/">Xóa</a>
                        </div>
                      </div>
                      {/* prodct cart: end */}
                      {/* prodct cart: start */}
                      <div className="d-flex" style={{ margin: '1.5rem 1rem' }}>
                        <div style={{ minWidth: '50px', width: '50px' }}>
                          <Badge count={80}>
                            <img src={product} alt="" />
                          </Badge>
                        </div>
                        <div className="d-flex flex-column justify-around text-left" style={{ fontSize: '1.2rem', maxWidth: '260px', padding: '0 1rem' }}>
                          <p className="text-ellipsis">Giày Bốt Martin Gót Vuông Dày Phong Cách Hàn Quốc Cho Nữ</p>
                          <p>Phân loại hàng: xl, pink</p>
                        </div>
                        <div className="d-flex flex-column flex-grow text-right">
                          <span style={{ color: '#f53d2d' }}>đ 103.700</span>
                          <a href="/">Xóa</a>
                        </div>
                      </div>
                      {/* prodct cart: end */}
                    </div>
                    <div className="cart-button-navigate" style={{ textAlign: 'right', padding: '1rem' }}>
                      <a href="/" style={{ backgroundColor: 'rgb(245, 61, 45)', color: '#fff', padding: '.5rem 1rem' }}>Xem giỏ hàng</a>
                    </div>
                  </React.Fragment>
                  : <React.Fragment>
                    <ExclamationCircleOutlined />
                  Chưa có sản phẩm
                </React.Fragment>
              }
            </div>
          </div>
        </div>
      </div>
      {/* header search: end */}
    </div>
  )
}

function mapStateToProps({ ordersReducer, categoriesReducer }, ownProps) {
  return {
    ordersStore: ordersReducer.orders,
    categories_sub: categoriesReducer.categories_sub 
  }
}

function mapDispatchToProps(dispatch, ownProps) {
  return bindActionCreators({
    getCategoriesSubAction: getCategoriesSub
  }, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(HeaderComponent);