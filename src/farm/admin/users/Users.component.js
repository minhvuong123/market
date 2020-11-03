import React, { useEffect, useState } from 'react';
import { Checkbox, Pagination, Tag, Modal, Button, Form, Input, Select } from 'antd';
import api from 'api';
import UserRowComponent from './user-row/UserRow.component';

const { Option } = Select;

function UsersComponent() {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [visible, setVisible] = useState(false);

  function onChange(page){
    setPage(page);
  };

  function showModal() {
    setVisible(true);
  };


  function handleCancel() {
    setVisible(false);
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

  useEffect(() => {
    api.get(`/users/${page}/${10}`).then(result => {
      setUsers(result.data.users);
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
            <td>Email</td>
            <td>Phone</td>
            <td>Address</td>
            <td>Created</td>
            <td>Actions</td>
          </tr>
        </thead>
        <tbody>
          {
            users 
            && users.length 
            ? users.map(user => <UserRowComponent key={user._id} user={user} />) 
            : <React.Fragment>
                <tr>
                  <td colSpan={7} className="text-center">User not found!</td>
                </tr>
              </React.Fragment>
          }
        </tbody>
      </table>
      <div className="d-flex justify-between mt-20 ml-10 mr-10">
        <Tag onClick={showModal} color="magenta" className="" style={{ cursor: 'pointer', height: 32, lineHeight: '30px' }}>Add User</Tag>
        <Pagination onChange={onChange} current={page} total={50} style={{ textAlign: 'right' }} />
      </div>
      <Modal
        title="Edit User"
        visible={visible}
        onCancel={handleCancel}
        footer={null}
      >
        <Form
          name="basic"
          layout="vertical"
          initialValues={{
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Form.Item label="Username" name="user_name" rules={[{ required: true, message: 'Username not valid!' }]} >
            <Input />
          </Form.Item>
          <Form.Item label="Email" name="user_email" rules={[{ required: true, message: 'Email not valid!' }]} >
            <Input />
          </Form.Item>
          <Form.Item label="Phone" name="user_phone" rules={[{ required: true, message: 'Phone not valid!' }]} >
            <Input />
          </Form.Item>
          <Form.Item label="Address" name="user_address" rules={[{ required: true, message: 'Address not valid!' }]} >
            <Input />
          </Form.Item>
          <Form.Item label="Role" name="user_role" rules={[{ required: true, message: 'Role not valid!' }]} >
            <Select onChange={handleChange} >
              <Option key="normal">Normal</Option>
              <Option key="admin">Admin</Option>
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

export default UsersComponent;