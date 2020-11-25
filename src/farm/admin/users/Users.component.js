import React, { useEffect, useState } from 'react';
import { Checkbox, Pagination, Tag, Modal, Button, Form, Input, Select } from 'antd';
import api from 'api';
import UserRowComponent from './user-row/UserRow.component';
import UploadComponent from 'farm/components/upload/Upload.component';
import moment from 'moment';
import useDebounce from 'farm/components/debounce/Debounce.component';

const { Option } = Select;

function UsersComponent() {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);
  const [visible, setVisible] = useState(false);
  const [base64, setBase64] = useState('');
  const [typeImage, setTypeImage] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  useEffect(() => {
    if (debouncedSearchTerm) {
      // searchCharacters(debouncedSearchTerm).then(results => {

      // });
      console.log("asdjkahsdadhsa");
    } else {
      api.get(`/users/${page}/${10}`).then(result => {
        setUsers(result.data.users);
        setTotalPage(result.data.count);
      })
    }

    return () => {

    }
  }, [page, debouncedSearchTerm])

  function onChange(page) {
    setPage(page);
  };

  function showModal() {
    setVisible(true);
  };


  function handleCancel() {
    setVisible(false);
  };

  function onFinish(values) {
    addUser(values);
  };

  function addUser(data) {
    data.user_image_base64 = base64;
    data.created_at = moment().toISOString();

    api.post('/users', { user: data, typeImage }).then(result => {
      const user = result.data.user;
      if (user && Object.keys(user).length !== 0) {
        users.push(user);
        setVisible(false);
      }
    })
  }

  function onFinishFailed(errorInfo) {
    console.log('Failed:', errorInfo);
  };

  function handleChange(value) {
    console.log(`Selected: ${value}`);
  }

  function handleChangeImage(base64, type) {
    setBase64(base64);
    setTypeImage(type);
  }

  function handleSearch(e) {
    setSearchTerm(e.target.value);
    console.log(e.target.value);
  }

  function handleDeleteUser(id) {
    const results = users.filter(c => c._id !== id);
    setUsers(results);
  }

  return (
    <React.Fragment>
      <div className="users-search margin-auto mt-20 mb-20" style={{ width: '50%' }}>
        <Input onChange={handleSearch} placeholder="Enter key to search ..." />
      </div>
      <div className="ml-20 mr-20">
        <table className="orders-table" style={{ backgroundColor: '#fff' }}>
          <thead>
            <tr>
              <td className="text-center" style={{ minWidth: 50 }}><Checkbox /></td>
              <td>Name</td>
              <td>Avatar</td>
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
                ? users.map(user => <UserRowComponent key={user._id} user={user} handleDeleteUser={handleDeleteUser} />)
                : <React.Fragment>
                  <tr>
                    <td colSpan={8} className="text-center">User not found!</td>
                  </tr>
                </React.Fragment>
            }
          </tbody>
        </table>
      </div>
      <div className="d-flex justify-between mt-20 ml-20 mr-20">
        <Tag onClick={showModal} color="magenta" className="" style={{ cursor: 'pointer', height: 32, lineHeight: '30px' }}>Add User</Tag>
        <Pagination onChange={onChange} current={page} total={totalPage} style={{ textAlign: 'right' }} />
      </div>
      <Modal title="Edit User" visible={visible} onCancel={handleCancel} footer={null} >
        <Form name="basic" layout="vertical"
          initialValues={{
            user_name: '',
            user_email: '',
            user_phone: '',
            user_address: '',
            user_password: '',
            user_role: ''
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Form.Item label="Avatar">
            <UploadComponent images={[]} limit={1} handleChangeImage={handleChangeImage} />
          </Form.Item>
          <Form.Item label="Username" name="user_name" rules={[{ required: true, message: 'Username not valid!' }]} >
            <Input />
          </Form.Item>
          <Form.Item label="Password" name="user_password" rules={[{ required: true, message: 'Password not valid!' }]} >
            <Input.Password />
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