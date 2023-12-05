import React from 'react'
import Link from 'next/link'

const Navbar = () => {
    return (
        /* Fix Me: Issue on iPhone with focus: need to convert to selected: with items for each "page"*/
        <div className="navbar flex h-12 rounded bg-slate-700 overflow-visible">
            <div className="navbar flex justify-evenly ">
                    <Link className="group btn btn-circle w-20 h-20 focus:w-16 focus:h-16 focus:mr-4 border-none bg-teal-700 hover:bg-slate-700 focus:bg-slate-700 focus:animate-pop" href="/"><svg className="fill-white p-5 group-focus:fill-slate-700" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path xmlns="http://www.w3.org/2000/svg" d="M3,20V10H8V21H4A1,1,0,0,1,3,20ZM21,4a1,1,0,0,0-1-1H4A1,1,0,0,0,3,4V8H21ZM20,21a1,1,0,0,0,1-1V10H10V21Z"/></svg></Link>
                    <Link className="group btn btn-circle w-20 h-20 focus:w-16 focus:h-16 focus:mx-2 border-none bg-teal-700 hover:bg-slate-700 focus:bg-slate-700 focus:animate-pop" href="/"><svg className="fill-white p-5 group-focus:fill-slate-700" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" version="1.1"><title>food-chain</title><path d="M21.4 25.039c-1.695-1.198-0.783-3.533 0.17-5.288 0.801-1.476 2.843-2.347 3.919-1.725 0.85 0.491 1.030 1.687 0.57 2.88 1.114-0.613 2.287-0.655 2.946 0.053 0.494 0.53 0.555 1.349 0.281 2.182 3.261-3.343 0.177-8.136-3.648-10.345h0c-0.234-0.135-0.471-0.258-0.712-0.37 0.212-2.4-1.323-5.449-5.177-8.044-0.045 0.435-0.107 0.859-0.186 1.272 0.768 0.631 1.475 1.416 2.081 2.401-0.778-0.567-1.57-0.935-2.388-1.148-0.099 0.326-0.21 0.644-0.337 0.952 0.554 0.27 1.095 0.606 1.615 1.025-0.709-0.075-1.387-0.104-2.046-0.109-0.246 0.457-0.53 0.89-0.855 1.299-2.612-0.334-5.222-0.094-7.799 0.688-1.208-2.284-4.695-4.31-8.868-4.952 0.552 0.679 1.027 1.376 1.415 2.092 1.465 0.361 2.977 1.016 4.495 2.122-1.357-0.404-2.571-0.467-3.714-0.276 0.184 0.6 0.306 1.214 0.359 1.845l1.773 0.505-1.755 0.687c-0.040 0.75-0.176 1.523-0.417 2.321 0.625 0.142 1.283 0.156 1.994 0.017-0.822 0.62-1.642 1.009-2.448 1.228-0.247 0.579-0.548 1.171-0.907 1.777 3.913-0.79 6.302-1.973 7.52-3.302 1.703 0.879 3.222 1.917 4.592 3.376l-3.388 1.755c1.617 1.191 3.676 1.768 5.494 1.549 0.5 1.036 1.23 2.084 2.188 3.191 2.38 2.75 5.448 3.257 6.705 0.26-0.959 0.703-2.649 0.665-3.474 0.082zM28.837 26.946l-0.11-2.287c-0.518 1.571-1.851 2.145-3.266 2.62l2.571 0.4c0.145 1.997 0.646 3.006 2.465 2.715 0.724-1.638 0.036-2.862-1.659-3.449z"/></svg></Link>
                    <Link className="group btn btn-circle w-20 h-20 focus:w-16 focus:h-16 focus:ml-4 border-none bg-teal-700 hover:bg-slate-700 focus:bg-slate-700 focus:animate-pop" href="/" />
            </div>
            <div className="navbar-end flex justify-right sm:justify-evenly">
                <h1 className="text-white text-2xl sm:text-3xl text-right font-bold">Stuff I Made</h1> 
            </div>
        </div>
        
    )
}

export default Navbar