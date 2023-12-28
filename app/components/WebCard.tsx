import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla id imperdiet dolor. In aliquam purus quis lectus luctus varius. Integer a eros commodo, lacinia tortor sit amet, vulputate justo. Vivamus nec justo urna. Fusce id nunc eget lorem euismod molestie. Phasellus venenatis rutrum velit, id scelerisque nisi finibus sit amet. Aliquam erat volutpat. "


const WebCard = () => {
  return (
    <div className="card my-2 items-center rounded-3xl bg-base-100 w-full h-full">
            <div className="grid grid-cols-4 m-2 rounded-2xl">
              {/* Start of Description*/} 
              <div className="h-min p-10 rounded-2xl bg-slate-700 text-white">{Description}</div>
              {/* Start of carousel*/}  
              <div className="col-span-2 p-2 rounded-2xl  text-center text-black">
                <div className="carousel flex items-center"> 
                  <div className="mr-2">
                    <a href="#slide4" className="btn btn-circle bg-teal-700 text-white">❮</a>
                  </div>
                  <img src="https://daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.jpg" className="w-full" />
                  <div className="ml-2">
                    <a href="#slide2" className="btn btn-circle bg-teal-700 text-white">❯</a>
                  </div>
                </div>
              </div>
              {/* Start of Technologies*/} 
              <div className="">
                <div className="w-min mx-auto rounded-2xl bg-slate-700 mb-2 p-2 text-center text-xl font-bold text-white whitespace-nowrap" >Technologies Used</div>
                <div className="rounded-2xl h-full bg-slate-700 flex justify-center items-center">
                  <Link href="https://tailwindcss.com/docs/installation" className="btn mx-2 h-20 w-20 p-2 btn-circle bg-teal-700 border-teal-700"><Image className="" src="https://tailwindcss.com/_next/static/media/tailwindcss-mark.3c5441fc7a190fb1800d4a5c7f07ba4b1345a9c8.svg" alt="T" width={200} height={200}></Image></Link>
                  <Link href="https://tailwindcss.com/docs/installation" className="btn mx-2 h-20 w-20 p-2 btn-circle bg-teal-700 border-teal-700"><Image className="" src="https://tailwindcss.com/_next/static/media/tailwindcss-mark.3c5441fc7a190fb1800d4a5c7f07ba4b1345a9c8.svg" alt="T" width={200} height={200}></Image></Link>
                </div>
              </div>
            </div>
            <div className="w-min bg-slate-700 rounded-2xl m-2 p-2 text-left text-white whitespace-nowrap font-bold ">PROJECT TITLE HERE</div>
    </div>
  )
}

export default WebCard