import React from 'react'
const About = () => {
  return (
    <div id='About' className='mt-36'>
    <img src='wave.png' className='w-screen absolute' />
    <img src='laptop.png' className='absolute mt-[-130px] md:mt-[-180px] w-[220px] md:w-[300px]' />
    <div className='h-[200px] bg-purple-600 '>
        <h2 className='text-white font-outfit font-medium text-[50px] text-center pt-10'>About <span className='text-black'>Me</span></h2>
        <h2 className='text-white text-center mt-10 font-outfit  font-extralight px-10 
        md:px-64 lg:px-48'>I am software developer working in IT industry from  last 6 Years as Full stack developer. Expert in UI/UX design, Front-end  and Back-end Development'</h2>
    </div> 
    </div>   
    
  )
}

export default About