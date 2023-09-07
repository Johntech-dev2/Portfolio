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
        <div  className='flex justify-between text-[20px] font-outfit font-medium fixed'>
            <h1 className='text-[30px] mt-6 ml-4'>J<span className='text-purple-600 '>O</span>H<span className='text-purple-600'>N</span></h1>
            <div className='flex md:hidden mr-2 p-[28px] h-6'>
            <div>
              {!toggle?
            <AiOutlineMenu onClick={()=>setToggle(true)} className='fixed' />
                 :
            <AiOutlineClose onClick={()=>setToggle(false)} className='fixed' /> 
              }
              {toggle?
                   <ul className='fixed right-0 top-0 w-[45%] bg-white mt-16'>
                   <a href='#Home' className='hover:no-underline'><li className='mr-2 transition-all ease-in-out hover:scale-110 p-4 cursor-pointer'>Home</li></a>
                    <a href='#About' className='hover:no-underline'><li className='mr-2 transition-all ease-in-out hover:scale-110 p-4'>About</li></a>
                    <a href='#' className='hover:no-underline'><li className='mr-2 transition-all ease-in-out hover:scale-110 p-4'>Skils</li></a>
                    <a href='#' className='hover:no-underline'><li className='mr-2 transition-all ease-in-out hover:scale-110 p-4'>Portfolio</li></a>
                    <a href='#' className='hover:no-underline'><li className='mr-2 transition-all ease-in-out hover:scale-110 p-4'>Contact</li></a>
               </ul>
              :null}
            </div>
            </div>
            <div className='hidden md:flex'>
                <ul className='flex flex-row fixed'>
                    <a href='#Home' className='hover:no-underline'><li className='mr-2 transition-all ease-in-out hover:scale-110 p-4'>Home</li></a>
                    <a href='#About' className='hover:no-underline'><li className='mr-2 transition-all ease-in-out hover:scale-110 p-4'>About</li></a>
                    <a href='#' className='hover:no-underline'><li className='mr-2 transition-all ease-in-out hover:scale-110 p-4'>Skils</li></a>
                    <a href='#' className='hover:no-underline'><li className='mr-2 transition-all ease-in-out hover:scale-110 p-4'>Portfolio</li></a>
                    <a href='#' className='hover:no-underline'><li className='mr-2 transition-all ease-in-out hover:scale-110 p-4'>Contact</li></a>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Nav
