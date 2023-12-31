import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

interface Website {
  Title: string
  ImagePaths: Array<string>
  TechnologiesPaths: Array<string>
  TechnologiesLinks: Array<string>
  Description: string
  WebsiteLink: string
}

let Web: Website = {
  Title: "Applets",
  ImagePaths: ["/Applets.png"],
  TechnologiesPaths: ["https://tailwindcss.com/_next/static/media/tailwindcss-mark.3c5441fc7a190fb1800d4a5c7f07ba4b1345a9c8.svg", "/nextJS.svg"],
  TechnologiesLinks: ["https://tailwindcss.com/docs/installation", "https://nextjs.org/docs/getting-started"],
  Description: "I created this website as a place to upload any smaller projects that I work on / games.",
  WebsiteLink: "https://applets-ebon.vercel.app/"
}


const WebCard = () => {
  return (
    <div className="card my-2 p-3 flex-col 2xl:flex-row rounded-3xl bg-base-100 w-full h-full">
      <div className="flex flex-col items-center justify-center">
        {/* Start of carousel*/}
        <Link href={Web.WebsiteLink} className="w-full h-min bg-teal-700 rounded-2xl m-2 p-2 text-center text-white whitespace-nowrap font-bold focus:animate-pop">{Web.Title}</Link>
        <div className="flex flex-row items-center p-2 rounded-2xl  text-center text-black">
          {Web.ImagePaths.length > 1 ? (
          <div className="mr-2 w-0 invisible sm:visible sm:w-auto">
            <a href="#slide4" className="btn btn-circle bg-teal-700 text-white">❮</a>
          </div>
          ) : null}
          <div className="carousel flex items-center">
            <Image src={Web.ImagePaths[0]} alt="Website Image should be here" width={3000} height={3000} className="w-full rounded-2xl" />         
          </div>
          {Web.ImagePaths.length > 1 ? (
          <div className="mr-2 w-0 invisible sm:visible sm:w-auto">
            <a href="#slide4" className="btn btn-circle bg-teal-700 text-white">❮</a>
          </div>
          ) : null}
        </div>
      </div>
      <div className="flex flex-col basis-1/2 items-center justify-evenly">
        {/* Start of Description*/}
        <div className="h-min p-10 rounded-2xl bg-slate-700 text-white">{Web.Description}</div>
        {/* Start of Technologies*/}
        <div className="rounded-2xl w-min h-min bg-slate-700 flex mt-4 p-10">
          {Web.TechnologiesPaths.map((path, index) =>
          <Link key={index} href={Web.TechnologiesLinks[index]} className="btn mx-2 h-20 w-20 p-2 btn-circle bg-teal-700 border-teal-700 focus:animate-pop"><Image className="" src={path} alt="T" width={200} height={200}></Image></Link>
          )}
        </div>
      </div>
    </div>
  )
}

export default WebCard