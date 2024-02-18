import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

interface Website {
  Title: string
  ImagePaths: string
  TechnologiesPaths: Array<string>
  TechnologiesLinks: Array<string>
  Description: string
  WebsiteLink: string
}

interface WebCardProps {
  Web: Website;
}


const WebCard: React.FC<WebCardProps> = ({ Web }) => {
  return (
    <div className="shadow-sm shadow-slate-500 card my-2 p-3 flex-col 2xl:flex-row rounded-3xl bg-base-100 w-full h-full">
      <div className="flex flex-col items-center justify-start h-full">
        {/* Start of carousel*/}
        <Link href={Web.WebsiteLink} className="shadow-inner shadow-teal-400 hover:shadow-sm hover:shadow-teal-600 w-full h-min bg-teal-700 rounded-2xl m-2 p-2 text-center text-white whitespace-nowrap font-bold focus:animate-pop">{Web.Title}</Link>
        <div className="flex flex-row h-full justiy-center items-center p-2 text-center text-white">
          <div className="">
            <Image src={Web.ImagePaths} alt="Website Image should be here" width={3000} height={3000} className="w-full rounded-2xl" />         
          </div>
        </div>
      </div>
      <div className="flex flex-col basis-1/2 items-center justify-start ml-2">
        {/* Start of Description*/}
        <div className="shadow-inner shadow-slate-600 h-min p-10 rounded-2xl bg-slate-700 text-white">{Web.Description}</div>
        {/* Start of Technologies*/}
        <div className="shadow-inner shadow-slate-600 rounded-2xl w-min h-min bg-slate-700 flex mt-4 p-10">
          {Web.TechnologiesPaths.map((path, index) =>
          <Link key={index} href={Web.TechnologiesLinks[index]} className="btn mx-2 h-20 w-20 p-2 btn-circle shadow-inner shadow-teal-400 hover:shadow-sm hover:shadow-teal-600 hover:bg-teal-700 hover:border-teal-700 bg-teal-700 border-teal-700 focus:animate-pop"><Image className="" src={path} alt="T" width={200} height={200}></Image></Link>
          )}
        </div>
      </div>
    </div>
  )
}

export default WebCard