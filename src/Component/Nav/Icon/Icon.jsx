import React from 'react'
import {BiLogoGmail} from 'react-icons/bi'
import {FaTwitter, FaLinkedinIn} from 'react-icons/fa'
function Icon() {
  return (
    <div>
       <div className='flex xl:ml-[150px] gap-[100px] mt-[30px]  ml-[50px] md:ml-[80px]'>
          <a href='www.linkedin.com/in/john-tech-742782275'><FaLinkedinIn /></a>
          <a href=''><FaTwitter /></a>
          <a href='mailto:johnayomide50@gmail.com'><BiLogoGmail /></a>
       </div>
    </div>  
  )
}

export default Icon
