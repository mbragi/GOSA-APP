import React, { useEffect } from 'react';
import {
  Routes,
  Route,
  useLocation
} from 'react-router-dom';
import './css/style.scss';
import './charts/ChartjsConfig';
import pages from './pages';


function App() {
  const location = useLocation();

  useEffect(() => {
    document.querySelector('html').style.scrollBehavior = 'auto'
    window.scroll({ top: 0 })
    document.querySelector('html').style.scrollBehavior = ''
  }, [location.pathname]); // triggered on route change

  return (
    <>
      <Routes>
        {
          pages.map(item => <Route key={item.path} exact path={item.path} element={item.element} />)
        }
      </Routes>
    </>
  );
}

export default App;
