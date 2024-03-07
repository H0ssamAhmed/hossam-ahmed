import React from 'react'
import { FaX } from 'react-icons/fa6'
import { Link } from 'react-router-dom'

const MdNav = ({ setShowNav, showNav }) => {
    return (
        <div className={`md:hidden ${showNav ? " translate-x-0" : " translate-x-[-500px]"} dark:bg-primary-background duration-300 bg-white transition w-[50vw] h-screen   fixed top-0 py-4 z-10`}>
            <div onClick={() => setShowNav(!showNav)} className='dark:text-white flex flex-col  items-start ml-4 roboto-regular relative gap-4'>
                <a href='/' className='hover:text-primary roboto-medium transition' >Home</a>
                <a href='/#About' className='hover:text-primary roboto-medium transition' >About</a>
                <a href='/#skills' className='hover:text-primary roboto-medium transition' >Skills</a>
                <a href='/#LatestProjects' className='hover:text-primary roboto-medium transition' >Projects</a>
                <a href='/#Contact' className='hover:text-primary roboto-medium transition' >Contact</a>
                <Link to='/articles' className='hover:text-primary roboto-medium transition'>Article</Link>
                <FaX className='absolute hover:text-primary hover:border-primary transition cursor-pointer right-4 border rounded-full w-8 h-8 flex items-center justify-center p-1 border-white  top-4 text-[20px]' onClick={() => setShowNav(!showNav)} />
            </div>
        </div>
    )
}

export default MdNav