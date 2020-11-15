import api from 'api';
import React from 'react';
import { NavLink } from 'react-router-dom';
import { parseCurrentVND } from 'utils';
import moment from 'moment';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { saveOrder } from 'app-redux/actions';

function ProductComponent({ product, saveOrderAction }) {
  function handleAddCart(e) {
    e.preventDefault();
    const order = {
      order_product: product._id,
      order_amount: 1,
      order_status: 'pending',
      order_transaction: '',
      created_at: moment().toISOString()
    }
    api.post('/orders', {order}).then(result => {
      if(result.data.status === 'ok') {
       // handle message
       saveOrderAction(order);
      }
    })
  }
  return (
    <div className="product">
      <NavLink to={`/product/${product._id}`} className="img-prod"><img className="img-fluid" src={`http://localhost:4000/${product.product_images_link[0].url}`} alt={product.product_title} />
        <div className="overlay"></div>
      </NavLink>
      <div className="text py-3 pb-4 px-3 text-center">
        <h3><a href="#">{product.product_title}</a></h3>
        <div className="d-flex">
          <div className="pricing">
            <p className="price"><span>{parseCurrentVND(product.product_price)}</span></p>
          </div>
        </div>
        <div className="bottom-area d-flex px-3">
          <div className="m-auto d-flex">
            <a href="#" className="add-to-cart d-flex justify-content-center align-items-center text-center">
              <span><i className="ion-ios-menu"></i></span>
            </a>
            <a onClick={handleAddCart} href="#" className="buy-now d-flex justify-content-center align-items-center mx-1">
              <span><i className="ion-ios-cart"></i></span>
            </a>
            <a href="#" className="heart d-flex justify-content-center align-items-center ">
              <span><i className="ion-ios-heart"></i></span>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

function mapDispatchToProps(dispatch, ownProps) {
  return bindActionCreators({
    saveOrderAction: saveOrder 
  }, dispatch);
}


export default connect(null, mapDispatchToProps)(ProductComponent);