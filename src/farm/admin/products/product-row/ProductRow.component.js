import React, { useEffect, useState } from 'react';
import { Checkbox, Tag, Modal, Button, Form, Input, Select } from 'antd';
import UploadComponent from 'farm/components/upload/Upload.component';
import api from 'api';
import moment from 'moment';

const { Option } = Select;

function ProductRowComponent({ product }) {
  const [visible, setVisible] = useState(false);
  const [productCom, setProductCom] = useState();
  const [categories, setCategories] = useState();
  const [base64, setBase64] = useState('');
  const [checkEdit, setCheckEdit] = useState(false)

  useEffect(() => {
    api.get(`/categories`).then(result => {
      setCategories(result.data.categories);
      setProductCom(product);
    })
    return () => {

    }
  }, [product])

  function showModal() {
    setCheckEdit(true);
    setVisible(true);
  };

  function handleCancel() {
    setCheckEdit(false);
    setVisible(false);
  };

  function onFinish(values) {
    update(values);
  };

  function update(data) {
    data.product_image_base64 = base64;
    const mergeProduct = Object.assign(productCom, data);

    api.patch('/products', { product: mergeProduct }).then(result => {
      if (result.data.status === 'ok') {
        setVisible(false);
      }
    })
  }

  function onFinishFailed(errorInfo) {
    console.log('Failed:', errorInfo);
  };

  function handleChangeImage(base64, type) {
    setBase64(base64);
  }

  function handleChange(value) {
    console.log(`Selected: ${value}`);
  }

  return (
    <React.Fragment>
      <tr>
        <td className="text-center" style={{ minWidth: 50 }}><Checkbox checked={checkEdit} onChange={showModal} /></td>
        <td>{productCom && productCom.product_title}</td>
        <td>
          <div style={{ maxWidth: 100 }}>
            {
              productCom
              && productCom.product_images_link[0]
              &&  <img src={`http://localhost:4000/${productCom && productCom.product_images_link[0].image_url}`} alt="" />
            }
          </div>
        </td>
        <td>{productCom && productCom.product_price}</td>
        <td>{productCom && productCom.product_amount}</td>
        <td>{productCom && moment(productCom.created_at).format('DD-MM-YYYY hh:mm')}</td>
        <td>
          <Tag color="magenta" style={{ cursor: 'pointer' }}>Delete</Tag>
        </td>
      </tr>
      <Modal
        title="Edit Product"
        visible={visible}
        onCancel={handleCancel}
        footer={null}
        width={750}
      >
        <Form
          name="product-form"
          layout='vertical'
          initialValues={{
            product_title: productCom && productCom.product_title,
            product_price: productCom && productCom.product_price,
            product_amount: productCom && productCom.product_amount,
            product_des: productCom && productCom.product_des,
            product_images_link: productCom && productCom.product_images_link,
            product_images_list: productCom && productCom.product_images_list,
            product_rate: productCom && productCom.product_rate,
            product_size: productCom && productCom.product_size,
            product_type: productCom && productCom.product_type,
            product_origin: productCom && productCom.product_origin,
            product_supplier: productCom && productCom.product_supplier,
            product_category: productCom && productCom.product_category,
            product_discount: productCom && productCom.product_discount
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Form.Item style={{ marginBottom: 0 }} className="form-control-layout">
            <Form.Item label="Name" name="product_title" rules={[{ required: true, message: 'Product name not valid!' }]}  >
              <Input />
            </Form.Item>
            <Form.Item label="Price" name="product_price" rules={[{ required: true, message: 'Product price not valid!' }]}  >
              <Input />
            </Form.Item>
          </Form.Item>
          <Form.Item style={{ marginBottom: 0 }} className="form-control-layout">
            <Form.Item label="Amount" name="product_amount" rules={[{ required: true, message: 'Product amount not valid!' }]}  >
              <Input />
            </Form.Item>
            <Form.Item label="Discount" name="product_discount" rules={[{ required: true, message: 'Product discount not valid!' }]}  >
              <Input />
            </Form.Item>
          </Form.Item>
          <Form.Item style={{ marginBottom: 0 }} className="form-control-layout">
            <Form.Item label="Images Link" name="product_images_link" >
              <UploadComponent images={productCom && productCom.product_images_link} limit={1} product_id={product._id}  handleChangeImage={handleChangeImage}  />
            </Form.Item>
            <Form.Item label="Images List" name="product_images_list" >
              <UploadComponent images={productCom && productCom.product_images_list} product_id={product._id} />
            </Form.Item>
          </Form.Item>
          <Form.Item style={{ marginBottom: 0 }} className="form-control-layout">
            <Form.Item label="Type" name="product_type" >
              <Select onChange={handleChange}>
                {
                  categories && categories.map(c => <Option key={c._id} value={c._id}>{c.category_title}</Option>)
                }
              </Select>
            </Form.Item>
            <Form.Item label="Origin" name="product_origin" rules={[{ required: true, message: 'Product origin not valid!' }]}  >
              <Input />
            </Form.Item>
          </Form.Item>
          <Form.Item label="Supplier" name="product_supplier" rules={[{ required: true, message: 'Product supplier not valid!' }]}  >
            <Input />
          </Form.Item>

          <Form.Item label="Description" name="product_des" rules={[{ required: true, message: 'Product description not valid!' }]}  >
            <Input.TextArea />
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

export default ProductRowComponent;
