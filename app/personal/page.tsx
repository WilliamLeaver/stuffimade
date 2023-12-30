import React from 'react'
import Image from 'next/image'
const space = "                               ";
const page = () => {
  return (
    <div className="h-screen w-full text-white rounded-2xl flex flex-col sm:justify-center items-center">
      <div className='p-4 rounded-2xl bg-base-100'>
        <p className='font-bold text-6xl text-center underline underline-offset-2 decoration-2 decoration-wavy'>Hey look at me! This is my Info</p>
        <div className="w-full h-36"/>
        <div className="join join-vertical w-full">
          <div className="collapse collapse-arrow join-item border-b-2  border-dotted">
            <input type="radio" name="stats"/>
            <div className='collapse-title w-min rounded-3xl font-bold text-4xl text-left'>Education</div>
            <div className='collapse-content'>

              <p className='px-3 font-semibold'>Southern New Hampshire University | Manchester, NH</p>
              <p className='font-extrabold text-right'>06/2021-10/2023</p>
              <p className='px-3 italic'>B.S. Computer Science w/conc in Software Engineering</p>
              <div className='border-b my-2'/>
              <p className='px-3 font-semibold'>Southern New Hampshire University | Manchester, NH</p>
              <p className='font-extrabold text-right'>01/2017-12/2019</p>
              <p className='px-3 italic'>Associates of Science in Information Technology</p>
            
            </div>
          </div>
          <div className="collapse collapse-arrow join-item">
            <input type="radio" name="stats"/>
            <div className='collapse-title w-min rounded-3xl font-bold text-4xl text-left'>Experience</div>
            <div className='collapse-content'>

              <p className='px-3 font-semibold'>VantagePoint Ai LLC | Remote (Based out of Tampa, FL)</p>
              <p className='font-extrabold text-right'>04/2022-Present</p>
              <p className='px-3 italic'>Software Support Level Two</p>
              
              <div className='border-b my-2'/>
              <p className='px-3 font-semibold'>Best Buy | Menifee, CA</p>
              <p className='font-extrabold text-right'>09/2021-04/2022</p>
              <p className='px-3 italic'>Sales Associate/Customer Service/Inventory Management</p>
              <div className='border-b my-2'/>
              <p className='px-3 font-semibold'>Evertek | Temecula, CA</p>
              <p className='font-extrabold text-right'>09/2021-04/2022</p>
              <p className='px-3 italic'>Sales Associate/Customer Service/Inventory Management</p>
            </div>
          </div>
          <div className="collapse collapse-arrow join-item border-t-2  border-dotted">
            <input type="radio" name="stats"/>
            <div className='collapse-title w-min rounded-3xl font-bold text-4xl text-left'>Skills</div>
            <div className='collapse-content'>
              <p className='px-3'>EVERYTHING</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page