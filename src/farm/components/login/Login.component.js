import React, { useEffect } from 'react';
import { Form, Input, Button } from 'antd';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { setLoading } from 'app-redux/actions';
import api from 'api';

function LoginComponent({ setLoadingAction }) {

  useEffect(() => {
    setLoadingAction(true);
    setTimeout(() => {
      setLoadingAction(false);
    }, 1000);
  }, [setLoadingAction])

  function onFinishFailed(errorInfo) {
    console.log('Failed:', errorInfo);
  };

  function handleCancel() {

  };

  function onFinish(values) {
    api.post('/users/login', { user: values }).then(result => {
      if (result.data.status === 'ok') {
        
      }
    });
  };

  return (
    <React.Fragment>
      <div className="margin-auto mt-30 mb-30" style={{ width: 400 }}>
        <Form name="basic" layout="vertical"
          initialValues={{
            user_name: '',
            user_password: '',
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Form.Item label="Username" name="user_name" rules={[{ required: true, message: 'Username not valid!' }]} >
            <Input />
          </Form.Item>
          <Form.Item label="Password" name="user_password" rules={[{ required: true, message: 'Password not valid!' }]} >
            <Input.Password />
          </Form.Item>
          <Form.Item>
            <Button className="mr-30" onClick={handleCancel}>Cancel</Button>
            <Button type="primary" htmlType="submit">Confirm</Button>
          </Form.Item>
        </Form>
      </div>
    </React.Fragment>
  )
}


function mapDispatchToProps(dispatch, ownProps) {
  return bindActionCreators({
    setLoadingAction: setLoading
  }, dispatch);
}

export default connect(null, mapDispatchToProps)(LoginComponent);