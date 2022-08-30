import React from 'react';
import { Link } from 'react-router-dom';


// import AuthImage from '../images/auth-image.jpg';
// import AuthDecoration from '../images/auth-decoration.png';



function Signup() {
  return (
    <main className='min-h-screen' style={{ background: 'linear-gradient(30deg, #a5e29c, #242424)'}} >
<div className='py-10 flex justify-center'>
          <div  className="max-w-sm py-10  px-10  my-auto border-2 border-black border-solid  rounded-xl shadow-lg shadow-black" style={{ background: 'white'}}>
              <h1 className="text-2xl text-slate-800 font-bold mb-6">Create your Account ✨</h1>
              {/* Form */}
              <form>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-1" htmlFor="email">Email Address <span className="text-rose-500">*</span></label>
                    <input id="email" className="form-input w-full" type="email" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1" htmlFor="name">Full Name <span className="text-rose-500">*</span></label>
                    <input id="name" className="form-input w-full" type="text" />
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
                <div className="flex items-center justify-between mt-6">
                  <div className="mr-1">
                    <label className="flex items-center">
                      <input type="checkbox" className="form-checkbox" />
                      <span className="text-sm ml-2">Email me about product news.</span>
                    </label>
                  </div>
                  <Link className="btn bg-indigo-500 hover:bg-indigo-600 text-white ml-3 whitespace-nowrap" to="/">Sign Up</Link>
                </div>
              </form>
              {/* Footer */}
              <div className="pt-5 mt-6 border-t border-slate-200">
                <div className="text-sm">
                  Have an account? <Link className="font-medium text-indigo-500 hover:text-indigo-600" to="/signin">Sign In</Link>
                </div>
              </div>
          </div>  
</div>
    </main>
  );
}

export default Signup;