import React from 'react'
import myPhotoe from "../assets/hossam.jpg"

const Hero = () => {
    return (

        <section className='h-auto md:h-[90vh] py-16 w-[95%] lg:w-[80%] mx-auto flex items-center' >
            <div className='container-fluid w-full px-0 lg:px-3 grid grid-cols-1 md:grid-cols-2 items-center  justify-between' >
                <div>
                    <span>Hi, I'm</span>
                    <h1 className='text-[40px] md:text-[84px] text-primary roboto-bold selection:bg-primary selection:text-primary-background'>HOSSAM <br></br> AHMED</h1>
                    <h4>Front end developer</h4>
                    <p className=' text-lg text-gray-400 '>Front-End developer. I’m passionate about transforming static design into interactive user-interface,
                        <br />
                        Committed to continuous growth and delivering high-quality web application
                    </p>
                    <div className='flex gap-2 justify-start items-center mt-4'>
                        <a href='#Contact' className='bg-primary transition  text-white hover:text-black  hover:bg-secondary px-4 py-2 rounded '>Contact me</a>
                        <a target='blank' href='https://drive.google.com/file/d/1GZS18AxHwUkQcpSNCQdQnb50JNk875Ih/view?usp=drive_link' className=' hover:bg-primary transition text-black hover:text-white   bg-secondary px-4 py-2 rounded '>Download  CV</a>
                    </div>
                </div>

                <div className='pt-3 md:pt-0 md:flex md:w-[90%] md:ml-auto items-end justify-center effect'>
                    {/* <FaCode className=' text-9xl  w-96 h-96 text-primary ' /> */}
                    <img className='MyCustomCss' src={(myPhotoe)} alt="Logo" />
                    {/* 
                    <img className='dark:block hidden' src={(Logo)} alt='Logo' /> */}
                </div>

            </div>
        </section >
    )
}

export default Hero
