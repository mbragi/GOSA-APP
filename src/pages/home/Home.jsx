import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import routes from '../../routes';
import Navigation from '../component/Navigation';
import './home.css';



// import Footer from '../component/Footer';




function Home(props) {    
    return (
        <>
        <Navigation />
            <div className='relative overflow-hidden' 
            style={{ minHeight: '100vh', 
            border: 'none', 
            background: 'blacks', 
            }}>
              <div style={{ minWidth: '100vw', minHeight: '100vh', zIndex: 10, background: 'rgba(0, 0, 0, 0.7)' }} className='flex justify-center items-center absolute top-0 left-0'>
                  <div className='text-center'>
                      <h1 className='text-white font-bold text-4xl'>Welcome To GOSA Set 013</h1>
                      <p className='text-white text-lg m-2'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                      quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                      consequat.</p>
                      <div className='text-center'>
                          <Link to={routes.signin}>
                              <button className="btn bg-lime-500 hover:bg-lime-600 text-white mx-4">Get Started</button>
                          </Link>
                      </div>
                  </div>
                </div>
            </div>
           {/* <Footer />*/}
        </>
    );
}


export default Home;