import React from 'react'

function SideBar() {
  return (
    <div className='py-10'>
        <div className="drawer bg-gray-50">
            <input id="my-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content relative">
                <div className="navbar bg-slate-200">
                    <div className="flex-none">
                        <label htmlFor= 'my-drawer'className="btn btn-square btn-ghost">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                        </label>
                    </div>
                    <div className="flex-1">
                        <a className="btn btn-ghost normal-case text-xl">AsdangApp</a>
                    </div>
                        <div className="flex-none">
                            <button className="btn btn-square btn-ghost">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path></svg>
                            </button>
                        </div>
                    </div>
                    <div className='relative'>
                        <div className='pt-5 pl-10'>
                            <h1 className='text-start text-2xl'>Good morning User</h1>
                        </div>
                        <div className='px-10 pt-5 absolute flex'>
                            <div className="card card-normal w-auto h-96 bg-base-100 shadow-xl col-3xs">
                                <div className="card-body">
                                    <h2 className="card-title px-96 justify-center">Dashboard</h2>
                                </div>
                            </div>
                            <div className='p-10 pt-0'>
                                <div className="card w-auto bg-base-100 shadow-xl">
                                    <div className="card-body">
                                        <h2 className="card-title justify-center">Available Slots for LPW</h2>
                                        <div className="card-actions pt-56 px-10" >
                                            <button className="btn btn-wide">Apply</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='relative grid grid-rows-1 grid-flow-col gap-3 pt-96 pl-10 mt-12 '>
                        <div className=''>
                            <div className="card w-96 bg-base-100 shadow-xl">
                                <div className="card-body">
                                    <h2 className="card-title py-32 justify-center">Today's Schedule</h2>
                                </div>
                            </div>
                        </div>
                        <div className=''>
                            <div className="card w-96 bg-base-100 shadow-xl">
                                <div className="card-body">
                                    <h2 className="card-title py-32 justify-center">Today's Territory</h2>
                                </div>
                            </div>
                        </div>
                        <div className=''>
                            <div className="card w-96 bg-base-100 shadow-xl">
                                <div className="card-body">
                                    <h2 className="card-title py-24 justify-center">Notification for Application Approval</h2>
                                </div>
                            </div>
                        </div>
                    </div> 
                </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 bg-slate-50 text-base-content py-5">
                    <div className='pb-5'>
                        <div className="card w-auto bg-base-100">
                            <div className="card-body">
                                <p className="card-title text-start text-base">USER</p>
                            </div>
                        </div>
                    </div>
                    <li><a>Home</a></li>
                    <li><a>My Group</a></li>
                    <li><a>Territories</a></li>
                    <li><a>Schedules</a></li>
                    <li><a>Application</a></li>
                    <li><a>Reservation</a></li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default SideBar;