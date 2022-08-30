import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import routes from '../../routes';
import gosa from '../../assets/gosa.jpg'


function Navigation() {
  const [selected, setSelected] = useState('signup');

  return (
    <div>
      <nav className='bg-transparent flex justify-between items-center p-4' style={{ zIndex: '20', width: '100vw' }}>
        <div className='' style={{ paddingLeft: '5rem' }}>
            <h1 className='text-white font-bold text-3xl cursor-pointer'>Gosa Set-013</h1>
            {/*<img className="rounded-full" src={gosa} width="100" height="100"
  alt="Avatar" />*/}
        </div>
        <div className='flex justify-between items-center' style={{ width: '60%' }}>
            <ul className='flex' style={{ width: '60%' }}>
                <li className='mx-4 cursor-pointer text-white'>Home</li>
                <Link to='/Gallery'><li className='mx-4 cursor-pointer text-white'>Gallery</li></Link>
                <li className='mx-4 cursor-pointer text-white'>Contact Us</li>
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
