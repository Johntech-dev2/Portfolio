import React from 'react'

const Contact = () => {
  return (
    <div id='Contact' className='mt-[80px]'>
      <div className='flex flex-row justify-center'>
       <h3 className='font-outfit font-light text-[30px] mt-4 text-center'>Contact <span className='text-purple-600'>Me</span></h3>
       <img src='phone.png' className='w-[80px] animate-bounce' />
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 justify-evenly px-10 md:px-44'>
            <img src='contactusbg.png'  className="w-[300px] mr-10"/>
            <form name="contact" method="POST" data-netlify="true">
           <div className='w-full'>
           <div className='flex flex-col '>
            <label className='text-gray-400 '>Email</label>
            <input type="text"  placeholder='yourname@gmail.com' required
             className='border-[1.5px] px-2 border-purple-300 
              hover:border-purple-500 rounded-md'  />
            </div>
            <div className='flex flex-col'>
            <label className='text-gray-400 '>Message</label>
            <textarea type="text" rows={7} placeholder='Type your message here' required
             className='border-[1.5px] px-2 hover:border-purple-500 border-purple-300 rounded-md'  />
           <button className='transition-all ease-in-out hover:scale-110 bg-purple-500 flex flex-row items-center justify-center text-[14px]  py-1 mt-5 text-white  rounded-md mb-4'>
           Submit
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="ml-2 w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
</svg>
            </button>
            </div>
           </div> 
           </form> 
        </div>
        </div>
  )
}

export default Contact
