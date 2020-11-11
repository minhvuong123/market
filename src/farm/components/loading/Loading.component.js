import React from 'react';

import { Spin, Space } from 'antd';
import { connect } from 'react-redux';

function LoadingComponent({ loading }) {
  console.log(loading)
  return (
    <React.Fragment>
      {
        loading && <Space className="app-loading" size="middle"><Spin size="large" /> </Space>
      }
    </React.Fragment>
  )
}


function mapStateToProps({ ordersReducer, loadingReducer }, ownProps) {
  return {
    loading: loadingReducer.loading
  }
}

export default connect(mapStateToProps, null)(LoadingComponent);