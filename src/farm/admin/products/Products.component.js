import { Checkbox, Pagination } from 'antd';
import api from 'api';
import React, { useEffect, useState } from 'react';
import ProductRowComponent from './product-row/ProductRow.component';

function ProductsComponent() {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);

  function onChange(page) {
    setPage(page);
  };

  useEffect(() => {
    api.get(`/products/${page}/${10}`).then(result => {
      setProducts(result.data.products);
    })
    return () => {

    }
  }, [page])
  return (
    <React.Fragment>
      <table className="orders-table" style={{ backgroundColor: '#fff' }}>
        <thead>
          <tr>
            <td className="text-center" style={{ minWidth: 50 }}><Checkbox /></td>
            <td>Name</td>
            <td>Image</td>
            <td>Price</td>
            <td>Amount</td>
            <td>Created</td>
            <td>Actions</td>
          </tr>
        </thead>
        <tbody>
          {
            products
              && products.length
              ? products.map(product => <ProductRowComponent key={product._id} product={product} />)
              : <React.Fragment>
                <tr>
                  <td colSpan={7} className="text-center">Product not found!</td>
                </tr>
              </React.Fragment>
          }
        </tbody>
      </table>
      <Pagination onChange={onChange} current={page} total={50} style={{ textAlign: 'right', marginTop: 20 }} />
    </React.Fragment>
  )
}

export default ProductsComponent;