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
        <div className='min-h-screen gosa-background' 
        // style={{ background: 'linear-gradient(90deg, #a5e29c, #1b7b2c)'}}
        >
            <Navigation />
            <section className="flex bg-block" >
                <div className="flex max-w-screen justify-center content-center items-center px-4 mt-24 ml-24 mr-20">
                    <div className="mr-auto ml-auto mt-4 place-self-center lg:col-span-7">
                        <h1 className="max-w-2xl mb-4 text-4xl font-extrabold leading-none md:text-5xl xl:text-6xl dark:text-white">GOSA Set 2013 Commnunity</h1>
                        <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">For Light and Truth.</p>
                        <Link to={routes.signin}>
                            <button className="btn bg-emerald-500 hover:bg-emerald-600 text-white mx-6 ">Get Started</button>
                        </Link>
                    </div>
                    <div className="flex w-3/4 h-96 px-24 relative">
                        <img src={Blob} alt="mockup" className='absolute' style={{ zIndex: -1}}/>
                        <img src={GOSA} alt="mockup" className=''/>
                    </div>                
                </div>
            </section>
           {/* <Footer />*/}
        </div>
    );
}


export default Home;
                        