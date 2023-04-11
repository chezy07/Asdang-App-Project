import React from 'react'

function LandingPage() {
  return (
    <div className='py-10 flex justify-center'>
       <div className="card w-96 bg-base-200 shadow-xl">
            <div className="card-body">
                <div className='border border-gray-300 p-5'>
                    <h2 className="card-title text-7xl py-10">Asdang App</h2>
                    <p className='text-xl py-1'>Your ministry companion</p>
                </div>
            <div className="card-actions justify-center py-16 pb-5" >
                <button className="btn btn-wide">Let's get forward!</button>
            </div>
        </div>
        </div>
    </div>
  )
}

export default LandingPage;