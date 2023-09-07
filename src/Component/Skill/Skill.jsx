import React from 'react'

const Skill = () => {
  return (
    <div id='skill' className='mt-10'>
       <div className='flex flex-row justify-center'>
         <img src='skill.png' className='animate-bounce h-[80px] mb-4 ' />
         <h3 className='font-outfit font-light text-[30px] mt-2'>Skills & <span className='text-purple-600'>Expertise</span></h3>
       </div>
       <div className='flex flex-col md:flex-row  justify-evenly px-8 md:px-0 mt-8 '>
       <div className='grid grid-cols-4 md:grid-cols-4 gap-8  items-center'>
       <div className='w-[60px] transition ease-in-out delay-100 hover:scale-125 bg-purple-50p-3 rounded-full' >
     <img src='react.png'
    className="w-[60px]"/>
      </div>
      <div className='w-[60px] transition ease-in-out delay-100 hover:scale-125 bg-purple-50p-3 rounded-full' >
     <img src='javascript.png'
    className="w-[60px]"/>
      </div>
      <div className='w-[60px] transition ease-in-out delay-100 hover:scale-125 bg-purple-50p-3 rounded-full' >
     <img src='tailwind.png'
    className="w-[60px]"/>
      </div>
      <div className='w-[60px] transition ease-in-out delay-100 hover:scale-125 bg-purple-50p-3 rounded-full' >
     <img src='CSS.jpg'
    className="w-[60px]"/>
      </div>
      <div className='w-[60px] transition ease-in-out delay-100 hover:scale-125 bg-purple-50p-3 rounded-full' >
     <img src='typescript.png'
    className="w-[60px]"/>
      </div>
      <div className='w-[60px] transition ease-in-out delay-100 hover:scale-125 bg-purple-50p-3 rounded-full' >
     <img src='GitHub-logo.png'
    className="w-[60px]"/>
      </div>
      <div className='w-[60px] transition ease-in-out delay-100 hover:scale-125 bg-purple-50p-3 rounded-full' >
     <img src='vscode1.png'
    className="w-[60px]"/>
      </div>
      <div className='w-[60px] transition ease-in-out delay-100 hover:scale-125 bg-purple-50p-3 rounded-full' >
     <img src='chrome.png'
    className="w-[60px]"/>
      </div>
      <div className='w-[60px] transition ease-in-out delay-100 hover:scale-125 bg-purple-50p-3 rounded-full' >
     <img src='git-logo.png'
    className="w-[60px]"/>
      </div>
      <div className='w-[60px] transition ease-in-out delay-100 hover:scale-125 bg-purple-50p-3 rounded-full' >
     <img src='netlify.jpg'
    className="w-[60px]"/>
      </div>
      <div className='w-[60px] transition ease-in-out delay-100 hover:scale-125 bg-purple-50p-3 rounded-full' >
     <img src='html.png'
    className="w-[60px]"/>
      </div>
      <div className='w-[60px] transition ease-in-out delay-100 hover:scale-125 bg-purple-50p-3 rounded-full' >
     <img src='es.jpg'
    className="w-[60px]"/>
      </div>
        </div>
        </div>
    </div>
  )
}

export default Skill