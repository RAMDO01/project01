import React from 'react'
import Mountain from "../assets/images/mountain2.jpg"
import Footer from '../components/common/Footer'
import Bamboo from "../assets/images/bamboos-5659340_640.png"



function Volinters() {
    return (
        <>
            <div className=' mx-auto mt-24 mb-16 w-9/12'>
                <div className='flex flex-col gap-4 justify-center relative'>
                    <p className='text-center text-[50px] font-semibold leading-7 h-full p-3 text-richblack-500'>Our Team</p>

                    <div className='flex flex-col gap-3 items-center mt-2'>
                        <img
                            src={Mountain}
                            width={250}
                            height={250}
                            className='rounded-full aspect-square'
                        />
                        <p className='text-richblack-400 text-[2em] font-edu-sa'>Mantu Rana</p>
                        <p className='text-[18px] text-richblack-300 font-edu-sa'>To include links with your icons in a React application, you can modify the approach to include an array of objects that contains both the icon name and the link. This way, you can map over this array to render each icon with its corresponding link.</p>
                    </div>

                    <div className='flex flex-row gap-14 items-center p-12'>
                        <img
                            src={Mountain}
                            // width={200}
                            // height={200}
                            className='aspect-square w-[30%]  -rotate-12 rounded-lg '
                        />
                        <div className='flex flex-col gap-6 items-start w-[50%] -mt-8'>
                            <p className='text-richblack-400 text-[2em] font-edu-sa'>Mantu Rana</p>
                            <p className='text-[18px] text-richblack-300 font-edu-sa'>To include links with your icons in a React application, you can modify the approach to include an array of objects that contains both the icon name and the link. This way, you can map over this array to render each icon with its corresponding link.</p>
                        </div>
                    </div>

                    <div className='flex flex-row gap-14 items-center p-12'>

                        <div className='flex flex-col gap-6 items-start w-[50%] -mt-8'>
                            <p className='text-richblack-400 text-[2em] font-edu-sa'>Mantu Rana</p>
                            <p className='text-[18px] text-richblack-300 font-edu-sa'>To include links with your icons in a React application, you can modify the approach to include an array of objects that contains both the icon name and the link. This way, you can map over this array to render each icon with its corresponding link.</p>
                        </div>
                        <img
                            src={Mountain}
                            // width={200}
                            // height={200}
                            className='aspect-square w-[30%]  rotate-12 rounded-lg '
                        />
                    </div>

                    <div className='flex flex-row gap-8 items-center mt-2 mb-5'>
                        <img
                            src={Mountain}
                            width={300}
                            height={300}
                            className='rounded-xl'
                        />
                        <div className='flex flex-col gap-4 w-[60%]'>
                            <p className='text-richblack-400 text-[2em] font-edu-sa'>Mantu Rana</p>
                            <p className='text-[18px] text-richblack-300 font-edu-sa'>To include links with your icons in a React application, you can modify the approach to include an array of objects that contains both the icon name and the link. This way, you can map over this array to render each icon with its corresponding link.</p>
                        </div>

                    </div>

                    <div className='flex flex-row gap-1 border-2 rounded-xl bg-richblack-25 relative '>
                        <div className='flex flex-col gap-4 items-center p-8 justify-center z-40'>

                            <img
                                src={Mountain}
                                // width={200}
                                // height={200}
                                className='aspect-square rotate-12 rounded-3xl w-[40%] '
                            />
                            <p className='text-richblack-700 text-[2em] font-edu-sa'>Mantu Rana</p>
                            <p className='text-[18px] text-richblack-500 font-edu-sa'>To include links with your icons in a React application, you can modify the approach to include an array of objects that contains both the icon name and the link. This way, you can map over this array to render each icon with its corresponding link.</p>
                        </div>
                        <div className='flex flex-col gap-4 items-center p-8  justify-center z-40'>

                            <img
                                src={Mountain}
                                // width={200}
                                // height={200}
                                className='aspect-square rotate-12 rounded-3xl w-[40%] '
                            />
                            <p className='text-richblack-700 text-[2em] font-edu-sa'>Mantu Rana</p>
                            <p className='text-[18px] text-richblack-500 font-edu-sa'>To include links with your icons in a React application, you can modify the approach to include an array of objects that contains both the icon name and the link. This way, you can map over this array to render each icon with its corresponding link.</p>
                        </div>

                        <div className='absolute right-0 z-20 bottom-0'>
                            <img src={Bamboo} />
                        </div>

                    </div>


                </div>
            </div>

            <Footer />

        </>

    )
}

export default Volinters