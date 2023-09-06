import React from 'react'
import {BiLogoGmail} from 'react-icons/bi'
import {FaTwitter, FaLinkedinIn} from 'react-icons/fa'
function Icon() {
  return (
    <div>
       <div className='flex ml-[160px] gap-[100px] mt-[30px] sm:ml-[70px]'>
          <a href='mailto:johnayomide50@gmail.com'><BiLogoGmail /></a>
          <a href=''><FaLinkedinIn /></a>
          <a href=''><FaTwitter /></a>
       </div>
    </div>  
  )
}

export default Icon
