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
  if (!user) {
    return (
      <Routes>
        {
          routes?.pages.map((item, idx) => <Route key={idx} exact path={item.path} element={item.element} />)
        }
      </Routes>
    )

  } else {
    return (
      <>
        <Routes>
          {
            routes?.isSignedIn.map((item, idx) => <Route key={idx} exact path={item.path} element={item.element} />)
          }
        </Routes>
      </>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth
})

export default connect(mapStateToProps)(App);
