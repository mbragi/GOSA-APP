import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Particles from 'react-particles-js'
import routes from '../../routes';
import Navigation from '../component/Navigation';
import Logo from '../../assets/bg1.png';
import Blob from '../../assets/blob.svg';
import './Home.css';

import ModalBasic from '../../components/ModalBasic';


const particlesOptions = {
    particles: {
        number: {
            value: 30,
            density: {
                enable: true,
                value_area: 250
            }
        }
    }
}



function Home(props) {
    const [modalOpen, setModalOpen] = useState(true);
    // <<<<<<< HEAD
    //     return (
    //         <>
    //             <div className='gosa-background'
    //             // style={{ background: 'linear-gradient(90deg, #a5e29c, #1b7b2c)'}}
    //             > <div className="custom-shape-divider-bottom-1661903965">
    //                     <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
    //                         <path d="M1200 0L0 0 598.97 114.72 1200 0z" className="shape-fill"></path>
    //                     </svg>
    //                 </div>
    //                 <Navigation />
    //                 <section className="flex bg-block" >
    //                     <div className=" box-gosa">
    //                         <div className="w-1/2" style={{ padding: '3rem' }}>
    //                             <h1 style={{ lineHeight: 0.9, color: 'black' }} className="max-w-2xl text-4xl font-extrabold leading-none md:text-5xl xl:text-6xl dark:text-white">Set 2013</h1>
    //                             {/* <hr style={{ width: '18rem', border: '2px solid #fff', marginBottom: '1rem'}}></hr> */}
    //                             <p style={{ color: 'black' }} className="max-w-2xl mb-6 font-light text-slate-800 lg:mb-8 md:text-lg lg:text-xl dark:text-slate-400 ">For Light and Truth.</p>
    //                             <Link to={routes.signin}>
    //                                 {/* <button className="btn bg-emerald-500 hover:bg-emerald-600 text-white mx-6 cursor-pointer ">Get Started</button> */}
    //                                 <button className="button-52 animate-bounce" role="button" style={{ zIndex: -1, color: '' }}>Get Started</button>
    //                             </Link>
    //                         </div>

    //                         <div className="w-1/2 relative" style={{ zIndex: -1 }}>
    //                             <img src={Blob} alt="mockup" className='absolute' style={{ zIndex: -1 }} />
    //                             <img src={GOSA} alt="mockup" className='' />

    //                         </div>

    return (
        <div className="home-container relative min-h-screen flex flex-col text-white bg-black bg-opacity-20 w-full">
            <Particles className='particles' params={particlesOptions} />
            <div className=" bg-black bg-opacity-50 absolute z-20 bottom-0 top-0 right-0 left-0 w-full h-full" >

                <main className='container mx-auto px-6 pt-6 flex-1 text-center  w-full h-5/6 '>
                    <div className="flex justify-center mx-auto pt-16">
                        <img src={Logo} alt="" className='w-40 h-40 m-2 rounded-full shadow-lg' />
                    </div>
                    <h2 className="text-md md:text-lg lg:text-2xl uppercase text-color-lime-800">Gindiri old students association alumni </h2>
                    <h1 className="text-3xl md:text-6xl lg:text-8xl font-black uppercase mb-4">Unity Gate</h1>

                    <div className='mx-auto '>
                        <Link to={routes.signin}>
                            <button className=" z-20 text-2xl w-fit p-4 px-8 btn bg-lime-800 hover:bg-lime-900 text-white shadow outline-none animate-none">Get Started</button>
                        </Link>
                    </div>

                </main>
                <footer className='container mx-auto p-6 flex flex-col md:flex-row  items-center justify-between ' >
                    <p>Built with ❤️️ by Bluehouse.</p>
                    <div className="flex -mx-6">
                        <a href="#" className="mx-3 hover:opacity-80 duration-150">About us</a> | <a href="#" className="mx-3 hover:opacity-80 duration-150">Privacy</a> | <a href="#" className="mx-3 hover:opacity-80 duration-150">Contact</a>
                    </div>
                </footer>
            </div>
        </div>
    )
}


export default Home;
