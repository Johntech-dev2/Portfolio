import React from 'react'
import {BiLogoGmail} from 'react-icons/bi'
import {FaTwitter, FaLinkedinIn} from 'react-icons/fa'
function Icon() {
  return (
    <div>
       <div className='flex'>
          <BiLogoGmail />
          <FaLinkedinIn />
          <FaTwitter />
       </div>
    </div>  
  )
}

export default Icon
