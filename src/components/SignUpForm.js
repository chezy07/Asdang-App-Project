import React from 'react'

function SignUpForm() {
  return (
    <div className='py-10 flex justify-center'>
        <div className="card card-compact w-96 bg-base-200 p-5">
            <div className='card-body'>
                <div className="pt-5">
                    <h1>Create an account to get started.</h1>
                </div>
                <div className='py-3 form-control'>
                    <label className="label label-text">Name</label>
                    <input type="text" placeholder="Enter Your Name" className="input input-bordered w-full max-w-xs"></input>
                </div>
                <div className='py-3 form-control'>
                    <label className="label label-text">Email Address</label>
                    <input type="text" placeholder="Enter Your Email Address" className="input input-bordered w-full max-w-xs"></input>
                </div>
                <div className='py-3 form-control'>
                    <label className="label label-text">Congregation</label>
                    <select className="select w-full max-w-xs">
                    <option disabled selected>Select Your Congregation</option>
                    <option>Dicklum Congregation</option>
                    <option>Greenfields Congregation</option>
                    <option>Lapasan Congregation</option>
                    <option>Manolo Fortich Congregation</option>
                    <option>Sto.Nino Congregation</option>
                    </select>
                </div>
                <div className='py-5 form-control'>
                    <h2 className='pb-5'>Please select one of the following:</h2>
                    <div className="form-control">
                        <label className="label cursor-pointer">
                            <span className='label-text'>Publisher</span>
                            <input type="radio" name="radio-10" className="radio"/>
                        </label>
                    </div>
                    <div className="form-control">
                        <label className="label cursor-pointer">
                            <span className='label-text'>Elder</span>
                            <input type="radio" name="radio-10" className="radio"/>
                        </label>
                    </div>
                    <div className="form-control">
                        <label className="label cursor-pointer">
                            <span className='label-text'>Service Overseer</span>
                            <input type="radio" name="radio-10" className="radio"/>
                        </label> 
                    </div>
                    <div className='pt-10'>
                        <button className='btn btn-wide'>Create Account</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SignUpForm;