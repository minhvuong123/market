import { Checkbox, Tag, Modal, Button, Form, Select } from 'antd';
import { order_status } from 'const';
import React, { useState } from 'react';
import { parseCurrentVND } from 'utils';
import { api_url } from 'const';
import moment from 'moment';

const { Option } = Select;

function OrderRowComponent({ order, transaction_status }) {
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

  function onFinish(values) {
    setVisible(false);
  };
  function onFinishFailed(errorInfo) {
    console.log('Failed:', errorInfo);
  };

  function handleChange(value) {
    console.log(`Selected: ${value}`);
  }

  return (
    <React.Fragment>
      <tr>
        <td className="text-center" style={{ minWidth: 50 }}>
          <Checkbox disabled={transaction_status} checked={checkEdit} onChange={showModal} />
        </td>
        <td>
          <div className="d-flex align-center">
            <img style={{ width: 100 }} src={`${api_url}/${order.order_product.product_images_link[0].image_url}`} alt={order.order_product.product_title} />
            <div className="text-center" style={{ width: 120, maxWidth: 120, padding: '0 10px' }}>
              {order.order_product.product_title}
            </div>
          </div>
        </td>
        <td>{parseCurrentVND(order.order_amount * order.order_product.product_price)}</td>
        <td>{order.order_amount}</td>
        <td>{order.order_status}</td>
        <td>Transaction</td>
        <td>{moment(order.created_at).format('DD-MM-YYYY hh:mm')}</td>
        <td>
          {
            transaction_status 
            ? ''
            : <Tag color="magenta" className="" style={{ cursor: 'pointer', height: 32, lineHeight: '30px' }}>Delete</Tag>
          }
        </td>
      </tr>
      <Modal
        title="Edit Product"
        visible={visible}
        onCancel={handleCancel}
        footer={null}
        width={300}
      >
        <Form
          name="product-form"
          layout='vertical'
          initialValues={{
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Form.Item label="Status" name="product_title" rules={[{ required: true, message: 'Proruct name not valid!' }]}  >
            <Select onChange={handleChange}>
              {
                order_status.map(o => <Option key={o.order_key} value={o.order_value}>{o.order_value}</Option>)
              }
            </Select>
          </Form.Item>
          <Form.Item>
            <Button onClick={handleCancel}>Cancel</Button>
            <Button type="primary" htmlType="submit">Confirm</Button>
          </Form.Item>
        </Form>
      </Modal>
    </React.Fragment>
  )
}

export default OrderRowComponent;