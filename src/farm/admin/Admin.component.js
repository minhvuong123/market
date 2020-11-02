import React, { useEffect, useState } from 'react';
import {Layout, Menu } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from '@ant-design/icons';
import { NavLink } from 'react-router-dom';

import 'antd/dist/antd.css';
import UserComponent from './users/Users.component';
import ProductsComponent from './products/Products.component';

const { Header, Sider, Content } = Layout;


function AdminComponent({location }) {
  const [collapsed, setCollapsed] = useState(false);
  const [pathRoute, setPathRoute] = useState('');

  function toggle() {
    setCollapsed(!collapsed);
  };

  function indexSubPage(pages, path) {
    let index = -1;
    pages.map((page, i) => {
      if (path.indexOf(page) !== -1){
        index = i;
      }
    })
    return index;
  }
  function renderAdminSubPage(path) {
    const subPages = ['admin/users', 'admin/products', 'admin/categories', 'admin/orders', 'admin/transaction'];
    const index = indexSubPage(subPages, path);
    switch(subPages[index]) {
      case subPages[0]:
        return <UserComponent />
      case subPages[1]:
        return <ProductsComponent />
      case subPages[2]:
        return <div>categories page</div>
      case subPages[3]:
        return <div>orders page</div>
      case subPages[4]:
        return <div>transaction page</div>
      default:
        return;
    }
  }

  useEffect(() => {
    setPathRoute(location.pathname);
    return () => {
      // 
    }
  }, [location.pathname])
  return (
    <Layout className="admin-page">
      <Sider className="site-layout-background" trigger={null} collapsible collapsed={collapsed}>
        <div className="logo" />
        <Menu theme="light" mode="inline" defaultSelectedKeys={['1']}>
          <Menu.Item key="1" icon={<UserOutlined />}><NavLink to="/admin/users">Users</NavLink></Menu.Item>
          <Menu.Item key="2" icon={<VideoCameraOutlined />}><NavLink to="/admin/products">Products</NavLink></Menu.Item>
          <Menu.Item key="3" icon={<UploadOutlined />}><NavLink to="/admin/categories">Categories</NavLink></Menu.Item>
          <Menu.Item key="4" icon={<UploadOutlined />}><NavLink to="/admin/orders">Orders</NavLink></Menu.Item>
          <Menu.Item key="5" icon={<UploadOutlined />}><NavLink to="/admin/transaction">Transaction</NavLink></Menu.Item>
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background admin-header">
          { React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, { className: 'trigger', onClick: toggle}) }
          <h3 className="admin-title">Users Manage</h3>
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

export default AdminComponent;