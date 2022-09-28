import React from 'react';
import { useState } from 'react';

function ResetPassword() {
  const [data, setData] = useState('')

  const setEmail = (e) => {
    const { name, value } = e.target
    const newData = { ...data }
    newData[name] = value
    setData(newData)
  }
  async function httpResetPassword(e) {
    e.preventDefault()
    console.log(data)
  }
  return (
    <main className='gosa-background'  >
      {/* Content */}
      <div className="min-h-screen h-full flex item-center justify-center" >
        {/* Header */}
        <div className="mx-auto px-20 my-auto rounded-xl shadow-md shadow-black  py-20 bg-white">
          <h1 className="text-3xl text-slate-800 font-bold mb-6">Reset your Password ✨</h1>
          {/* Form */}
          <form onSubmit={httpResetPassword}>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1" htmlFor="email">Email Address <span className="text-rose-500">*</span></label>
                <input id="email" className="form-input w-full" name='email' onChange={setEmail} type="email" />
              </div>
            </div>
            <div className="flex justify-end mt-6">
              <button className="btn bg-indigo-500 hover:bg-indigo-600 text-white whitespace-nowrap" type='submit'>Send Reset Link</button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}

export default ResetPassword;