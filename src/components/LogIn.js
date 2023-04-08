import React from 'react'

function LogIn() {
  return (
        <div> 
            <div className="card bg-accent w-96">
                <div className="card-body">
                    <input type="text" placeholder="Email Address" className="input w-full max-w-xs" />
                    <input type="text" placeholder="Password" className="input w-full max-w-xs" />
                    <a className= "text-white">Forgot your password?</a>
                <div className="card-actions justify-center">
                    <button className="btn btn-wide">Log In</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default LogIn