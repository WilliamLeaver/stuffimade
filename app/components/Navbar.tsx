import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Navbar = () => {
    return (
        /* Fix Me: Issue on iPhone with focus: need to convert to selected: with items for each "page"*/
        <div className="navbar flex h-12 rounded bg-slate-700 overflow-visible">
            <div className="navbar flex justify-evenly ">
                    <Link className="group btn mask mask-squircle w-16 h-16 sm:w-20 sm:h-20 focus:w-16 focus:h-16 focus:mr-4 border-none bg-teal-700 hover:bg-slate-700 focus:bg-slate-700 focus:animate-pop" href="/thingsimade"><Image className="group-focus:invisible" src="/website.svg" width={100} height={100} alt="Web"/></Link>
                    <Link className="group btn mask mask-squircle w-16 h-16 sm:w-20 sm:h-20 focus:w-16 focus:h-16 focus:mx-2 border-none bg-teal-700 hover:bg-slate-700 focus:bg-slate-700 focus:animate-pop" href="/foodimade"><Image className="group-focus:invisible" src="/food.svg" width={100} height={100} alt="Food"/></Link>
                    <Link className="group btn mask mask-squircle w-16 h-16 sm:w-20 sm:h-20 focus:w-16 focus:h-16 focus:mx-2 border-none bg-teal-700 hover:bg-slate-700 focus:bg-slate-700 focus:animate-pop" href="/postimade"><Image className="group-focus:invisible" src="/post.svg" width={100} height={100} alt="Blog"/></Link>
                    <Link className="group btn mask mask-squircle w-16 h-16 sm:w-20 sm:h-20 focus:w-16 focus:h-16 focus:ml-4 border-none bg-teal-700 hover:bg-slate-700 focus:bg-slate-700 focus:animate-pop" href="/personal"><Image className="group-focus:invisible" src="/Person.svg" width={100} height={100} alt="Personal"/></Link>
            </div>
            <div className="navbar-end flex justify-right sm:justify-center">
                <h1 className="text-white text-2xl sm:text-3xl font-bold">Stuff I Made</h1> 
            </div>
        </div>
        
    )
}

export default Navbar