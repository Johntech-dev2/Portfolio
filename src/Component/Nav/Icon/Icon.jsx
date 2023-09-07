import React from 'react'
import {BiLogoGmail} from 'react-icons/bi'
import {FaTwitter, FaLinkedinIn} from 'react-icons/fa'
function Icon() {
  return (
    <div>
       <div className='flex xl:ml-[150px] gap-[100px] mt-[30px]  ml-[50px]'>
          <a href='mailto:johnayomide50@gmail.com'><BiLogoGmail /></a>
          <a href=''><FaLinkedinIn /></a>
          <a href=''><FaTwitter /></a>
       </div>
    </div>  
  )
}

export default Icon
