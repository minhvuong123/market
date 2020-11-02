import React, { useEffect, useState } from 'react';
import { Button, Checkbox, InputNumber } from 'antd';
import HorizontalProductComponent from 'shopee/components/products/horizontal/HorizontalProduct.component';

function OrderComponent({ order, listenChecked, updateAmountOrder, deleteOrder }) {
  const product = order.order_product;
  const [checked, setChecked] = useState(false);
  const [amount, setAmount] = useState(order.order_amount);
  function onChange(e) {
    setChecked(e.target.checked);
    listenChecked(order.order_id, e.target.checked);
  }

  function onChangeAmount(value) {
    setAmount(value);
    updateAmountOrder(order.order_id, value);
  }

  function onDeleteOrder(id) {
    deleteOrder(id);
  }

  useEffect(() => {
    setChecked(order.checked);
    return () => {

    }
  }, [order.checked, order.order_amount])
  return (
    <tr>
      <td className="text-center" style={{minWidth: 50}}><Checkbox checked={checked} onChange={onChange} /></td>
      <td><HorizontalProductComponent product={product} /></td>
      <td>{ order.order_product.product_price }</td>
      <td><InputNumber min={0} max={order.order_product.product_amount} defaultValue={amount} onChange={onChangeAmount} /></td>
      <td>{ order.order_product.product_price * amount }</td>
      <td><Button onClick={() => onDeleteOrder(order.order_id)} danger>Delete</Button></td>
    </tr>
  )
}


export default OrderComponent;