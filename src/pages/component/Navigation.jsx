import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import routes from '../../routes';
import logo from '../../assets/logo.png';
import './Navigation.css';
import { List } from 'phosphor-react';



function Navigation() {
  const [selected, setSelected] = useState('signup');

  return (
    <div>
      <nav className='bg-transparent flex justify-between items-center p-4' style={{ zIndex: '20', width: '100vw' }}>
        <div className='' style={{ paddingLeft: '5rem' }}>
            <img className="border-solid border-4 rounded-full border-white object-fill" src={logo} width="50" height="50"
            alt="Avatar" />
        </div>
        <div className='flex justify-between items-center main-menu' style={{ width: '60%' }}>
            <ul className='flex menu-items' style={{ width: '60%' }}>
                <Link to={routes.home}><li className='mx-4 pointer-events-auto text-white'>Home</li></Link>
                <Link to={routes.gallery}><li className='mx-4 cursor-pointer text-white'>Gallery</li></Link>
                <Link to={routes.contact}><li className='mx-4 cursor-pointer text-white'>Contact Us</li></Link>

            </ul>
            <div style={{ paddingRight: '5rem' }}>
              <Link to={routes.signin}>
                <button onClick={() => setSelected('signin')} className={`btn ${selected === 'signin' && "bg-white text-black"} hover:bg-white hover:text-black text-white mx-4`}>Sign in</button>
              </Link>
              <Link to={routes.signup}>
                <button onClick={() => setSelected('signup')} className={`btn ${selected === 'signup' && "bg-white text-black"} hover:bg-white hover:text-black text-white`}>Sign up</button>
              </Link>
            </div>
        </div>
        <div className='mobile-menu'>
        <List size={32} color="white"/>
        </div>
      </nav>
    </div>
  )
}

export default Navigation;
