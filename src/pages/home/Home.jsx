import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import routes from '../../routes';
import Navigation from '../component/Navigation';
import GOSA from '../../assets/gosa13.png';
import Blob from '../../assets/blob.svg';
import './Home.css';

import ModalBasic from '../../components/ModalBasic';

// import Footer from '../component/Footer';




function Home(props) {
    const [modalOpen, setModalOpen] = useState(true); posti
    return (
        <>
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
                        <div className="w-1/2" style={{ padding: '3rem' }}>
                            <h1 style={{ lineHeight: 0.9, color: 'black' }} className="max-w-2xl text-4xl font-extrabold leading-none md:text-5xl xl:text-6xl dark:text-white">Set 2013</h1>
                            {/* <hr style={{ width: '18rem', border: '2px solid #fff', marginBottom: '1rem'}}></hr> */}
                            <p style={{ color: 'black' }} className="max-w-2xl mb-6 font-light text-slate-800 lg:mb-8 md:text-lg lg:text-xl dark:text-slate-400 ">For Light and Truth.</p>
                            <Link to={routes.signin}>
                                {/* <button className="btn bg-emerald-500 hover:bg-emerald-600 text-white mx-6 cursor-pointer ">Get Started</button> */}
                                <button className="button-52 animate-bounce" role="button" style={{ zIndex: -1, color: '' }}>Get Started</button>
                            </Link>
                        </div>

                        <div className="w-1/2 relative" style={{ zIndex: -1 }}>
                            <img src={Blob} alt="mockup" className='absolute' style={{ zIndex: -1 }} />
                            <img src={GOSA} alt="mockup" className='' />

                        </div>
                    </div>
                </section>
            </div>
            {/* <ModalBasic id="feedback-modal" modalOpen={true} setModalOpen={setModalOpen} title="select media">

            </ModalBasic> */}

        </>
    );
}


export default Home;
