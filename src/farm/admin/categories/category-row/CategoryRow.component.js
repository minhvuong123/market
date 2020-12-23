import React, { useEffect, useState } from 'react';
import { Checkbox, Tag, Modal, Button, Form, Input } from 'antd';
import api from 'api';

function CategoryRowComponent({ category, hanelDeleteCategory }) {
  const [categoryCom, setCategoryCom] = useState();
  const [visible, setVisible] = useState(false);
  const [checkEdit, setCheckEdit] = useState(false)
  const [form] = Form.useForm();

  useEffect(() => {
    setCategoryCom(category);
    return () => {
      
    }
  }, [category])

  function onFinish(values) {
    editCategory(values);
  };

  function editCategory(data){
    const mergeCategory = Object.assign(categoryCom, data);
    api.patch('/categories', { category:  mergeCategory }).then(result => {
      if (result.data.status === 'ok') {
        setVisible(false);
      }
    })
  }

  function deleteCategory(id){
    api._delete('/categories/delete', { id }).then(result => {
      if (result.data.status === 'ok') {
        hanelDeleteCategory(id);
      }
    })
  }

  function onFinishFailed(errorInfo) {
    console.log('Failed:', errorInfo);
  };

  function handleCancel() {
    setCheckEdit(false);
    setVisible(false);
  };

  function showModal() {
    setCheckEdit(true);
    setVisible(true);
  };
  return (
    <React.Fragment>
      <tr>
        <td className="text-center" style={{ minWidth: 50 }}><Checkbox checked={checkEdit} onChange={showModal} /></td>
        <td>{categoryCom && categoryCom.category_title}</td>
        <td>\][poiuy]
          <Tag onClick={() => deleteCategory(category._id)} color="magenta" style={{ cursor: 'pointer' }}>Delete</Tag>
        </td>
      </tr>
      <Modal
        title="Edit Category"
        visible={visible}
        onCancel={handleCancel}
        footer={null}
        width={300}
      >
        <Form name="product-form" layout='vertical' form={form} initialValues={{ category_title: category.category_title }} onFinish={onFinish} onFinishFailed={onFinishFailed}>
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

export default CategoryRowComponent;