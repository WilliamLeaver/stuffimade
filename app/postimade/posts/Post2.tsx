import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Post2 = () => {
  return (
    <div className="mb-2 flex rounded-xl flex-col text-left bg-base-100 text-white  p-2">
        <h1 className='text-3xl text-center font-extrabold'>Alright. Its time to talk about PiHole</h1>

        <p className='text-lg font-medium'>So I have been running Pihole with Unbound on my home computer for about two weeks now. I had a few troubles (some of which were not my fault), but I am making this guide because the amount of times MSN tried to run ads on my work computer and main computer is insane! 3365 Times over the workday! Why are all of these requests needed?? The answer is they are not and they dont have to be made at all with Pihole. With an Adlist of around 2,750,000 domains I have managed to block all ads and a lot of trackers with little to no downsides.</p>

        <div className='text-2xl font-bold underline'>The Starter Stuff</div>

        <p className='text-lg font-medium'>Okay. Lets get the basics out of the way. Starting with Docker... go ahead and use the link below to download docker desktop for whichever OS applies to you.</p>
        <Link className='btn btn-circle w-1/4 h-full p-3 bg-teal-700' href="https://docs.docker.com/engine/install/" ><Image className='' src="/02-white-docker-logo.svg" alt="Docker Docs Install" width={300} height={96}/></Link>
        <p className='text-lg font-medium'>Nice. Welcome to the docker club. Now you can do all kinds of cool stuff! Im not going to get into any technical things here, but you should look into how this stuff works cause it is pretty awesome and a huge step forward from running VMs or an old laptop in the corner of your room.</p>
        <div className='text-center'>Post in Progress</div>
    </div>
  )
}

export default Post2