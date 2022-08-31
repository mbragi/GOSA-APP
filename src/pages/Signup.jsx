import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from './component/Navigation';


// import AuthImage from '../images/auth-image.jpg';
// import AuthDecoration from '../images/auth-decoration.png';



function Signup() {
  return (
    <main className='min-h-screen'>
      <Navigation />
      <div className='py-10 flex justify-center p-4'>
        <div className="max-w-sm py-10  px-10  my-auto  rounded-xl shadow-md shadow-black" style={{ background: 'white' }}>
          <h1 className="text-2xl text-slate-800 font-bold mb-6">Create your Account ✨</h1>
          {/* Form */}
          <form>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1" htmlFor="name">Full Name <span className="text-rose-500">*</span></label>
                <input id="name" className="form-input w-full" type="text" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1" htmlFor="email">Email Address <span className="text-rose-500">*</span></label>
                <input id="email" className="form-input w-full" type="email" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1" htmlFor="role">Your Role <span className="text-rose-500">*</span></label>
                <select id="House" className="form-select w-full">
                  <option>Love</option>
                  <option>Peace</option>
                  <option>compassion</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1" htmlFor="password">Password</label>
                <input id="password" className="form-input w-full" type="password" autoComplete="on" />
              </div>
            </div>
            <div className="mt-6">
             
              <Link style={{ width: '100%'}} className="btn bg-lime-800 hover:bg-lime-900 text-white whitespace-nowrap" to="/">Sign Up</Link>
            </div>
          </form>
          {/* Footer */}
          <div className="pt-5 mt-6 border-t border-slate-200">
            <div className="text-sm">
              Have an account? <Link className="font-medium text-lime-800 hover:text-lime-900" to="/signin">Sign In</Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Signup;