import React, { useState, useEffect } from 'react';
import Routes, { RenderRoutes } from '../../routes/routes';
import { withRouter } from 'react-router-dom';
import FooterComponent from 'farm/components/footer/Footer.component';
import HeaderComponent from 'farm/components/header/Header.component';
import LoadingComponent from 'farm/components/loading/Loading.component';

function AppComponent({ location }) {
  const [pathRoute, setPathRoute] = useState('');
  useEffect(() => {
    setPathRoute(location.pathname);
    return () => {
      // 
    }
  }, [location.pathname])

  function adminPage(path) {
    if (path.indexOf('admin') !== -1) {
      return true;
    }
    return false;
  }
 
  return (
    <React.Fragment>
      <HeaderComponent />
      <RenderRoutes routes={Routes} />
      {
        !adminPage(pathRoute) && <FooterComponent />
      }
      <LoadingComponent />
    </React.Fragment>
  )
}

export default withRouter(AppComponent);