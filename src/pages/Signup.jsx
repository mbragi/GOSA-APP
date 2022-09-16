import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import routes from '../routes';
import Navigation from './component/Navigation';
import Toast from '../components/Toast';

const URL = import.meta.env.VITE_GOSA_API
// import AuthImage from '../images/auth-image.jpg';
// import AuthDecoration from '../images/auth-decoration.png';



function Signup() {
  const [data, setData] = useState({})
  const [resData, setResData] = useState({})
  const [openToast, setOpenToast] = useState(false)
  const [type, setType] = useState('')
  const signUpData = (e) => {
    const { name, value } = e.target
    let postdata = { ...data }
    postdata[name] = value
    setData(postdata)
  }
  async function httpSignupMember(e) {
    e.preventDefault()
    let request = { ...data }
    // console.log(request)
    const response = await fetch(`${URL}/register`, {
      method: 'post',
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(request)
    })
    const allData = await response.json()
      .catch(err => { console.log(err.message) })
    setType('success')
    setOpenToast(true)
    setResData(allData)
    console.log(allData)
  }

  return (
    <>
      <Navigation />
      <main style={{ width: '100%', }} >
        <div className='py-10 flex justify-center p-4'>
          <div className=" py-10  px-20  my-auto  rounded-xl shadow-md shadow-black" style={{ background: 'white' }}>
            <h1 className="text-2xl text-slate-800 font-bold mb-6">Create your Account ✨</h1>
            {/* Form */}
            <Toast open={openToast} type={type} setOpen={setOpenToast}>
              <p>{resData.message}</p>
            </Toast>
            <form onSubmit={httpSignupMember}>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-1" htmlFor="name">Full Name <span className="text-rose-500">*</span></label>
                  <input id="name" name='fullName' onChange={signUpData} className="form-input w-full" type="text" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1" htmlFor="email">Email Address <span className="text-rose-500">*</span></label>
                  <input id="email" name='email' onChange={signUpData} className="form-input w-full" type="email" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1" htmlFor="role">House<span className="text-rose-500">*</span></label>
                  <select id="House" className="form-select w-full" onChange={signUpData}>
                    <option value="Blue">Blue</option>
                    <option value="Green">Green</option>
                    <option value="Grey">Grey</option>
                    <option value="Pink">Pink</option>
                    <option value="Yellow">Yellow</option>
                    <option value="White">White</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1" htmlFor="password">Password</label>
                  <input id="password" name='password' onChange={signUpData} className="form-input w-full" type="password" autoComplete="on" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1" htmlFor="confirm-password">Confirm password</label>
                  <input id="confirmPassword" name='confirmPassword' onChange={signUpData} className="form-input w-full" type="password" autoComplete="on" />
                </div>
              </div>
              <div className="mt-6">

                <button style={{ width: '100%' }} className="btn bg-lime-800 hover:bg-lime-900 text-white whitespace-nowrap" type='submit'>Sign Up</button>
              </div>
            </form>
            {/* Footer */}
            <div className="pt-5 mt-6 border-t border-slate-200">
              <div className="text-sm">
                Have an account? <Link className="font-medium text-lime-800 hover:text-lime-900" to={routes.signin}>Sign In</Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Signup;