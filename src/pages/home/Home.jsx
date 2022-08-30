import React from 'react';
import { Link } from 'react-router-dom';
import routes from '../../routes';
import Navigation from '../component/Navigation';
import './home.css';



// import Footer from '../component/Footer';




function Home(props) {    
    return (
        <>
        <Navigation />
            <section className="bg-block dark:bg-gray-900">
                <div className="flex max-w-screen justify-center content-center items-center px-4 mt-24 ml-24 mr-20">
                    <div className="mr-auto ml-auto mt-4 place-self-center lg:col-span-7">
                        <h1 className="max-w-2xl mb-4 text-4xl font-extrabold leading-none md:text-5xl xl:text-6xl dark:text-white">Welcome To GOSA Set 2013. For Light And Unity</h1>
                        <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">This is a community for Gosa Set-013, where all members meet and delibrate on matters of progress of individuals and also assist each other grow.</p>
                        <Link to={routes.signin}>
                            <button className="btn bg-emerald-500 hover:bg-emerald-600 text-white mx-6">Get Started</button>
                        </Link>
                    </div>
                    <div className="flex w-3/4 h-96 px-24 ">
                        <img src="/src/assets/Gosa Mockup medium.png" alt="mockup" />
                    </div>                
                </div>
            </section>
           {/* <Footer />*/}
        </>
    );
}


export default Home;
                        