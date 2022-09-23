import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Toast from '../components/Toast';
import Navigation from './component/Navigation';
import routes from '../routes';

// const URL2 = import.meta.env.VITE_API_URL

function Signin() {
  const [data, setData] = React.useState({})
  const [data2, setData2] = React.useState({})
  const [message, setMessage] = React.useState('')
  const [type, setType] = React.useState('')
  const navigate = useNavigate()

  const [openToast, setOpenToast] = React.useState(false)

  async function onInputChange(event) {
    const { name, value } = event.target
    let Data = { ...data }
    Data[name] = value
    setData(Data)

  }
  async function httpLoginUser(e) {
    e.preventDefault()
    console.log(data)
    let request = JSON.stringify(data)
    const res = await fetch(`https://rocky-scrubland-70378.herokuapp.com/login`, {
      method: 'post',
      headers: {
        "content-type": "application/json"
      },
      body: request
    })
    const resData = await res.json()
      .catch(err => { console.log(err.message) })
    console.log(resData)
    const type = resData.type
    const message = resData.message
    setType(type)
    setOpenToast(true)
    setMessage(message)
    setData2(resData)
    if (type === 'error') {
      return console.log(err.message)
    } else if (type === "warning") {
      return console.log(err.message)
    } else {
      console.log('success')
      setTimeout(() => {
        navigate(`${routes.feed}`)
      }, 1000)
    }
  }
  return (
    <main className='min-h-screen'>
      <Navigation />
      {/* Content */}
      <div className="flex  justify-center items-center p-4">
        {/* Header */}
        <div className="max-w-sm mt-10 px-10 m-auto py-10  rounded-xl shadow-md shadow-black " style={{ background: 'white' }}>
          <h1 className="text-3xl  font-bold mb-6">SIGN IN ✨</h1>
          {/* Form */}
          <Toast open={openToast} type={type} setOpen=
            {setOpenToast}>
            <p>{message}</p>
          </Toast>
          <form onSubmit={httpLoginUser}>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1" htmlFor="email">Email Address</label>
                <input id="email" className="form-input w-full" type="email" name='email' onChange={onInputChange} />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1" htmlFor="password">Password</label>
                <input id="password" className="form-input w-full" type="password" name='password' autoComplete="on" onChange={onInputChange} />
              </div>
            </div>
            <div className="mt-6">
              <button style={{ width: '100%' }} className="btn bg-lime-800 text-white hover:bg-lime-900 text-white type=" type='submit'>Sign In </button>
              <div className="mr-1">
                <Link className="text-sm underline hover:no-underline" to="/reset-password">Forgot Password?</Link>
              </div>
            </div>
          </form>
          {/* Footer */}
          <div className="pt-5 mt-6 border-t border-slate-200">
            <div className="text-sm">
              Don’t you have an account? <button className="font-medium text-lime-800 hover:text-lime-900" to="/signup">Sign Up</button>
            </div>
            {/* Warning */}
            <div className="mt-5">
              {/* <div className="bg-amber-100 text-amber-600 px-3 py-2 rounded">
                    <svg className="inline w-3 h-3 shrink-0 fill-current mr-2" viewBox="0 0 12 12">
                      <path d="M10.28 1.28L3.989 7.575 1.695 5.28A1 1 0 00.28 6.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 1.28z" />
                    </svg>
                    <span className="text-sm">
                      To support you during the pandemic super pro features are free until March 31st.
                    </span>
                  </div> */}
            </div>
          </div>
        </div>
      </div >
    </main >
  );
}

export default Signin;