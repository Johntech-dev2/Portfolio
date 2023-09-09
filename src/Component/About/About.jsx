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
    <div className='flex flex-col md:flex-row w-full  items-center mt-[-40px] md:mt-[-40px] gap-[50px]  md:gap-28 md:ml-32'>
        <div className='rounded-lg  hover:bg-purple-600 mb-5 p-7 hover:text-white'>
          <img src='1.jpg' className='w-[230px] h-[230px] object-cover rounded-lg hover:bg-purple-600' />
          <h2 className='font-outfit font-normal text-center'>Front-end Developing</h2>
          <h2 className='text-[12px] text-gray-500 text-center'>Expert in Front-end developer</h2>
          </div>
          <div className='rounded-lg hover:bg-purple-600 hover:text-white mb-5 p-7'>
          <img src='6491428.jpg' className='w-[230px] h-[230px] object-cover rounded-lg' />
          <h2 className='font-outfit font-normal text-center'>Web Developer</h2>
          <h2 className='text-[12px] text-gray-500 text-center'>Expert in Front-end developing</h2>
          </div>
          <div className='rounded-lg hover:bg-purple-600 mb-5 p-7 hover:text-white'>
          <img src='19362653.jpg' className='w-[230px] h-[230px] object-cover rounded-lg' />
          <h2 className='font-outfit font-normal text-center'>React Developer</h2>
          <h2 className='text-[12px] text-gray-500 text-center'>Expert in Front-end developing</h2>
          </div>
         </div>
    </div>   
  )
}

export default About