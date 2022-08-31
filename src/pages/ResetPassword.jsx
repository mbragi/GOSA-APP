import React from 'react';
import { Link } from 'react-router-dom';

import AuthImage from '../images/auth-image.jpg';
import AuthDecoration from '../images/auth-decoration.png';

function ResetPassword() {
  return (
    <main className='gosa-background'  >


        {/* Content */}
        
          <div className="min-h-screen h-full flex item-center justify-center" >

            {/* Header */}
           

            <div className="mx-auto px-20 my-auto rounded-xl shadow-md shadow-black  py-20 bg-white">
              <h1 className="text-3xl text-slate-800 font-bold mb-6">Reset your Password ✨</h1>
              {/* Form */}
              <form>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-1" htmlFor="email">Email Address <span className="text-rose-500">*</span></label>
                    <input id="email" className="form-input w-full" type="email" />
                  </div>
                </div>
                <div className="flex justify-end mt-6">
                  <button className="btn bg-indigo-500 hover:bg-indigo-600 text-white whitespace-nowrap">Send Reset Link</button>
                </div>
              </form>
            </div>

          </div>
        

    

    </main>
  );
}

export default ResetPassword;