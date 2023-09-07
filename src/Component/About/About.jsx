import React from 'react'
const About = () => {
  return (
    <div id='About'>
    <div className='mt-36'>
    <img src='wave.png' className='w-screen absolute' />
    <img src='laptop.png' className='absolute mt-[-130px] md:mt-[-180px] w-[220px] md:w-[300px]' />
    <div className='h-[250px] bg-purple-600 '>
        <h2 className='text-white font-outfit font-medium text-[50px] text-center pt-10'>About <span className='text-black'>Me</span></h2>
        <h2 className='text-white text-center mt-10 font-outfit  font-extralight px-10 mb- md:mb-56
        md:px-64 lg:px-48'>I am software developer working in IT industry from  last 6 Years as Full stack developer. Expert in UI/UX design, Front-end  and Back-end Development'</h2>
    </div> 
    </div>
    <div className='flex flex-col md:flex-row w-full items-center mt-[-10px] md:mt-[-20px] gap-12 md:gap-28 md:ml-52'>
        <div>
          <img src='1.jpg' className='w-[230px] h-[230px] object-cover rounded-lg' />
          <h2 className='font-outfit font-normal text-center'>Front-end Developer</h2>
          <h2 className='text-[12px] text-gray-500 text-center'>Expert in Front-end developer</h2>
          </div>
          <div>
          <img src='6491428.jpg' className='w-[230px] h-[230px] object-cover rounded-lg' />
          <h2 className='font-outfit font-normal text-center'>Web Developer</h2>
          <h2 className='text-[12px] text-gray-500 text-center'>Expert in Front-end developer</h2>
          </div>
          <div>
          <img src='19362653.jpg' className='w-[230px] h-[230px] object-cover rounded-lg' />
          <h2 className='font-outfit font-normal text-center'>React Developer</h2>
          <h2 className='text-[12px] text-gray-500 text-center'>Expert in Front-end developer</h2>
          </div>
         </div>
    </div>   
  )
}

export default About