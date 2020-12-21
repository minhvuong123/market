import React, { useEffect } from 'react';
import { Form, Input, Button } from 'antd';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { setLoading, setToken } from 'app-redux/actions';
import api from 'api';
import moment from 'moment';

function LoginComponent({ history, loading, setLoadingAction, setTokenAction }) {

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
    values.created_at = moment().toISOString();
    api.post('/users/login', { user: values }).then(result => {
      if (result.data.status === 'ok') {
        // save token to localStorage
        localStorage.setItem('token', result.data.token);
        setTokenAction(result.data.token);
        history.push('/');
      }
    });
  };

  return (
    <React.Fragment>
      {
        !loading
          ? <div className="margin-auto mt-30 mb-30" style={{ width: 400 }}>
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
          : ""
      }
    </React.Fragment>
  )
}

function mapStateToProps({ loadingReducer }) {
  return {
    loading: loadingReducer.loading
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    setLoadingAction: setLoading,
    setTokenAction: setToken
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginComponent);