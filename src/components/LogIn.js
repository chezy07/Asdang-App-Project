import React from 'react'

function LogIn() {
  return (
    <div className='p-10 flex justify-center'>
        <div className="card card-compact w-96 bg-base-200 shadow-xl">
            <div className="card-body">
            <   h2 className="card-title justify-center text-purple-500 py-2">Welcome to Asdang App!</h2>
                <div className='py-2'>
                    <label className="label label-text">Email Address</label>
                    <input type="text" placeholder="Email Address" className="input input-bordered border-purple-300 w-full max-w-xs" />
                </div>
                <div className='py-2'>
                    <label className="label label-text">Password</label>
                    <input type="text" placeholder="Password" className="input input-bordered border-purple-300 w-full max-w-xs" />
                </div>
                <a className='text-purple-400'>Forgot Password?</a>
                <div className="card-actions justify-center">
                    <button className=" btn border-purple-300 bg-purple-500 btn-wide">Log In</button>
                </div>
            </div>
        </div>
    </div>
  )
}
export default LogIn;