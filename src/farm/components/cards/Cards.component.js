import api from 'api';
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import CardRowComponent from './card-row/CardRow.component';
import { getOrders } from 'redux/actions';
import { cancellablePromise } from 'utils';
import { Spin, Space } from 'antd';

function CardsComponent({ getOrdersAction }) {
  const [ordersCom, setOrdersCom] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    async function fetchData() {
      const p = api.get('/orders').then(results => results.data.orders);
      const { promise, cancel } = cancellablePromise(p);
      promise.then(d => {
          setTimeout(() => {
            setLoading(false);
            getOrdersAction(d);
            setOrdersCom(d);
          }, 1000);
      });
      return cancel;
    }
    fetchData();

  }, [getOrdersAction])

  return (
    <React.Fragment>
      <div className="hero-wrap hero-bread" style={{ backgroundImage: 'url(images/bg_1.jpg)' }}>
        <div className="container">
          <div className="row no-gutters slider-text align-items-center justify-content-center">
            <div className="col-md-9  text-center">
              <p className="breadcrumbs"><span className="mr-2"><a href="index.html">Home</a></span> <span>Cart</span></p>
              <h1 className="mb-0 bread">My Cart</h1>
            </div>
          </div>
        </div>
      </div>

      <section className="ftco-section ftco-cart">
        <div className="container">
          <div className="row">
            <div className="col-md-12 ">
              <div className="cart-list">
                <table className="table">
                  <thead className="thead-primary">
                    <tr className="text-center">
                      <th>&nbsp;</th>
                      <th>&nbsp;</th>
                      <th>Product name</th>
                      <th>Price</th>
                      <th>Quantity</th>
                      <th>Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      ordersCom
                        && ordersCom.length
                        ? ordersCom.map(order => <CardRowComponent key={order._id} order={order} />)
                        : <tr className="text-center">
                          <td colSpan={6}>Not order yet!</td>
                        </tr>
                    }
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="row justify-content-end">
            <div className="col-lg-4 mt-5 cart-wrap ">
              <div className="cart-total mb-3">
                <h3>Coupon Code</h3>
                <p>Enter your coupon code if you have one</p>
                <form action="#" className="info">
                  <div className="form-group">
                    <label htmlFor="">Coupon code</label>
                    <input type="text" className="form-control text-left px-3" placeholder="" />
                  </div>
                </form>
              </div>
              <p><a href="checkout.html" className="btn btn-primary py-3 px-4">Apply Coupon</a></p>
            </div>
            <div className="col-lg-4 mt-5 cart-wrap ">
              <div className="cart-total mb-3">
                <h3>Estimate shipping and tax</h3>
                <p>Enter your destination to get a shipping estimate</p>
                <form action="#" className="info">
                  <div className="form-group">
                    <label htmlFor="">Country</label>
                    <input type="text" className="form-control text-left px-3" placeholder="" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="country">State/Province</label>
                    <input type="text" className="form-control text-left px-3" placeholder="" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="country">Zip/Postal Code</label>
                    <input type="text" className="form-control text-left px-3" placeholder="" />
                  </div>
                </form>
              </div>
              <p><a href="checkout.html" className="btn btn-primary py-3 px-4">Estimate</a></p>
            </div>
            <div className="col-lg-4 mt-5 cart-wrap ">
              <div className="cart-total mb-3">
                <h3>Cart Totals</h3>
                <p className="d-flex">
                  <span>Subtotal</span>
                  <span>$20.60</span>
                </p>
                <p className="d-flex">
                  <span>Delivery</span>
                  <span>$0.00</span>
                </p>
                <p className="d-flex">
                  <span>Discount</span>
                  <span>$3.00</span>
                </p>
                <hr />
                <p className="d-flex total-price">
                  <span>Total</span>
                  <span>$17.60</span>
                </p>
              </div>
              <p><a href="checkout.html" className="btn btn-primary py-3 px-4">Proceed to Checkout</a></p>
            </div>
          </div>
        </div>
      </section>
      {
        loading && <Space className="app-loading" size="middle"><Spin size="large" /> </Space>
      }
    </React.Fragment>
  )
}

function mapStateToProps({ ordersReducer }, ownProps) {
  return {
    orders: ordersReducer.orders
  }
}

function mapDispatchToProps(dispatch, ownProps) {
  return bindActionCreators({
    getOrdersAction: getOrders
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CardsComponent);