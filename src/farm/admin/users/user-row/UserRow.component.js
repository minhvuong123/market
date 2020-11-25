import React, { useEffect, useState } from 'react';
import { Checkbox, Tag, Modal, Button, Form, Input, Select } from 'antd';
import api from 'api';
import UploadComponent from 'farm/components/upload/Upload.component';
import moment from 'moment';

const { Option } = Select;

const layout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 18 },
};


function UserRowComponent({ user, handleDeleteUser }) {
  const [visible, setVisible] = useState(false);
  const [userCom, setUserCom] = useState();
  const [base64, setBase64] = useState('');

  useEffect(() => {
    setUserCom({ ...user, status: 'done' });
    return () => {

    }
  }, [user])

  function showModal() {
    setVisible(true);
  };


  function handleCancel() {
    setVisible(false);
  };

  function onFinish(values) {
    update(values);
  };

  function update(data) {
    data.user_image_base64 = base64;
    const mergeUser = Object.assign(userCom, data);

    api.patch('/users', { user: mergeUser }).then(result => {
      if (result.data.status === 'ok') {
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
  }

  function handleDelete(id) {
    api._delete('/users/delete', { id }).then(result => {
      if (result.data.status === 'ok') {
        handleDeleteUser(id);
      }
    })
  }

  return (
    <React.Fragment>
      <tr>
        <td className="text-center" style={{ minWidth: 50 }}><Checkbox /></td>
        <td>{userCom && userCom.user_name}</td>
        <td>
          <div style={{ maxWidth: 100 }}>
            <img src={`http://localhost:4000/${userCom && userCom.image_url}`} alt="" />
          </div>
        </td>
        <td>{userCom && userCom.user_email}</td>
        <td>{userCom && userCom.user_phone}</td>
        <td>{userCom && userCom.user_address}</td>
        <td>{userCom && moment(userCom.created_at).format('DD-MM-YYYY hh:mm')}</td>
        <td>
          <Tag onClick={showModal} color="magenta" style={{ cursor: 'pointer' }}>Edit</Tag>
          <Tag onClick={() => handleDelete(user._id)} color="magenta" style={{ cursor: 'pointer' }}>Delete</Tag>
        </td>
      </tr>
      <Modal
        title="Edit User"
        visible={visible}
        onCancel={handleCancel}
        footer={null}
      >
        <Form
          {...layout}
          name="basic"
          initialValues={{
            user_name: userCom && userCom.user_name,
            user_email: userCom && userCom.user_email,
            user_phone: userCom && userCom.user_phone,
            user_address: userCom && userCom.user_address,
            user_password: userCom && userCom.user_password,
            user_role: userCom && userCom.user_role,
            created_at: userCom && userCom.created_at
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Form.Item label="Avatar">
            <UploadComponent images={[userCom]} limit={1} handleChangeImage={handleChangeImage} />
          </Form.Item>
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
            <Select onChange={handleChange} style={{ width: 200 }}>
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

export default UserRowComponent;