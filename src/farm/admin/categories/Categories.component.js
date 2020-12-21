import React, { useEffect, useState } from 'react';
import CategoryRowComponent from './category-row/CategoryRow.component';
import { Checkbox, Pagination, Tag, Modal, Button, Form, Input } from 'antd';
import api from 'api';
import moment from 'moment';

function CategoriesComponent() {
  const [categories, setCategories] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);
  const [visible, setVisible] = useState(false);
  const [form] = Form.useForm();

  useEffect(() => {
    api.get(`/categories/${page}/${10}`).then(results => {
      setCategories(results.data.categories);
      setTotalPage(results.data.count);
    })
    return () => {

    }
  }, [page]);

  function onChange(page) {
    setPage(page);
  };

  function onFinish(values) {
    addCategory(values);
  };

  function addCategory(data){
    data.created_at = moment().toISOString();
    api.post('/categories', { category: data }).then(result => {
      const category = result.data.category;
      if (category && Object.keys(category).length !== 0) {
        if (categories.length < 10) {
          categories.push(category);
        }
        setVisible(false);
        form.resetFields();
      }
    })
  }

  function onFinishFailed(errorInfo) {
    console.log('Failed:', errorInfo);
  };

  function handleCancel() {
    setVisible(false);
  };

  function showModal() {
    setVisible(true);
  };

  function hanelDeleteCategory(id){
    const results = categories.filter(c => c._id !== id);
    setCategories(results);
  }

  return (
    <React.Fragment>
      <table className="orders-table" style={{ backgroundColor: '#fff' }}>
        <thead>
          <tr>
            <td className="text-center" style={{ minWidth: 50 }}><Checkbox /></td>
            <td>Name</td>
            <td>Actions</td>
          </tr>
        </thead>
        <tbody>
          {
            categories
              && categories.length
              ? categories.map(category => <CategoryRowComponent key={category._id} category={category} hanelDeleteCategory={hanelDeleteCategory} />)
              : <tr>
                <td colSpan="3" className="text-center">Categories is empty!</td>
              </tr>
          }
        </tbody>
      </table>
      <div className="d-flex justify-between mt-20 ml-10 mr-10">
        <Tag onClick={showModal} color="magenta" className="" style={{ cursor: 'pointer', height: 32, lineHeight: '30px' }}>Add Category</Tag>
        <Pagination onChange={onChange} current={page} total={totalPage} style={{ textAlign: 'right' }} />
      </div>
      <Modal
        title="Add Category"
        visible={visible}
        onCancel={handleCancel}
        footer={null}
        width={300}
      >
        <Form 
          name="product-form" 
          layout='vertical' 
          form={form} 
          initialValues={{ category_title: '' }} 
          onFinish={onFinish} 
          onFinishFailed={onFinishFailed}
        >
          <Form.Item label="Name" name="category_title" rules={[{ required: true, message: 'Category name not valid!' }]}  >
            <Input />
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

export default CategoriesComponent;