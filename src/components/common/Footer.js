import React from 'react'
import { GrYoutube } from "react-icons/gr"
import {  FaInstagram, FaFacebook, FaTwitter, FaWhatsApp } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import Footergrass from "../../assets/images/grass-2029768_1920.png"
import FooterBamboo from "../../assets/images/bamboos-5659340_640.png"
import Footerframe from "../../assets/images/photo-frame-1698494_640.png"


import { FaBeer, FaCoffee } from 'react-icons/fa'; // Importing icons from FontAwesome
import { MdAlarm, MdAccountCircle } from 'react-icons/md'; // Importing icons from Material Design


const BootomFooter = ["Privacy Policy", "Cookie Policy", "Terms"]
const ImportantLink = ["Home", "About", "Volentiers", "News", "Next Destination"]
const iconData = [
  { name: 'Youtube', icon: "GrYoutube", link: '#' },
  { name: 'coffee', link: 'https://example.com/coffee' },
  { name: 'alarm', link: 'https://example.com/alarm' },
  { name: 'account', link: 'https://example.com/account' },
];

const iconMapping = {
  youtube: GrYoutube,
  coffee: FaCoffee,
  alarm: MdAlarm,
  account: MdAccountCircle,
};

const IconRenderer = ({ iconName, link }) => {
  const IconComponent = iconMapping[iconName];
  return IconComponent ? (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <IconComponent />
    </a>
  ) : null;
};
function Footer() {
  return (

    <>
      <div className='bg-white relative'>

        <div className='footerbg z-30'>

          <div className=' flex flex-row w-[70%] mx-auto  justify-between items-center py-12'>
          <div className='absolute z-40 -left-20'>
            <img src={FooterBamboo} height={335} width={335} />
           </div>
         
          
            <div className='flex flex-row gap-9  z-50  mx-auto'>
            
              <div className='text-richblack-500 border-r border-richblack-600 border-2px pr-3'>
              
                <p className='text-richblack-700 text-[22px] font-inter font-semibold'>Important Links</p>
                {ImportantLink.map((ele, i) => (
                  <div
                    key={i}
                    className='text-[18px] font-inter font-thin text-richblack-700 pl-2 pt-2 hover:font-bold hover:text-richblack-800 transition-all duration-200'
                  >
                    <Link to={ele === "Home" ?  "/" : ele.split(" ").join("-").toLocaleLowerCase() }>
                      {ele}
                    </Link>
                  </div>
                ))}
              </div>

              <div>
                <div className='text-richblack-500'>
                  <p className='text-richblack-700 text-[22px] font-inter font-semibold'>Social Links</p>
                  <div>
                    {iconData.map((icons, i) => (
                      <div key={i} 
                      className='text-[18px] font-inter font-thin text-richblack-700 pl-2 pt-2 hover:font-bold hover:text-richblack-800 transition-all duration-200'
                      >
                        <div className='flex flex-row gap-2'>
                        <IconRenderer key={icons.name} iconName={icons.icon} link={icons.link} />
                        <p>{icons.name}</p>
                        </div>
                        
                      </div>
                      
                    ))}
                  </div>
                </div>



              </div>
            </div>

            <div className='flex flex-col gap-4 '>
              <p className='text-caribbeangreen-500 text-[35px] font-inter font-semibold '>Join Us</p>
              <input
                type='email'
                placeholder='Enter Your email'
                className='input-style'
              />
            </div>
            

          </div>
        </div>


      </div>

      {/* <img src={Footergrass}/> */}

      <div className=' bg-white flex lg:flex-row items-center justify-between max-w-maxContent text-richblack-400 mx-auto py-2'>
        <div className='flex flex-row lg:items-start justify-between gap-3 text-sm'>
          {BootomFooter.map((ele, i) => (
            <div
              key={i}
              className={`${BootomFooter.length - 1 === i ? "" : "border-r border-richblack-700 "
                } px-3 cursor-pointer hover:text-richblack-50 transition-all duration-200`}
            >
              <Link to={ele.split(" ").join("-").toLocaleLowerCase()}>
                {ele}
              </Link>
            </div>
          ))}
        </div>
        <div className="text-center">Made with ❤️ CodeHelp © 2023 Studynotion</div>
      </div>
    </>

  )
}

export default Footer

