import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import routes from '../../routes';
import logo from '../../assets/logo.png';


function Navigation() {
  const [selected, setSelected] = useState('signup');

  return (
    <div>
      <nav className='bg-transparent flex justify-between items-center p-4' style={{ zIndex: '20', width: '100vw' }}>
        <div className='' style={{ paddingLeft: '5rem' }}>
            {/*<h1 className='text-white font-bold text-3xl cursor-pointer'>Gosa Set-013</h1>*/}
            <img className="border-solid border-4 rounded-full border-white object-fill" src={logo} width="50" height="50"
            alt="Avatar" />
        </div>
        <div className='flex justify-between items-center' style={{ width: '60%' }}>
            <ul className='flex' style={{ width: '60%' }}>
                <Link to='/Home'><li className='mx-4 pointer-events-auto text-white'>Home</li></Link>
                <Link to='/Gallery'><li className='mx-4 cursor-pointer text-white'>Gallery</li></Link>
                <Link to='/Contact'><li className='mx-4 cursor-pointer text-white'>Contact Us</li></Link>
            </ul>
            <div style={{ paddingRight: '5rem' }}>
                <button onClick={() => setSelected('signin')} className={`btn ${selected === 'signin' && "bg-emerald-800"} hover:bg-emerald-700 text-white mx-4`}>Sign in</button>
                <button onClick={() => setSelected('signup')} className={`btn ${selected === 'signup' && "bg-emerald-800"} hover:bg-emerald-700 text-white`}>Sign up</button>
            </div>
        </div>
      </nav>
    </div>
  )
}

export default Navigation;
