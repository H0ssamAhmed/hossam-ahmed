import React from 'react'
import myPhotoe from "../assets/hossam.jpg"

const Hero = () => {
    return (

        <section className='h-auto md:h-[90vh] py-16 w-[95%] lg:w-[80%] mx-auto flex items-center select-none' >
            <div className='container-fluid w-full px-0 lg:px-3 grid grid-cols-1 md:grid-cols-2 items-center  justify-between' >
                <div>
                    <span>Hi, I'm</span>
                    <h1 className='text-[40px] md:text-[84px] text-primary roboto-bold selection:bg-primary selection:text-primary-background'>

                        HO<span className="bg-primary text-white dark:text-primary-background">SSAM</span>

                        <br></br>

                        <span className="bg-primary text-white dark:text-primary-background">AHM</span>ED</h1>
                    <h2 className='text-2xl text-gray-800 dark:text-white roboto-bold'>Front end developer</h2>
                    <p className=' text-lg text-gray-800 dark:text-white my-4'>Front-End developer. I’m passionate about transforming static design into interactive user-interface</p>
                    <p className=' text-lg text-gray-800 dark:text-white my-4'>My commitment to  to continuous growth and delivering high-quality web application
                    </p>
                    <div className='flex gap-2 justify-start items-center mt-4'>
                        <a href='#Contact' className='bg-primary transition text-black  hover:bg-secondary px-4 py-2 rounded '>Contact me
                        </a>
                        <a target='blank' href='https://drive.google.com/file/d/1GynYzSR-c9jv0cmWKaEsSQg9zpQe6e-e/view?usp=sharing' className=' hover:bg-primary transition text-black  bg-secondary px-4 py-2 rounded '>
                            Download  CV</a>
                    </div>
                </div>

                <div className='pt-3 md:pt-0 md:flex md:w-[90%] md:ml-auto items-end justify-center effect'>
                    <img className='MyCustomCss' loading="lazy" src={(myPhotoe)} alt="Logo" />
                </div>

            </div>
        </section >
    )
}

export default Hero
