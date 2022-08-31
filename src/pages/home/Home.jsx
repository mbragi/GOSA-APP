import React from 'react';
import { Link } from 'react-router-dom';
import routes from '../../routes';
import Navigation from '../component/Navigation';
import GOSA from '../../assets/gosa13.png';
import Blob from '../../assets/blob.svg';
import './Home.css';

// import Footer from '../component/Footer';




function Home(props) {    
    return (
        <div className='gosa-background' 
        // style={{ background: 'linear-gradient(90deg, #a5e29c, #1b7b2c)'}}
        >
            <div className="custom-shape-divider-bottom-1661903965">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M1200 0L0 0 598.97 114.72 1200 0z" className="shape-fill"></path>
                </svg>
            </div>
            <Navigation />
            <section className="flex bg-block" >
                <div className=" box-gosa">
                    <div className="w-1/2" style={{ padding: '3rem'}}>
                        <h1 className="max-w-2xl pb-4 text-4xl font-extrabold leading-none md:text-5xl xl:text-6xl dark:text-white">GOSA Set 2013 Commnunity</h1>
                        <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">For Light and Truth.</p>
                        <Link to={routes.signin}>
                            {/* <button className="btn bg-emerald-500 hover:bg-emerald-600 text-white mx-6 cursor-pointer ">Get Started</button> */}
                            <button className="button-52 animate-bounce" role="button">Get Started</button>
                        </Link>
                    </div>

                    <div className="w-1/2 relative">
                        <img src={Blob} alt="mockup" className='absolute' style={{ zIndex: -1}}/>
                        <img src={GOSA} alt="mockup" className=''/> 

                    </div>                
                </div>
            </section>
        </div>
    );
}


export default Home;
                        