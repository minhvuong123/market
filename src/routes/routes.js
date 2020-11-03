import React from 'react';
import { Route, Switch } from 'react-router-dom';
import CatalogComponent from 'shopee/components/catalog/Catalog.component';
import ProductDetailComponent from 'shopee/components/products/detail/ProductDetail.component';
import OrdersComponent from 'shopee/components/products/orders/Orders.component';

import AdminComponent from 'farm/admin/Admin.component';
import HomeComponent from 'farm/components/home/Home.component';

const RouteWithSubRoutes = (route) => {
  return (
    <Route
      path={route.path}
      exact={route.exact}
      render={props => {
        return <route.component {...props} keyPath={route.keyPath} routes={route.routes} />
      }} 
    />
  );
}

export const RenderRoutes = ({ routes }) => {
  return (
    <Switch>
      {
        routes.map((route, i) => {

          return <RouteWithSubRoutes key={route.keyPath} {...route} />
        })
      }
      <Route component={() => <h1>Not Found!</h1>} />
    </Switch>
  );
}

const Routes = [
  {
    path: '/',
    keyPath: 'root',
    exact: true,
    component: HomeComponent
  },
  {
    path: '/admin',
    keyPath: 'admin',
    exact: true,
    component: AdminComponent
  },
  {
    path: '/admin/users',
    keyPath: 'users',
    exact: true,
    component: AdminComponent
  },
  {
    path: '/admin/products',
    keyPath: 'products',
    exact: true,
    component: AdminComponent
  },
  {
    path: '/admin/categories',
    keyPath: 'categories',
    exact: true,
    component: AdminComponent
  },
  {
    path: '/admin/orders',
    keyPath: 'orders',
    exact: true,
    component: AdminComponent
  },
  {
    path: '/admin/transaction',
    keyPath: 'transaction',
    exact: true,
    component: AdminComponent
  },
  {
    path: "/app",
    keyPath: "APP",
    component: RenderRoutes,
    routes: [
      {
        path: "/app",
        keyPath: "APP_ROOT",
        exact: true,
        component: () => <h1>App Index</h1>,
      },
      {
        path: "/app/page",
        keyPath: "APP_PAGE",
        component: RenderRoutes,
        routes: [
          {
            path: "/app/page/page",
            keyPath: "APP_PAGE_PAGE",
            exact: true,
            component: () => <h1>App Page Page</h1>
          }
        ]
      },
      {
        path: "/app/sub",
        keyPath: "APP_SUB",
        exact: true,
        component: () => <h1>App SUB</h1>,
      },
    ],
  }
]

export default Routes;