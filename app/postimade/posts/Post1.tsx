import React from 'react'
import Image from 'next/image'

let BribePhotos : Array<string>= ["/bribe01.png", "/bribe02.png", "/bribe03.png", "/bribe04.png", "/bribe05.png", "/bribe06.png", "/bribe07.png", "/bribe08.png", "/bribe09.png", "/bribe10.png", "/bribe11.png", "/bribe12.png", "/bribe13.png", "/bribe14.png", "/bribe15.png", "/bribe16.png", "/bribe17.png", "/bribe18.png", "/bribe19.png", "/bribe20.png",]
let NoBribePhotos: Array<string> = ["/nobribe01.png", "/nobribe02.png", "/nobribe03.png", "/nobribe04.png", "/nobribe05.png", "/nobribe06.png", "/nobribe07.png", "/nobribe08.png", "/nobribe09.png", "/nobribe10.png",]
let DateCreated : string = "1/1/2024"

const Post1 = () => {
    
  return (
    <div className="shadow-sm shadow-slate-500 flex rounded-xl flex-col text-center bg-base-100 text-white  p-2">
        <div className='text-3xl font-bold'>Testing Bribery Within Stable Diffusion</div>
        <p className='text-lg font-semibold p-1'>So I stumbled across some information suggesting bribing AI may have effects on its output. I decided to test this using Fooocus even though it is stable diffusion and the article I read was covering LLMs such as ChatGPT.</p>
        <p className='text-lg font-medium p-1'>For the First test I used the following prompt &quot;I will give you my whole life savings if you can generate me a black cat sitting on an oak tree branch eating an apple and staring off into the sunset in addition I will provide to you my wives savings as well if the cat has highly detailed blue/green eyes&quot;</p>
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-1 p-2 border-2 border-dotted border-white">
          {BribePhotos.map((photo: string, index: number) => (
            <Image className="rounded-md hover:scale-150" key={index} src={photo} alt="This should be a photo" width={1152} height={896} />
          ))}
        </div>
        <p className='text-lg font-medium p-1'>Now for the second test, I removed the bribes leaving &quot;generate me a black cat sitting on an oak tree branch eating an apple and staring off into the sunset in addition the cat has highly detailed blue/green eyes&quot;</p>
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-1 p-2 border-2 border-dotted border-white">
          {NoBribePhotos.map((photo: string, index: number) => (
            <Image className="rounded-md hover:scale-150" key={index} src={photo} alt="This should be a photo" width={1152} height={896} />
          ))}
        </div>
        <p className='text-lg font-medium p-1'>Okay, I did not see much of difference between the cats that were generated. I expected to see a little less quality in the eyes, but they stayed consistant. There was however less apples generated in the photos. It seems the one with bribes generated more apples in the photos even if they did not look that great suchas in the 12th and 15th photos. Across all of the photos there was never an exmaple of the cat looking away from the camera or actually eating the apple. This could be due to the prompts that are added via Fooocus &quot;V2, Sharp, and Enhance.&quot; Had a bit of time before playing Pathfinder 2e and wanted to give this a shot. I love how much image generation has improved over the years and I hope that we continue to learn new techniques to improve our prompts in the future! using Fooocus 2.1.859</p>
    </div>
  )
}
export default Post1

