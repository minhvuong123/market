import React, { useEffect, useState } from 'react';

import { Button, Checkbox } from 'antd';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import api from 'api';
import { parseCurrentVND } from 'utils'
import { getOrder, updateOrders } from 'redux/actions';
import OrderComponent from 'shopee/components/products/orders/order/Order.component';

function OrdersComponent({ ordersStore, getOrderAction, updateOrdersAction }) {
  const [checked, setChecked] = useState(false);
  const [orders, setOrders] = useState(ordersStore);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    if (ordersStore && ordersStore.length) {
      setOrders(ordersStore);
      const totalTemp = getTotal(ordersStore);
      setTotal(totalTemp);
    } else {
      api.get('/orders').then(function(result){
        result.data.forEach(order => {
          order.checked = false;
        });
        getOrderAction(result.data);
        const totalTemp = getTotal(result.data);
        setTotal(totalTemp);
      })
    }
    return () => {

    }
  }, [orders, getOrderAction, ordersStore])

  function onChange(e) {
    setChecked(e.target.checked);
    if (e.target.checked) {
      orders.forEach(order => order.checked = true);
    } else {
      orders.forEach(order => order.checked = false);
    }
    setOrders(orders);
    updateOrdersAction(orders);
  }

  function listenChecked(id, status) {
    orders.forEach(order => {
      if (order.order_id === id) {
        order.checked = status;
      }
    });
    const everyChecked = orders.every(order => order.checked === false);
    if (!everyChecked) {
      setChecked(true);
    } else {
      setChecked(false);
    }
  }

  function updateAmountOrder(id, amount) {
    orders.forEach(order => {
      if (order.order_id === id) {
        order.order_amount = amount;
      }
    });

    setOrders(orders);
    const totalTemp = getTotal(orders);
    setTotal(totalTemp);
  }

  function deleteOrder(id) {
    const ordersTemp = orders.filter(order => order.order_id !== id)
    setOrders(ordersTemp);
  }

  function getTotal(orders){
    return orders.reduce((total, currentValue) => total + currentValue.order_amount * currentValue.order_product.product_price, 0)
  }

  return (
    <div className="container">
      <div className="app-card">
        <div>
          <table className="orders-table" style={{backgroundColor: '#fff'}}>
            <thead>
              <tr>
                <td className="text-center" style={{minWidth: 50}}><Checkbox checked={checked} onChange={onChange} /></td>
                <td>Product</td>
                <td>Unit Price</td>
                <td>Amount</td>
                <td>Price</td>
                <td>Actions</td>
              </tr>
            </thead>
            <tbody>
              {
                orders && orders.length
                ?  orders.map(order => <OrderComponent key={order.order_id} order={order} listenChecked={listenChecked} updateAmountOrder={updateAmountOrder} deleteOrder={deleteOrder} />)
                : <tr>
                    <td colSpan={6}>Not found item.</td>
                  </tr>
              }
            </tbody>
          </table>
          <div className="card-purchase mt-30 d-flex justify-end align-center bg-white pt-10 pb-10">
            <span className="mr-10">Tổng tiền hàng: </span>
            <span className="mr-10">{parseCurrentVND(total)}</span>
            <div>
              <Button type="primary" danger>Mua hàng</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function mapStateToProps({ ordersReducer }, ownProps) {
  return {
    ordersStore: ordersReducer.orders
  }
}

function mapDispatchToProps(dispatch, ownProps) {
  return bindActionCreators({
    getOrderAction: getOrder,
    updateOrdersAction: updateOrders
  }, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(OrdersComponent);