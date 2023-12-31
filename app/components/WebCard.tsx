import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

interface Website {
  Title: string
  ImagePaths: Array<string>
  TechnologiesPaths: Array<string>
  Description: string
  WebsiteLink: string
}

let Web: Website = {
  Title: "EvrClrMind",
  ImagePaths: ["/EvrClr.png"],
  TechnologiesPaths: ["https://tailwindcss.com/_next/static/media/tailwindcss-mark.3c5441fc7a190fb1800d4a5c7f07ba4b1345a9c8.svg"],
  Description: "I created this small website as a test of Stable Diffusion & Prompt Engineering. All of the photos were generated using Fooocus running locally. This was also my first dive into using component libraries like DaisyUI.",
  WebsiteLink: "https://evr-clr-mind-3vu2.vercel.app/#item1"
}


const WebCard = () => {
  return (
    <div className="card my-2 p-3 flex-row rounded-3xl bg-base-100 w-1/2 h-1/2">
      <div className="flex flex-col justify-around">

        {/* Start of Description*/}
        <div className="h-min p-10 rounded-2xl bg-slate-700 text-white">{Web.Description}</div>
        {/* Start of Technologies*/}

        <div className="w-min mx-auto rounded-2xl bg-slate-700 mb-2 p-2 text-center text-xl font-bold text-white whitespace-nowrap" >Technologies Used</div>
        <div className="rounded-2xl h-min bg-slate-700 flex justify-center items-center">
          <Link href="https://tailwindcss.com/docs/installation" className="btn mx-2 h-20 w-20 p-2 btn-circle bg-teal-700 border-teal-700"><Image className="" src={Web.TechnologiesPaths[0]} alt="T" width={200} height={200}></Image></Link>
          <Link href="https://tailwindcss.com/docs/installation" className="btn mx-2 h-20 w-20 p-2 btn-circle bg-teal-700 border-teal-700"><Image className="" src={Web.TechnologiesPaths[0]} alt="T" width={200} height={200}></Image></Link>
        </div>
      </div>
      <div className="flex flex-col items-center">
      {/* Start of carousel*/}
      <Link href={Web.WebsiteLink} className="w-min h-min bg-teal-700 rounded-2xl m-2 p-2 text-left text-white whitespace-nowrap font-bold ">{Web.Title}</Link>
      <div className="col-span-2 p-2 rounded-2xl  text-center text-black">
        <div className="carousel flex items-center">
          <div className="mr-2">
            <a href="#slide4" className="btn btn-circle bg-teal-700 text-white">❮</a>
          </div>
          <img src={Web.ImagePaths[0]} className="w-full" />
          <div className="ml-2">
            <a href="#slide2" className="btn btn-circle bg-teal-700 text-white">❯</a>
          </div>
        </div>
      </div>
      
      </div>
    </div>
  )
}

export default WebCard