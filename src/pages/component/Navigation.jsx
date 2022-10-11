import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import routes from '../../routes';
import logo from '../../assets/logo.png';
import './Navigation.css';
import { List, X } from 'phosphor-react';
import ModalBasic from '../../components/ModalBasic';



function Navigation() {
  const [selected, setSelected] = useState('signup');
  const [feedbackModalOpen, setFeedbackModalOpen] = useState(false);
  return (
    <div>
      <nav className='bg-transparent flex justify-between items-center p-4' style={{ zIndex: '20', width: '100%' }}>
        <div className='' >
          <Link to={routes.home}>
            <img className="border-solid border-4 rounded-full border-white object-fill" src={logo} width="50" height="50"
              alt="Avatar" />
          </Link>

        </div>
        <div className='flex justify-between items-center main-menu' style={{ width: '60%' }}>
          <ul className='flex menu-items' style={{ width: '60%' }}>
            <Link to={routes.home} ><li className='mx-4 pointer-events-auto text-black'>Home</li></Link>
            <Link to={routes.gallery}><li className='mx-4 cursor-pointer text-black'>Gallery</li></Link>
            {/* <Link to={routes.contact}><li className='mx-4 cursor-pointer text-white'>Contact Us</li></Link> */}

          </ul>
          <div style={{ paddingRight: '5rem' }}>
            <Link to={routes.signin}>
              <button onClick={() => setSelected('signin')} style={{ backgroundColor: 'rgb(63 98 18)' }} className={`btn ${selected === 'signin' && "bg-white text-black"} hover:text-black text-white mx-4`}>Sign in</button>
            </Link>
            <Link to={routes.signup}>
              <button onClick={() => setSelected('signup')} style={{ backgroundColor: 'rgb(63 98 18)' }} className={`btn ${selected === 'signup' && "bg-white text-black"} hover:text-white text-white `} >Sign up</button>
            </Link>
          </div>
        </div>
        <div className='mobile-menu'>
          <List size={32} color="rgb(63 98 18)" onClick={() => setFeedbackModalOpen(true)} />
        </div>
      </nav>

      {/* <ModalBasic id="feedback-modal" modalOpen={true} setModalOpen={setFeedbackModalOpen} title="select media">

      </ModalBasic> */}

      {
        feedbackModalOpen &&
        <div className='fixed top-0 left-0 right-0 bottom-0 inset-100'>
          <div className='flex justify-center items-center' style={{ width: '100%', height: '100%', background: 'rgba(0, 0, 0, 0.9)' }}>
            <div className='absolute top-5 left-5 flex items-center' >
              <img className="border-solid border-4 rounded-full border-white object-fill mr-4" src={logo} width="50" height="50"
                alt="Avatar" />
              <h1 style={{ lineHeight: 0.9, color: '#fff' }} className="max-w-2xl text-xl font-extrabold leading-none md:text-5xl xl:text-6xl dark:text-white">Set 2013</h1>
            </div>
            <ul className='text-center' style={{ width: '100%' }}>
              <Link to={routes.home} onClick={() => setFeedbackModalOpen(false)}><li className='mx-4 mb-4 pointer-events-auto text-white'>Home</li></Link>
              <Link to={routes.gallery} onClick={() => setFeedbackModalOpen(false)}><li className='mx-4 mb-4  cursor-pointer text-white'>Gallery</li></Link>
              {/* <Link to={routes.contact}><li className='mx-4 mb-4  cursor-pointer text-white'>Contact Us</li></Link> */}

              <Link to={routes.signin} onClick={() => setFeedbackModalOpen(false)} style={{ marginTop: '2rem' }}>
                <button className="button-52 animate-bounce" role="button" style={{}}>Sign in</button>
              </Link>

            </ul>
          </div>
        </div>
      }
    </div>
  )
}

export default Navigation;
