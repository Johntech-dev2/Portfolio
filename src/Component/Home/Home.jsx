import React from 'react'
import Typical from 'react-typical'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'
function Home() {
  return (
       <div id='Home'>
          <h1 className='text-[35px] font-medium md:text-[30px] ml-3' >Hello,</h1>
       <div className='flex'>
         <h1 className='text-[35px] font-medium md: ml-3 whitespace-normal mr-1'>I am a</h1>
          <h1 className='text-[35px] font-medium text-purple-600 md:whitespace-normal'>
           <Typical 
           loop={Infinity}
           steps={[
             "Ethusiastic Dev",
              1000,
             "React Dev",
              1000,
             "Web Dev",
              1000,
             "Web app Dev",
              1000,
             "App Dev",
              1000,
           ]}
           />
          </h1>
       </div>
      <p className='text-gray-500 ml-3 w-[350px] text-[15px] md:whitespace-normal flex-wrap'>I am John tech i am a front-end react web developer and  With a passion for creating innovative and user-friendly websites.</p> 
      <br />
      <div>
      <a href='John Resume.pdf' download='John Resume.pdf'>
      <button className='hover:z-50 transition-all duration-300 ease-in-out  hover:scale-125 bg-purple-600 p-2 rounded-md text-white ml-3 mr-9 items-center md:mr-19' >
         Resume
      </button>
      </a>
      <a href='#'>
         <button className='hover:z-50 transition-all duration-300 ease-in-out hover:scale-125 bg-purple-600 p-2 rounded-md text-white'>Hire me</button>
      </a>
      </div>
      {/* <div className='bg'>
         <img className='bg' src='homeImage.png' />
      </div> */}
    </div>
    
  )
}

export default Home