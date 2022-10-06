import React, { useEffect } from 'react';
import {
  Routes,
  Route,
  useLocation
} from 'react-router-dom';
import './css/style.scss';
import './charts/ChartjsConfig';
import routes from './pages'
import { connect } from 'react-redux';


function App(props) {
  const location = useLocation();
  const { auth: { user } } = props;

  useEffect(() => {
    document.querySelector('html').style.scrollBehavior = 'auto'
    window.scroll({ top: 0 })
    document.querySelector('html').style.scrollBehavior = ''
  }, [location.pathname]); // triggered on route change

  console.log(user)

  const loggedInAs = !user ? "noUser" : "user"

  const renderRoutes = {
    noUser: routes?.pages.map((item, idx) => <Route key={idx} exact path={item.path} element={item.element} />),
    user: routes?.isSignedIn.map((item, idx) => <Route key={idx} exact path={item.path} element={item.element} />)
  }

  return (
    <>
      <Routes>
        {renderRoutes[loggedInAs]}
      </Routes>
    </>
  );
}

const mapStateToProps = state => ({
  auth: state.auth
})

export default connect(mapStateToProps)(App);
