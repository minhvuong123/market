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
        return <route.component {...props} routes={route.routes} />
      }} 
    />
  );
}

export const RenderRoutes = ({ routes }) => {
  return (
    <Switch>
      {
        routes.map((route, i) => {
          return <RouteWithSubRoutes key={route.key} {...route} />
        })
      }
      <Route component={() => <h1>Not Found!</h1>} />
    </Switch>
  );
}

const Routes = [
  {
    path: '/',
    key: 'root',
    exact: true,
    component: HomeComponent
  },
  {
    path: '/admin',
    key: 'admin',
    exact: true,
    component: AdminComponent
  },
  {
    path: '/admin/users',
    key: 'admin',
    exact: true,
    component: AdminComponent
  },
  {
    path: '/admin/products',
    key: 'admin',
    exact: true,
    component: AdminComponent
  },
  {
    path: '/admin/categories',
    key: 'admin',
    exact: true,
    component: AdminComponent
  },
  {
    path: '/admin/orders',
    key: 'admin',
    exact: true,
    component: AdminComponent
  },
  {
    path: '/admin/transaction',
    key: 'admin',
    exact: true,
    component: AdminComponent
  },
  {
    path: "/app",
    key: "APP",
    component: RenderRoutes,
    routes: [
      {
        path: "/app",
        key: "APP_ROOT",
        exact: true,
        component: () => <h1>App Index</h1>,
      },
      {
        path: "/app/page",
        key: "APP_PAGE",
        component: RenderRoutes,
        routes: [
          {
            path: "/app/page/page",
            key: "APP_PAGE_PAGE",
            exact: true,
            component: () => <h1>App Page Page</h1>
          }
        ]
      },
      {
        path: "/app/sub",
        key: "APP_SUB",
        exact: true,
        component: () => <h1>App SUB</h1>,
      },
    ],
  }
]

export default Routes;