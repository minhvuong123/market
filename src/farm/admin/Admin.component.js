import React, { useEffect, useState } from 'react';
import { Layout, Menu } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from '@ant-design/icons';
import { NavLink } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { setLoading } from 'app-redux/actions';
import { pageTitle } from 'const';

import 'antd/dist/antd.css';
import UserComponent from './users/Users.component';
import ProductsComponent from './products/Products.component';
import CategoriesComponent from './categories/Categories.component';
import OrdersComponent from './orders/Orders.component';
import TransactionsComponent from './transactions/Transactions.component';

const { Header, Sider, Content } = Layout;


function AdminComponent({ location, keyPath, setLoadingAction }) {
  const [collapsed, setCollapsed] = useState(false);
  const [pathRoute, setPathRoute] = useState('');

  function toggle() {
    setCollapsed(!collapsed);
  };

  function indexSubPage(pages, path) {
    let index = -1;
    pages.forEach((page, i) => {
      if (path.indexOf(page) !== -1){
        index = i;
      }
    })
    return index;
  }

  function getSubPage(path) {
    return path.slice(1);
  }

  function renderAdminSubPage(path) {
    const subPages = ['admin', 'admin/users', 'admin/products', 'admin/categories', 'admin/orders', 'admin/transaction'];
    const index = indexSubPage(subPages, path);
    switch(subPages[index]) {
      case subPages[0]:
        return <UserComponent />
      case subPages[1]:
        return <UserComponent />
      case subPages[2]:
        return <ProductsComponent />
      case subPages[3]:
        return <CategoriesComponent />
      case subPages[4]:
        return <OrdersComponent />
      case subPages[5]:
        return <TransactionsComponent />
      default:
        return;
    }
  }

  useEffect(() => {
    setLoadingAction(true);
    setTimeout(() => {
      setLoadingAction(false);
      setPathRoute(location.pathname);
    }, 1000);
    return () => {
      // 
    }
  }, [location.pathname, setLoadingAction])
  return (
    <Layout className="admin-page">
      <Sider className="site-layout-background" trigger={null} collapsible collapsed={collapsed}>
        <div className="logo" />
        <Menu theme="light" mode="inline" defaultSelectedKeys={[keyPath]}>
          <Menu.Item key="users" icon={<UserOutlined />}><NavLink to="/admin/users">Users</NavLink></Menu.Item>
          <Menu.Item key="products" icon={<VideoCameraOutlined />}><NavLink to="/admin/products">Products</NavLink></Menu.Item>
          <Menu.Item key="categories" icon={<UploadOutlined />}><NavLink to="/admin/categories">Categories</NavLink></Menu.Item>
          <Menu.Item key="orders" icon={<UploadOutlined />}><NavLink to="/admin/orders">Orders</NavLink></Menu.Item>
          <Menu.Item key="transaction" icon={<UploadOutlined />}><NavLink to="/admin/transaction">Transaction</NavLink></Menu.Item>
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background admin-header">
          { React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, { className: 'trigger', onClick: toggle}) }
          <h3 className="admin-title">{ pageTitle[getSubPage(pathRoute)] }</h3>
        </Header>
        <Content
          className="site-layout-background"
          style={{
            margin: '24px 16px',
            minHeight: 280,
          }}
        >
          {
            renderAdminSubPage(pathRoute)
          }
        </Content>
      </Layout>
    </Layout>
  );
}

function mapDispatchToProps(dispatch, ownProps) {
  return bindActionCreators({
    setLoadingAction: setLoading
  }, dispatch);
}


export default connect(null, mapDispatchToProps)(AdminComponent);