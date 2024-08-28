import React, { useEffect, useState } from 'react'
import { IoHomeOutline, IoMenuSharp, IoMoon, IoSunny } from "react-icons/io5";
import { Link } from 'react-router-dom';
import ThemProvider from '../providers/themProvider';

const LgNav = ({ setShowNav, showNav }) => {
    const [position, setPosition] = useState("")
    const { theme, handleToogler } = ThemProvider()

    document.addEventListener('scroll', () => window.scrollY > 600 ? setPosition('fixed border-primary') : setPosition(''))
    const handelShowNav = () => {
        setShowNav(!showNav)
    }
    return (
        <nav className={`border-b dark:bg-primary-background bg-white w-full ${position} transition-all top-0 z-10 h-[60px] flex items-center justify-center`} >
            <div className='container  flex items-center justify-between  '>
                <div className='  items-center justify-start gap-10  hidden md:flex'>
                    <Link to='/' className='hover:text-primary roboto-bold font-extrabold  transition' >
                        <IoHomeOutline size={26} fontWeight={900} />
                    </Link>
                    <div className='dark:text-white  flex justify-between items-center roboto-regular gap-4'>
                        <a href='/#About' className='hover:text-primary roboto-medium transition' >About</a>
                        <a href='/#skills' className='hover:text-primary roboto-medium transition' >Skills</a>
                        <a href='/#LatestProjects' className='hover:text-primary roboto-medium transition' >Projects</a>
                        <a href='/#Contact' className='hover:text-primary roboto-medium transition' >Contact</a>
                        <Link to='/articles' className='hover:text-primary roboto-medium transition'>Article</Link>
                    </div>
                </div>
                {/* ------------------------------------------------- */}
                <div className=' flex md:hidden justify-center items-center'>
                    <IoMenuSharp onClick={handelShowNav} className=' cursor-pointer hover:text-primary transition mx-4 w-5 h-5' />
                    <Link to='/'>

                        <h1 className='text-[20px]  text-primary roboto-bold selection:bg-primary selection:text-primary-background'>Hossam Ahmed</h1>
                    </Link>

                </div>
                {/* ------------------------------------------------- */}
                <div
                    onClick={handleToogler}
                    className='flex items-center justify-center gap-2'>

                    <IoMoon className={`w-6 h-6 text-primary-dark  cursor-pointer transition  rounded-full block  ${theme == 'dark' ? "hidden" : "block"}`} />
                    <IoSunny className={`w-6 h-6  text-white cursor-pointer   transition rounded-full ${theme == "dark" ? "block" : 'hidden'}`} />


                </div>
            </div>

        </nav>

    )
}

export default LgNav