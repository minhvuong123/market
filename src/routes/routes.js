import React from 'react';
import { Route, Switch } from 'react-router-dom';

import AdminComponent from 'farm/admin/Admin.component';
import HomeComponent from 'farm/components/home/Home.component';
import ProductDetailComponent from 'farm/components/product-detail/ProductDetail.component';
import CardsComponent from 'farm/components/cards/Cards.component';
import BlogComponent from 'farm/components/blog/Blog.component';
import ContactComponent from 'farm/components/contact/Contact.component';
import AboutComponent from 'farm/components/about/About.component';
import SearchComponent from 'farm/components/search/Search.component';
import RegisterComponent from 'farm/components/register/Resgister.component';
import LoginComponent from 'farm/components/login/Login.component';

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
    path: '/product/:productID',
    keyPath: 'detail',
    exact: true,
    component: ProductDetailComponent
  },
  {
    path: '/search',
    keyPath: 'search',
    exact: true,
    component: SearchComponent
  },
  {
    path: '/cards',
    keyPath: 'cards',
    exact: true,
    component: CardsComponent
  },
  {
    path: '/blog',
    keyPath: 'blog',
    exact: true,
    component: BlogComponent
  },
  {
    path: '/contact',
    keyPath: 'contact',
    exact: true,
    component: ContactComponent
  },
  {
    path: '/about',
    keyPath: 'about',
    exact: true,
    component: AboutComponent
  },
  {
    path: '/admin',
    keyPath: 'users',
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
    path: '/sign-up',
    keyPath: 'sign-up',
    exact: true,
    component: RegisterComponent
  },
  {
    path: '/sign-in',
    keyPath: 'sign-in',
    exact: true,
    component: LoginComponent
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