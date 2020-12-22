import { Checkbox, Tag, Modal } from 'antd';
import React, { useState } from 'react';
import OrderRowComponent from 'farm/admin/orders/order-row/OrderRow.component';
import moment from 'moment';

function TransactionRowComponent({ transaction }) {
  const [visible, setVisible] = useState(false);
  const [checkEdit, setCheckEdit] = useState(false)

  function showModal() {
    setCheckEdit(true);
    setVisible(true);
  };

  function handleCancel() {
    setVisible(false);
    setCheckEdit(false);
  };

  return (
    <React.Fragment>
      <tr>
        <td className="text-center" style={{ minWidth: 50 }}><Checkbox checked={checkEdit} onChange={showModal} /></td>
        <td>{transaction.transaction_fullname}</td>
        <td>{transaction.transaction_phone}</td>
        <td>{transaction.transaction_state}</td>
        <td>{transaction.transaction_district}</td>
        <td>{transaction.transaction_ward}</td>
        <td>{transaction.transaction_street}</td>
        <td>{transaction.transaction_status}</td>
        <td>{moment(transaction.created_at).format('DD-MM-YYYY hh:mm')}</td>
        <td>
          <Tag color="magenta" className="" style={{ cursor: 'pointer', height: 32, lineHeight: '30px' }}>Delete</Tag>
        </td>
      </tr>
      <Modal
        title="Transaction Detail"
        visible={visible}
        onCancel={handleCancel}
        footer={null}
        width={850}
      >
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
              <td></td>
            </tr>
          </thead>
          <tbody>
            {
              transaction.transaction_orders.map(order => <OrderRowComponent key={order._id} order={order} transaction_status={true} />)
            }
          </tbody>
        </table>
      </Modal>
    </React.Fragment>
  )
}

export default TransactionRowComponent;