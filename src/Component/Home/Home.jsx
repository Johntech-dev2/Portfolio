import React from 'react'
import Typical from 'react-typical'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'
import {FaLinkedinIn} from 'react-icons/fa'
import {BiLogoGmail} from 'react-icons/bi'
import Icon from '../Nav/Icon/Icon'
function Home() {
  return (
        <div id='Home' className='mt-7 px-4 flex flex-col md:px-20 md:flex-row'>
         <div>
         <h1 className='text-[35px] font-medium font-outfit  mb-2 text-center md:text-[30px]'>Hello, I'M John</h1>
           <h1 className='text-[35px] font-medium font-outfit text-center mb-[20px] text-purple-600 md:whitespace-normal'>
              <Typical
                 loop={Infinity}
                 steps={[
                    "React Developer",
                    1000,
                    "Web Developer",
                    1000,
                    "App Developer",
                    1000,
                 ]} />
           </h1>
     <p className='text-gray-500 xl:w-[550px] lg:w-[450px] md:w-[400px] sm:w-[250pxs] text-[25px] text-center mb-[20px]  font-outfit font-extralight'>I am John tech i am a front-end react web developer and  With a passion for creating innovative and user-friendly websites.</p> 
     <br />
     <a href='John Resume.pdf' download='John Resume.pdf'>
     <button className='hover:z-50 transition-all duration-300 ease-in-out  hover:scale-125 bg-purple-600 p-2 rounded-md text-white xl:ml-[200px] lg:ml-[160px] md:ml-[130px] sm:ml-[20px] sm:mr-[20px]    ml-[100px] mr-[20px] font-outfit font-extralight' >
        Resume
     </button>
     </a>
     <a href='#'>
        <button className='hover:z-50 transition-all duration-300 ease-in-out hover:scale-125 bg-purple-600 p-2 rounded-md text-white '>Hire me</button>
     </a>
     <Icon />
     </div>
     <img src='homeImage.png' className=' w-[300px] md:w-[400px] md:whitespace-normal ml-[30px] sm:w-200 sm:mx-auto md:mx-auto '/>
     <div>
     </div>
     </div>
  ) 
}

export default Home