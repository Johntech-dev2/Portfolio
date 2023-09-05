import React, { useState } from 'react'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'

function Nav() {
  const [toggle, setToggle] = useState(false);

  
  return (
    // <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4'>
    //  <img src='logo.png' className='h-32' />
    //  <ul className='flex hidden no-underline'>
    //     <li className='p-4'><a href='#Home'>Home</a></li>
    //     <li className='p-4'><a href=''>About me</a></li>
    //     <li className='p-4'><a href=''>Skills</a></li>
    //     <li className='p-4'><a href=''>Companies</a></li>
    //     <li className='p-4'><a href=''>Contact us</a></li>
    //  </ul>
    //  <div>
    //     <AiOutlineMenu size={20}/>
    //  </div>
    //  <div className=''>
    //     <ul className=''>
    //     <li className='p-4'><a href='#Home'>Home</a></li>
    //     <li className='p-4'><a href=''>About me</a></li>
    //     <li className='p-4'><a href=''>Skills</a></li>
    //     <li className='p-4'><a href=''>Companies</a></li>
    //     <li className='p-4'><a href=''>Contact us</a></li>
    //     </ul>
    //  </div>
    // </div>
    <div>
        <div  className='flex justify-between'>
            <img src='logo.png' className='h-28' />
            <div className='flex md:hidden mr-2 p-[28px] h-6'>
            <div>
              {!toggle?
            <AiOutlineMenu onClick={()=>setToggle(true)} />
                 :
            <AiOutlineClose onClick={()=>setToggle(false)} /> 
              }
              {toggle?
                   <ul className='fixed right-0 top-0 w-[60%] bg-white mt-16'>
                   <li className='mr-2 transition-all ease-in-out hover:scale-110 p-6'>Home</li>
                   <li className='mr-2 transition-all ease-in-out hover:scale-110 p-4'>About me</li>
                   <li className='mr-2 transition-all ease-in-out hover:scale-110 p-4'>Skills</li>
                   <li className='mr-2 transition-all ease-in-out hover:scale-110 p-4'>Portfolio</li>
                   <li className='mr-2 transition-all ease-in-out hover:scale-110 p-4'>Companies</li>
                   <li className='mr-2 transition-all ease-in-out hover:scale-110 p-4'>Contact us</li>
               </ul>
              :null}
            </div>
            </div>
            <div className='hidden md:flex'>
                <ul className='flex flex-row'>
                    <li className='mr-2 transition-all ease-in-out hover:scale-110 p-4'>Home</li>
                    <li className='mr-2 transition-all ease-in-out hover:scale-110 p-4'>About me</li>
                    <li className='mr-2 transition-all ease-in-out hover:scale-110 p-4'>Skills</li>
                    <li className='mr-2 transition-all ease-in-out hover:scale-110 p-4'>Portfolio</li>
                    <li className='mr-2 transition-all ease-in-out hover:scale-110 p-4'>Companies</li>
                    <li className='mr-2 transition-all ease-in-out hover:scale-110 p-4'>Contact us</li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Nav
