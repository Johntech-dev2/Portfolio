import React from 'react'
import Typical from 'react-typical'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'
import {FaLinkedinIn} from 'react-icons/fa'
import {BiLogoGmail} from 'react-icons/bi'
function Home() {
  return (
        <div id='Home' className='mt-7 px-4 md:px-20 flex flex-col md:flex-row'>
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
     <p className='text-gray-500 w-[350px] text-[15px] mb-[20px] md:ml-[10px] lg:ml-[120px] xl:-[140px] font-outfit font-extralight md:whitespace-normal'>I am John tech i am a front-end react web developer and  With a passion for creating innovative and user-friendly websites.</p> 
     <br />
     <a href='John Resume.pdf' download='John Resume.pdf'>
     <button className='hover:z-50 transition-all duration-300 ease-in-out  hover:scale-125 bg-purple-600 p-2 rounded-md text-white ml-[90px] mr-9 md:ml-[100px] font-outfit font-extralight' >
        Resume
     </button>
     </a>
     <a href='#'>
        <button className='hover:z-50 transition-all duration-300 ease-in-out hover:scale-125 bg-purple-600 p-2 rounded-md text-white'>Hire me</button>
     </a>
     </div>
     <img src='homeImage.png' className=' w-[300px] md:w-[400px] md:whitespace-normal'/>
     <div>
     </div>
     </div>
  ) 
}

export default Home