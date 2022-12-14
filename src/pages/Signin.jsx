import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import Navigation from './component/Navigation';
import routes from '../routes';
import { httpLoginUser } from '../redux/Auth/auth.actions';
import Toast from '../components/Toast';
import './Signin.css'

// const URL2 = import.meta.env.VITE_API_URL

function Signin(props) {
  const [data, setData] = React.useState({})
  // const navigate = useNavigate()
  // console.log(props);
  const { auth: { user, loading, error } } = props;
  async function onInputChange(event) {
    const { name, value } = event.target
    let Data = { ...data }
    Data[name] = value
    setData(Data)

  }


  async function httpLoginUser(e) {
    e.preventDefault()
    props.httpLoginUser(data);
  }

  return (
    <main className='min-h-screen signin-container'>
      {/* <Navigation /> */}
      {/* Content */}
      <div className="flex  justify-center items-center p-4 pt-6 md:pt-8 lg:pt-16">
        {/* Header */}
        <div className="max-w-sm mt-10 px-10 m-auto py-10  rounded-xl shadow-md shadow-black " style={{ background: 'white' }}>
          <Link to={routes.home}>
            <p className='my-4'>&#x25c0;Home</p>
          </Link>
          {
            error &&
            <Toast type="error" open={true}>
              {error.message}
            </Toast>
          }
          <h1 className="text-3xl  font-bold mb-6">SIGN IN ✨</h1>
          {/* Form */}

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
              {
                loading ?
                  <button style={{ width: '100%' }} className="btn bg-emerald-500 hover:bg-emerald-600 text-white disabled:border-slate-200 disabled:bg-slate-100 disabled:text-slate-400 disabled:cursor-not-allowed shadow-none" disabled>
                    <svg className="animate-spin w-4 h-4 fill-current shrink-0" viewBox="0 0 16 16">
                      <path d="M8 16a7.928 7.928 0 01-3.428-.77l.857-1.807A6.006 6.006 0 0014 8c0-3.309-2.691-6-6-6a6.006 6.006 0 00-5.422 8.572l-1.806.859A7.929 7.929 0 010 8c0-4.411 3.589-8 8-8s8 3.589 8 8-3.589 8-8 8z" />
                    </svg>
                    <span className="ml-2">Loading</span>
                  </button> :
                  <button style={{ width: '100%' }} className="btn bg-lime-800 hover:bg-lime-900 text-white type=" type='submit'>Sign In </button>
              }
              <div className="mr-1">
                <Link className="text-sm underline hover:no-underline" to="/reset-password">Forgot Password?</Link>
              </div>
            </div>
          </form>
          {/* Footer */}
          <div className="pt-5 mt-6 border-t border-slate-200">
            <div className="text-sm">
              Don’t you have an account? <Link className="font-medium text-lime-800 hover:text-lime-900" to={routes.signup}>Sign Up</Link>
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


const mapDispatchToProps = dispatch => ({
  httpLoginUser: data => dispatch(httpLoginUser(data))
});


const mapStateToProps = state => ({
  auth: state.auth
})


export default connect(mapStateToProps, mapDispatchToProps)(Signin);