import React from 'react'
import { FaFacebookSquare, FaGithub, FaInstagram } from 'react-icons/fa'
import { FaCodepen, FaLinkedin, FaXTwitter } from 'react-icons/fa6'
import { Link } from 'react-router-dom'

import Logo from '../assets/logo-white.png'
import darkLogo from '../assets/logo-dark.png'
const Footer = () => {
    return (
        <div className=' bg-secondary dark:bg-secondary-dark  mt-8 py-4 '>
            <div className='container'>
                <div className=' grid grid-cols-2 md:grid-cols-4 gap-y-4'>
                    <div className=' mx-auto md:ml-0'>
                        <h4 className='text-[24px]'>
                            Site Links
                        </h4>
                        <div className='dark:text-white flex flex-col gap-2 my-4 '>
                            <a href='/#About' className='hover:text-primary transition' >About</a>
                            <a href='/#skills' className='hover:text-primary transition' >Skills</a>
                            <a href='/#LatestProjects' className='hover:text-primary transition' >Projects</a>
                            <a href='/#Contact' className='hover:text-primary transition' >Contact</a>
                            <Link to='/articles' className='hover:text-primary transition'>Article</Link>
                        </div>
                    </div>
                    <div className=' mx-auto md:ml-0'>
                        <h4 className='text-[24px]'>
                            Find me online
                        </h4>
                        <div className='dark:text-white grid grid-cols-3 transition text-[26px] gap-4 my-4'>
                            <a rel="noreferrer" href='https://www.linkedin.com/in/hossam-ahmed-/' target='_blank' className='hover:text-primary' ><FaLinkedin /></a>
                            <a rel="noreferrer" href='https://github.com/H0ssamAhmed' target='_blank' className='hover:text-primary' ><FaGithub /></a>
                            <a rel="noreferrer" href='https://twitter.com/hossamofficia1' target='_blank' className='hover:text-primary' ><FaXTwitter /></a>
                            <a rel="noreferrer" href='https://codepen.io/_hossam-ahmed-' target='_blank' className='hover:text-primary' ><FaCodepen /></a>
                            <a rel="noreferrer" href='https://www.facebook.com/profile.php?id=100008367248132' target='_blank' className='hover:text-primary' ><FaFacebookSquare /></a>
                            <a rel="noreferrer" href='https://www.instagram.com/hossam1__ahmedd/' target='_blank' className='hover:text-primary' ><FaInstagram /></a>
                        </div>
                    </div>
                    <div className=' mx-auto md:ml-0 self-center'>
                        <img className='dark:hidden w-20 md:w-40' src={(darkLogo)} alt='Logo' />
                        <img className='dark:block hidden w-20 md:w-40' src={(Logo)} alt='Logo' />
                    </div>
                    <div className=' mx-auto md:ml-0'>
                        <h4 className='text-[24px]'>
                            Latest Articles
                        </h4>
                        <div className='dark:text-white flex flex-wrap gap-2 my-4'>
                            <Link to='/articles' className='bg-secondary-dark dark:bg-secondary dark:hover:bg-primary dark:hover:text-white dark:text-black hover:bg-primary  text-white  hover:text-white text-[14px] p-2 transition  rounded-[8px]' >React</Link>
                            <Link to='/articles' className='bg-secondary-dark dark:bg-secondary dark:hover:bg-primary dark:hover:text-white dark:text-black hover:bg-primary  text-white  hover:text-white text-[14px] p-2 transition  rounded-[8px]' >JavaScript</Link>
                            <Link to='/articles' className='bg-secondary-dark dark:bg-secondary dark:hover:bg-primary dark:hover:text-white dark:text-black hover:bg-primary  text-white  hover:text-white text-[14px] p-2 transition  rounded-[8px]' >Next.JS</Link>
                            <Link to='/articles' className='bg-secondary-dark dark:bg-secondary dark:hover:bg-primary dark:hover:text-white dark:text-black hover:bg-primary  text-white  hover:text-white text-[14px] p-2 transition  rounded-[8px]'>See all articles</Link>
                        </div>
                    </div>
                </div>
                <div className=' text-center text-gray-500 py-4' >
                    <p>&copy;2023 -  {new Date().getFullYear()} Hossam. Ahmed, All rights reserved.</p>
                    <p className='py-1'> <strong>About this website:</strong> built with React, Tailwind CSS, and Vercel hosting.</p>
                </div>
            </div>
        </div>
    )
}

export default Footer
