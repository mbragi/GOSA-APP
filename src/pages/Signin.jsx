import React from 'react';
import { Link } from 'react-router-dom';

import AuthImage from '../images/auth-image.jpg';
import AuthDecoration from '../images/auth-decoration.png';

function Signin() {
  return (
    <main className='min-h-screen' style={{ background: 'linear-gradient(30deg, #a5e29c, #242424)'}}>

        {/* Content */}
        <div className="flex  justify-center items-center ">
            {/* Header */}
            <div className="max-w-sm mt-10 px-10 m-auto py-10 border-2 border-black border-solid  rounded-xl shadow-lg shadow-black " style={{ background: 'white'}}>
              <h1 className="text-3xl text-blue-800 font-bold mb-6">SIGN IN ✨</h1>
              {/* Form */}
              <form>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-1" htmlFor="email">Email Address</label>
                    <input id="email" className="form-input w-full" type="email" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1" htmlFor="password">Password</label>
                    <input id="password" className="form-input w-full" type="password" autoComplete="on" />
                  </div>
                </div>
                <div className="flex items-center justify-between mt-6">
                  <div className="mr-1">
                    <Link className="text-sm underline hover:no-underline" to="/reset-password">Forgot Password?</Link>
                  </div>
                  <Link className="btn bg-emerald-500 hover:bg-emerald-600 text-white ml-3" to="/community/feed">Sign In</Link>
                </div>
              </form>
              {/* Footer */}
              <div className="pt-5 mt-6 border-t border-slate-200">
                <div className="text-sm">
                  Don’t you have an account? <Link className="font-medium text-emerald-500 hover:text-emerald-600" to="/signup">Sign Up</Link>
                </div>
                {/* Warning */}
                <div className="mt-5">
                  <div className="bg-amber-100 text-amber-600 px-3 py-2 rounded">
                    <svg className="inline w-3 h-3 shrink-0 fill-current mr-2" viewBox="0 0 12 12">
                      <path d="M10.28 1.28L3.989 7.575 1.695 5.28A1 1 0 00.28 6.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 1.28z" />
                    </svg>
                    <span className="text-sm">
                      To support you during the pandemic super pro features are free until March 31st.
                    </span>
                  </div>
                </div>
              </div>
            </div>
        </div>
    </main>
  );
}

export default Signin;