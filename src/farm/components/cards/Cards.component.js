import api from 'api';
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import CardRowComponent from './card-row/CardRow.component';
import { getOrders, setLoading } from 'app-redux/actions';
import { cancellablePromise } from 'utils';
import { Button, Checkbox, Tag, Modal, Form, Input, Select } from 'antd';
import { parseCurrentVND } from 'utils';
import { countries } from 'const';
import jwt from 'jsonwebtoken';
import moment from 'moment';

const { Option } = Select;

const layout = {
  labelCol: { span: 0 },
  wrapperCol: { span: 24 },
};

function CardsComponent({ getOrdersAction, setLoadingAction }) {
  const [ordersCom, setOrdersCom] = useState([]);
  const [visible, setVisible] = useState(false);
  const [total, setTotal] = useState(0);

  // address
  const [states, setStates] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [wards, setWards] = useState([]);

  // form
  const [form] = Form.useForm();

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
          setTotal(calTotalMoney(d));
        }, 1000);
      });
      return cancel;
    }
    fetchData();

  }, [getOrdersAction, setLoadingAction])

  async function handleDelete(id) {
    const result = await api._delete('/orders/delete', { id });
    if (result.data.status === 'ok') {
      const ordersTemp = ordersCom.filter(o => o._id !== id);
      setOrdersCom(ordersTemp);
    }
  }

  function updateOrders(_id, order_amount) {
    ordersCom.forEach(o => {
      if (o._id === _id) {
        o.order_amount = order_amount
      }
    })
    setTotal(calTotalMoney(ordersCom));
  }

  function calTotalMoney(orders) {
    let result = 0;
    orders.forEach(order => {
      result += order.order_product.product_price * order.order_amount;
    });

    return result;
  }

  function showModal() {
    setStates(countries);
    setVisible(true);
  };

  function handleCancel(e) {
    setVisible(false);
  };

  function onFinish(values) {
    const token = localStorage.getItem('token');
    const decoded = jwt.verify(token, 'kiwi');

   if (decoded){
    // update status for orders
    ordersCom.forEach(order => {
      order.order_status = 'approved'
    })

    const results = {
      transaction_user: decoded._doc._id,
      transaction_fullname: values.fullname,
      transaction_phone: values.phone,
      transaction_state: JSON.parse(values.state).name,
      transaction_district: JSON.parse(values.district).name,
      transaction_ward: JSON.parse(values.ward).name,
      transaction_street: values.street,
      transaction_orders: ordersCom,
      created_at: moment().toISOString()
    }

    api.post('/transaction', {transaction : results}).then(result => {
      if (result.data.status === 'ok'){
        // handle message to success for transaction
        setVisible(false);
        form.resetFields();
      }
    });
   }
  };

  function onFinishFailed(errorInfo) {
    console.log('Failed:', errorInfo);
  };

  function handleChangeState(value) {
    value = JSON.parse(value);
    const districtArray = countries.find(country => country.id === value.id).districts || [];
    setDistricts(districtArray);
  }

  function handleChangeDistrict(value) {
    value = JSON.parse(value);
    const wardArray = districts.find(district => district.id === value.id).wards || [];
    setWards(wardArray);
  }

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
                        ? ordersCom.map(order => <CardRowComponent key={order._id} order={order} updateOrders={updateOrders} handleDelete={handleDelete} />)
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
                  Tổng tiền hàng (1 sản phẩm):  <span className="ml-10" style={{ fontSize: 25, color: '#ff4d4f' }}>{parseCurrentVND(total)}</span>
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
        onCancel={handleCancel}
        footer={null}
      >
        <Form
          {...layout}
          name="basic"
          form={form}
          initialValues={{
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Form.Item name="fullname">
            <Input placeholder="Họ và tên" />
          </Form.Item>
          <Form.Item name="phone" rules={[{ required: true, message: 'Phone not valid!' }]} >
            <Input placeholder="Số điện thoại" />
          </Form.Item>
          <Form.Item name="state" rules={[{ required: true, message: 'State not valid!' }]} >
            <Select placeholder="Tỉnh/Thành Phố" onChange={handleChangeState}>
              {
                states
                && states.map(state => <Option key={state.id} value={JSON.stringify(state)}>{state.name}</Option>)
              }
            </Select>
          </Form.Item>
          <Form.Item name="district" rules={[{ required: true, message: 'District not valid!' }]} >
            <Select placeholder="Quận/Huyện" onChange={handleChangeDistrict}>
              {
                districts
                && districts.map(district => <Option key={district.id} value={JSON.stringify(district)}>{district.name}</Option>)
              }
            </Select>
          </Form.Item>
          <Form.Item name="ward" rules={[{ required: true, message: 'Ward not valid!' }]} >
            <Select placeholder="Phường/Xã">
            {
                wards
                && wards.map(ward => <Option key={ward.name} value={JSON.stringify(ward)}>{ward.name}</Option>)
              }
            </Select>
          </Form.Item>
          <Form.Item name="street" rules={[{ required: true, message: 'Street not valid!' }]} >
            <Input placeholder="Tòa nhá, Tên đường ..." />
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

function mapStateToProps({ ordersReducer }) {
  return {
    orders: ordersReducer.orders
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    getOrdersAction: getOrders,
    setLoadingAction: setLoading
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CardsComponent);