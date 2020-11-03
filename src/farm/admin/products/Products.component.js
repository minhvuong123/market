import { Checkbox, Pagination, Tag, Modal, Button, Form, Input, Select } from 'antd';
import api from 'api';
import { supplier } from 'const';
import React, { useEffect, useState } from 'react';
import ProductRowComponent from './product-row/ProductRow.component';

const { Option } = Select;

function ProductsComponent() {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [visible, setVisible] = useState(false);

  function onChange(page) {
    setPage(page);
  };

  function handleCancel() {
    setVisible(false);
  };

  function onFinish(values) {
    setVisible(false);
  };

  function showModal() {
    setVisible(true);
  };

  function onFinishFailed(errorInfo) {
    console.log('Failed:', errorInfo);
  };

  function onChangeSelect(value) {
    console.log(`selected ${value}`);
  }

  function onBlurSelect() {
    console.log('blur');
  }

  function onFocusSelect() {
    console.log('focus');
  }

  function onSearchSelect(val) {
    console.log('search:', val);
  }

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
      <div className="d-flex justify-between mt-20 ml-10 mr-10">
        <Tag onClick={showModal} color="magenta" className="" style={{ cursor: 'pointer', height: 32, lineHeight: '30px' }}>Add Product</Tag>
        <Pagination onChange={onChange} current={page} total={50} style={{ textAlign: 'right' }} />
      </div>
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
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Form.Item style={{ marginBottom: 0 }} className="form-control-layout">
            <Form.Item label="Name" name="product_title" rules={[{ required: true, message: 'Proruct name not valid!' }]}  >
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
          {/* <Form.Item style={{ marginBottom: 0 }} className="form-control-layout">
            <Form.Item label="Images Link" name="product_images_link" >
              <UploadComponent images={productCom && productCom.product_images_link} limit={1} product_id={product._id} />
            </Form.Item>
            <Form.Item label="Images List" name="product_images_list" >
              <UploadComponent images={productCom && productCom.product_images_list} product_id={product._id} />
            </Form.Item>
          </Form.Item> */}
          <Form.Item style={{ marginBottom: 0 }} className="form-control-layout">
            <Form.Item label="Type" name="product_type" >
              <Input />
            </Form.Item>
            <Form.Item label="Origin" name="product_origin" rules={[{ required: true, message: 'Product origin not valid!' }]}  >
              <Input />
            </Form.Item>
          </Form.Item>
          <Form.Item label="Supplier" name="product_supplier" rules={[{ required: true, message: 'Product supplier not valid!' }]}  >
            <Select
              showSearch
              placeholder="Select a person"
              optionFilterProp="children"
              onChange={onChangeSelect}
              onFocus={onFocusSelect}
              onBlur={onBlurSelect}
              onSearch={onSearchSelect}
              filterOption={(input, option) =>
                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
              }
            >
              {
                supplier.map(s => <Option key={s.supplier_key} value={s.supplier_value}>{s.supplier_value}</Option>)
              }
            </Select>
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

export default ProductsComponent;