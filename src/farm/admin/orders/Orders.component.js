import React, { useState, useEffect } from 'react';
import OrderRowComponent from './order-row/OrderRow.component';
import { Pagination } from 'antd';
import api from 'api';

function OrdersComponent() {
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    api.get(`/orders/${page}/${10}`).then(results => {
      setOrders(results.data.orders);
      setTotalPage(results.data.count);
    })
    return () => {

    }
  }, [page]);

  function onChange(page) {
    setPage(page);
  };

  return (
    <React.Fragment>
      <table className="orders-table" style={{ backgroundColor: '#fff' }}>
        <thead>
          <tr>
            <td className="text-center" style={{ minWidth: 50 }}>&nbsp;</td>
            <td>Product</td>
            <td>Price</td>
            <td>Amount</td>
            <td>Status</td>
            <td>Transaction</td>
            <td>Created</td>
            <td>Actions</td>
          </tr>
        </thead>
        <tbody>
          {
            orders
              && orders.length
              ? orders.map(order => <OrderRowComponent key={order._id} order={order}/>)
              : <tr>
                <td colSpan="3" className="text-center">Orders is empty!</td>
              </tr>
          }
        </tbody>
      </table>
      <Pagination onChange={onChange} current={page} total={totalPage} style={{ textAlign: 'right' }} />
    </React.Fragment>
  )
}

export default OrdersComponent;