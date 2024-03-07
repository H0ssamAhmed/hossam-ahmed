import React from 'react'
import Logo from '../assets/logo-white.png'
import darkLogo from '../assets/logo-dark.png'

const Hero = () => {
    return (

        <section className='h-auto md:h-[80vh] py-16 w-[80%] mx-auto flex items-center' >
            <div className='container w-full px-8 grid grid-cols-1 md:grid-cols-2 items-center  justify-between' >
                <div >
                    <span>Hi, I'm</span>
                    <h1 className='md:text-[80px] text-[40px] text-primary roboto-bold selection:bg-primary selection:text-primary-background'>HOSSAM <br></br> AHMED</h1>
                    <p className=' text-gray-400 '>Front-End developer. I’m passionate about transforming static design into interactive user-interface,
                        <br />
                        Committed to continuous growth and delivering high-quality web application
                    </p>
                    <div className=' flex gap-2 justify-start items-center mt-4'>
                        <a href='#Contact' className='bg-primary transition  text-white hover:text-black  hover:bg-secondary px-4 py-2 rounded '>Contact me</a>
                        <a target='blank' href='https://drive.google.com/file/d/1GZS18AxHwUkQcpSNCQdQnb50JNk875Ih/view?usp=drive_link' className=' hover:bg-primary transition text-black hover:text-white   bg-secondary px-4 py-2 rounded '>Download  CV</a>
                    </div>
                </div>
                <div className=' hidden md:flex items-center justify-center effect'>
                    <img className='dark:hidden' src={(darkLogo)} alt='Logo' />
                    <img className='dark:block hidden' src={(Logo)} alt='Logo' />
                </div>

            </div>
        </section >
    )
}

export default Hero