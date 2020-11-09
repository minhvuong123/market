import api from 'api';
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import CardRowComponent from './card-row/CardRow.component';
import { getOrders, setLoading } from 'app-redux/actions';
import { cancellablePromise } from 'utils';
import { Button, Checkbox, Tag, Modal } from 'antd';
import { parseCurrentVND } from 'utils';

function CardsComponent({ getOrdersAction, setLoadingAction }) {
  const [ordersCom, setOrdersCom] = useState([]);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setLoadingAction(true);
    async function fetchData() {
      const p = api.get('/orders').then(results => results.data.orders);
      const { promise, cancel } = cancellablePromise(p);
      promise.then(d => {
          setTimeout(() => {
            setLoadingAction(false);
            getOrdersAction(d);
            setOrdersCom(d);
          }, 1000);
      });
      return cancel;
    }
    fetchData();

  }, [getOrdersAction, setLoadingAction])

  async function handleDelete(id) {
    const result = await api._delete('/orders/delete', {id});
    if (result.data.status === 'ok') {
      const ordersTemp = ordersCom.filter(o => o._id !== id);
      setOrdersCom(ordersTemp);
    }
  }

  function showModal(){
    setVisible(true);
  };

  function handleOk(e){
    setVisible(false);
  };

  function handleCancel(e){
    setVisible(false);
  };

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
                        ? ordersCom.map(order => <CardRowComponent key={order._id} order={order} handleDelete={handleDelete} />)
                        : <tr className="text-center">
                          <td colSpan={6}>Not order yet!</td>
                        </tr>
                    }
                  </tbody>
                </table>
              </div>
              <div className="card-buy d-flex justify-between align-center mt-30">
                <div className="card-choose">
                  <Checkbox>Chọn tất cả ({ordersCom.length})</Checkbox>
                  <Tag color="magenta" className="pointer">Xóa</Tag>
                </div>
                <div className="card-total mr-10 d-flex align-center">
                    Tổng tiền hàng (1 sản phẩm):  <span className="ml-10" style={{fontSize: 25, color: '#ff4d4f'}}>{parseCurrentVND(1000000)}</span>
                    <Button onClick={showModal} type="primary" danger className="btn-card-buy ml-15">Mua Hàng</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Modal
          title="Vui lòng thêm địa chỉ để nhận hàng"
          visible={visible}
          onOk={handleOk}
          onCancel={handleCancel}
        >
          <p>Check out is here</p>
        </Modal>
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
    getOrdersAction: getOrders,
    setLoadingAction: setLoading
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CardsComponent);