import React, { useEffect, useState } from 'react'
import BtnHome from '../components/common/BtnHome'
import { Link } from 'react-router-dom'
import Footer from '../components/common/Footer'
import {homeLession} from "../data/homeLession"

function Home() {



    return (
        <>
            <div>
                {/* section 1 */}
                <section>
                    <div className='bg-home1 '>
                        <div className='w-11/12 mx-auto text-richblack-25 lg:h-[380px] my-14'>
                            <div className=' w-[80%] mx-auto flex flex-col gap-y-4 items-center justify-center border border-richblack-50 mt-20'>
                                <h1 className='lg:text-[50px] text-richblack-5'>Join us to save Earth</h1>
                                <div className='flex flex-col gap-3 '>
                                    <p>Endless Potential</p>
                                    <p>Became Together and clean together</p>
                                    <p>Save Life Save Nature Save Earth</p>
                                </div>
                                
                            </div>
                        </div>

                    </div>
                </section>


                {/* section 2 */}
                <section>
                    <div className='w-full bg-caribbeangreen-50 flex items-center justify-center text-richblack-50'>

                        <div className='w-11/12 max-w-maxContent'>
                            <div className=''>
                               {homeLession.map((items, i) => (
                                <div key={i}>
                                    <div>
                                        
                                    </div>
                                </div>
                               ))}
                            </div>
                        </div>

                    </div>
                </section>

                {/* section 3 */}
                <section>
                    <div className='bg-home2 flex items-center justify-center'>
                        <div className='flex flex-col gap-y-2 items-center mb-20 mt-16 w-[75%]'>
                            <h2 className='text-4xl text-richblack-5 font-semibold font-inter text-center '> <span className="text-richblue-500">The only  </span>way to make this happen is to make action!</h2>
                            <p className='text-[18px] text-richblack-200'> Prasent commodo curusus magna, vel seclerisque nislet.</p>
                            <div className='flex flex-row items-center gap-x-3 mt-8'>
                                <BtnHome
                                    children={"Donate Now!"}
                                    linkto={"/donate"}
                                    active={true}
                                />
                                <Link
                                    to="/signup"
                                    className="text-center text-[13px] sm:text-[16px] px-6 py-3 rounded-md font-bold bg-caribbeangreen-100
                                    shadow-[2px_2px_0px_0px_rgba(255,255,255,0.18)]  hover:shadow-none hover:scale-95 transition-all duration-200 w-fit"
                                >
                                    Act Now!
                                </Link>
                            </div>
                        </div>
                        
                    </div>
                </section>
                <Footer/>
            </div>
        </>
    )
}

export default Home