import React from 'react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import routes from '../routes';
import Navigation from './component/Navigation';
import Toast from '../components/Toast';

// const URL = import.meta.env.VITE_GOSA_API
// const URL = ""
// import AuthImage from '../images/auth-image.jpg';
// import AuthDecoration from '../images/auth-decoration.png';



function Signup() {
  const [data, setData] = useState({})
  const [data2, setData2] = useState({})
  const [message, setMessage] = useState('')
  const [openToast, setOpenToast] = useState(false)
  const navigate = useNavigate()
  const [type, setType] = useState('')
  const signUpData = (e) => {
    const { name, value } = e.target
    let postdata = { ...data }
    postdata[name] = value
    setData(postdata)
  }
  async function httpSignupMember(e) {
    e.preventDefault()
    console.log(data)

    let request = { ...data }
    const response = await fetch(`https://rocky-scrubland-70378.herokuapp.com/register`, {
      method: 'post',
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(request)
    })
    const allData = await response.json()
      .catch(err => { console.log(err.message) })
    const type = allData.type
    const message = allData.message
    setType(`${type}`)
    setOpenToast(true)
    setData2(allData)
    setMessage(message)
    if (type === 'error') {
      return console.log(err.message)
    } else if (type === "warning") {
      return console.log(err.message)
      // alert(err.message)
    } else {
      console.log('success')
      setTimeout(() => {
        navigate(`${routes.feed}`)
      }, 1500)
    }
  }

  return (
    <>
      <Navigation />
      <div className='py-10 flex justify-center p-4'>
        <div className=" py-10  px-20  my-auto  rounded-xl shadow-md shadow-black" style={{ background: 'white' }}>
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
                <label className="block text-sm font-medium mb-1" htmlFor="role">House<span className="text-rose-500">*</span></label>
                <select id="House" className="form-select w-full">
                  
                  <option>Blue</option>
                  <option>Green</option>
                  <option>Grey</option>
                  <option>Pink</option>
                  <option>Yellow</option>
                  <option>White</option>
                </select>
              </div>
              <div className="mt-6">

                <button style={{ width: '100%' }} className="btn bg-lime-800 hover:bg-lime-900 text-white whitespace-nowrap" type='submit'>Sign Up</button>
              </div>
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
    </>
  );
}

export default Signup;