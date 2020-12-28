import React, { useState, useEffect } from 'react';
import TransactionRowComponent from './transaction-row/TransactionRow.component';
import { Pagination } from 'antd';
import api from 'api';

function TransactionsComponent() {
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    api.get(`/transaction/${page}/${10}`).then(results => {
      setTransactions(results.data.transactions);
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
            <td>Full name</td>
            <td>Phone</td>
            <td>State</td>
            <td>District</td>
            <td>Ward</td>
            <td>Street</td>
            <td>Status</td>
            <td>Created</td>
            <td>Actions</td>
          </tr>
        </thead>
        <tbody>
          {
            transactions
              && transactions.length
              ? transactions.map(order => <TransactionRowComponent key={order._id} transaction={order}/>)
              : <tr>
                <td colSpan="3" className="text-center">Transactions is empty!</td>
              </tr>
          }
        </tbody>
      </table>
      <Pagination onChange={onChange} current={page} total={totalPage} style={{ textAlign: 'right' }} />
    </React.Fragment>
  )
}

export default TransactionsComponent;