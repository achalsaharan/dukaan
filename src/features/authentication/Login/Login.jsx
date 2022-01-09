import React from 'react';
import { btnPrimary, btnSecondary } from '../../../styles';

export function Login() {
  return (
    <div className='h-full flex items-center justify-center bg-purple-600'>
        <div id="login-div" className="flex bg-white flex-col py-10 px-6 sm:px-10 pb-0 relative rounded-md text-lg shadow-2xl md:w-96">
          <div>
            <h1 className="text-center text-xl font-semibold pb-3">
              LOGIN <i className="fas fa-sign-in-alt ml-4"></i>
            </h1>
            </div>
              <input
                className="focus:outline-none focus:ring-purple-500 ring-1 ring-slate-300 rounded p-2 my-3"
                type="text"
                placeholder="Enter Email"
                // value={email}
                // onChange={(e) => setEmail(e.target.value)}
              />

              <input
                className="focus:outline-none focus:ring-purple-500 ring-1 ring-slate-300 rounded p-2 my-3"
                type="password"
                placeholder="Enter Password"
                // value={password}
                // onChange={(e) => setPassword(e.target.value)}
              />
              <button className={`${btnPrimary} py-2`}>
                Log In
              </button>
              <button className={`${btnSecondary} py-2`}>
                Quick Login With Test Account
              </button>
              <div className='pt-4 pb-4'>
                <span className='text-slate-500 text-sm'>
                  Don't have an account? <span className='text-purple-600 hover:text-purple-800 cursor-pointer'>sign up</span>
                </span>
              </div>
        </div>
    </div>
  )
}