import React, { useState } from 'react';
import OrderRowComponent from './order-row/OrderRow.component';
import { Checkbox, Pagination } from 'antd';

function OrdersComponent() {
  const [page, setPage] = useState(1);

  function onChange(page) {
    setPage(page);
  };

  return (
    <React.Fragment>
      <table className="orders-table" style={{ backgroundColor: '#fff' }}>
        <thead>
          <tr>
            <td className="text-center" style={{ minWidth: 50 }}><Checkbox /></td>
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
          <OrderRowComponent />
        </tbody>
      </table>
      <Pagination onChange={onChange} current={page} total={50} style={{ textAlign: 'right' }} />
    </React.Fragment>
  )
}

export default OrdersComponent;