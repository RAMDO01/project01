import React from 'react'
import {NavbarLinks} from "../../data/navLinks"
import { Link, matchPath } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import fullLogo from "../../assets/images/fullLogo.png"
function NavBar() {
    const location = useLocation()

    const matchRoute = (route) => {
        return matchPath({path:route},location.pathname)
    }
  return (
    <>
        <div className={`absolute bg-richblack-600 left-0 right-0 top-0  flex items-center justify-center bg-transparent bg-opacity-30 ${matchRoute(location.pathname !== "/" ? "" : "")} `}>
            <div className=' flex w-11/12 justify-between items-center max-w-maxContent '>
                <img
                   src={fullLogo} 
                //    height={190}
                //    width={200}
                   className='h-[100px] w-[400px] object-cover items-center'
                />
                <div>
                    <ul className='flex gap-x-8 text-richblack-50 '>
                        {NavbarLinks.map((link,i) => (
                            <li key={i}>
                                {link.title === "Donate" ? (
                                <div className=''>
                                    <Link to={link?.path}>
                                        {link?.title}
                                    </Link>
                                </div>) : (
                                    <div
                                    className={`${matchRoute(link?.path) ? "text-yellow-100" : "text-richblack-5"}`}
                                    >
                                        <Link to={link?.path}>
                                            {link.title}
                                        </Link>    
                                    </div>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    </>
  )
}

export default NavBar