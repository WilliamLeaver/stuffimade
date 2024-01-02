import React from 'react'
import Image from 'next/image'
import Link from 'next/link';

const page = () => {
  return (
    <div className="h-full sm:w-full text-white rounded-2xl flex flex-col sm:justify-center items-center">
      <div className='p-4 rounded-2xl bg-base-100'>
        <p className='font-bold text-6xl text-center underline underline-offset-2 decoration-2 decoration-wavy'>Hey look at me! This is my Info</p>
        <div className="h-52 md:h-36 flex flex-row">
          <div className='basis-1/2 flex flex-col items-center'>
            <h1 className='h-min  pt-5 text-4xl font-extrabold'>William Leaver</h1>
            <p className='h-min'>184 Overlook Drive, Pensacola, FL, 32503</p>
            <p className='h-min'>317-650-6278 | William.Leaver.IT@gmail.com</p>
          </div>
          <div className='basis-1/2 flex flex-col md:flex-row items-center justify-evenly'>
            <Link href="https://github.com/WilliamLeaver" className="btn btn-rounded bg-teal-700 hover:base-200 focus:animate-pop rounded-full w-fit h-min p-2"><img className="rounded-full " src="https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png" alt="" width={100} height={100}/></Link>
            <Link href="https://www.linkedin.com/in/william-leaver-a79bb31ba/" className="btn btn-rounded bg-teal-700 hover:base-200 focus:animate-pop rounded-full w-fit h-min p-2"><Image className="rounded-full" src="/linkedin.svg" alt="" width={100} height={100}/></Link>
          </div>
        </div>
        <div className="join join-vertical w-full h-full">
          <div className="collapse collapse-arrow join-item border-b-2  border-dotted hover:bg-base-300">
            <input type="checkbox" name="stats"/>
            <div className='collapse-title w-min rounded-3xl font-bold text-4xl text-left'>Education</div>
            <div className='collapse-content'>

              <p className='px-3 text-xl font-semibold'>Southern New Hampshire University | Manchester, NH</p>
              <p className='font-extrabold sm:text-right'>06/2021-10/2023</p>          
              <p className='px-3 italic font-medium'>B.S. Computer Science w/conc in Software Engineering</p>
             
              <div className='border-b my-2'/>
             
              <p className='px-3 text-xl font-semibold'>Southern New Hampshire University | Manchester, NH</p>
              <p className='font-extrabold sm:text-right'>01/2017-12/2019</p>
              <p className='px-3 italic font-medium'>Associates of Science in Information Technology</p>
            
            </div>
          </div>

          <div className="collapse collapse-arrow join-item hover:bg-base-300">
            <input type="checkbox" name="stats"/>
            <div className='collapse-title w-min rounded-3xl font-bold text-4xl text-left'>Experience</div>
            <div className='collapse-content'>

              <p className='px-3 text-xl font-semibold'>VantagePoint Ai LLC | Remote (Based out of Tampa, FL)</p>
              <p className='font-extrabold sm:text-right'>04/2022-Present</p>
              <p className='px-3 italic font-medium'>Software Support Level Two</p>
              
              <p className='px-5 font-light'>› Develop and implement tools within my daily workflow to mitigate human errors & and enhance operational efficiency, frequently outperforming team metrics by up to 20%.</p>
              <p className='px-5 font-light'>› Create and oversee tickets generated from emails, calls, and voicemails, ensuring accurate tracking of customer interactions.</p>
              <p className='px-5 font-light'>› Facilitate customer licensing and software customization in alignment with their selected markets and indicators.</p>
              <p className='px-5 font-light'>› Exceeded onboarding expectations by upskilling within two weeks of joining to address immediate company needs.</p>
              <p className='px-5 font-light'>› Deliver consistency by exceeding monthly targets, generating ~$40k in revenue.</p>
                

              <div className='border-b my-2'/>
              
              <p className='px-3 text-xl font-semibold'>Best Buy | Menifee, CA</p>
              <p className='font-extrabold sm:text-right'>09/2021-04/2022</p>
              <p className='px-3 italic font-medium'>Sales Associate/Customer Service/Inventory Management</p>
              
              <p className='px-5 font-light'>› Employed problem-solving abilities to provide solutions to customers.</p>
              <p className='px-5 font-light'>› Accomplished cross-training across multiple departments.</p>
              <p className='px-5 font-light'>› Managed customer interactions to promote resolution and satisfaction.</p>
                
              <div className='border-b my-2'/>
              
              <p className='px-3 text-xl font-semibold'>Evertek | Temecula, CA</p>
              <p className='font-extrabold sm:text-right'>01/2019-07/2020</p>          
              <p className='px-3 italic font-medium'>Repair Technician</p>
           
              <p className='px-5 font-light'>› Serviced and repaired various Windows and Apple products.</p>
              <p className='px-5 font-light'>› Utilized ticketing software to meticulously document repair processes.</p>
              <p className='px-5 font-light'>› Guaranteed optimal task execution by excelling in time management skills.</p>
                
            </div>
          </div>
          <div className="collapse collapse-arrow join-item border-t-2 border-dotted hover:bg-base-300">
            <input type="checkbox" name="stats"/>
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