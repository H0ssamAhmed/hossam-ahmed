import React from 'react'
import { IoSendSharp } from 'react-icons/io5';

const Contact = () => {

    const handleSubmit = (e) => e.preventDefault()

    return (
        <section className='py-8' id='Contact'>
            <div className=' container py-5'>
                <h1 className='w-fit text-[40px] py-6  mx-auto'>Contact</h1>
                <div className=' grid grid-cols-1 md:grid-cols-2 justify-between items-center'>
                    <div className=' hidden md:flex justify-center items-center'>
                        <IoSendSharp className=' w-32 h-32 text-primary -rotate-45 -translate-y-5' />

                    </div>
                    <div className=' text-center md:text-start'>
                        <p className=' text-[30px]'>I appreciate direct contact thought <strong><a className=' text-primary' href='mailTo:hossamahmed8862@gmail.com'>Email</a></strong>, send me a message directly on
                            <strong><a className=' text-primary' href='https://www.linkedin.com/in/hossam-ahmed-/' target='blank'> LinkedIn </a></strong>
                            or fill out the form below
                        </p>
                    </div>
                </div>
                <form onSubmit={handleSubmit} className=' pt-10   md:w-1/2 mx-auto '>
                    <div className=' grid grid-cols-1 md:grid-cols-2 md:gap-4'>
                        <div className=' flex flex-col mb-4 '>
                            <label className='p-2'>Name</label>
                            <input type='search' required={true} className='p-2 pl-6 dark:bg-secondary/80 text-black  bg-primary-background/5 border-secondary dark:focus:bg-secondary placeholder:text-primary border-[5px] focus:border-primary focus:outline-none duration-500 outline-transparent focus:outline-transparent  transition-all rounded-[8px]' placeholder='Your Name, Please 😊' />
                        </div>
                        <div className=' flex flex-col mb-4 '>
                            <label className='p-2'>Email</label>
                            <input type='email' className='p-2 pl-6 dark:bg-secondary/80 text-black  bg-primary-background/5 border-secondary dark:focus:bg-secondary placeholder:text-primary border-[5px] focus:border-primary focus:outline-none duration-500 outline-transparent focus:outline-transparent  transition-all rounded-[8px]' placeholder='Your Email, Please 😊' />
                        </div>
                    </div>
                    <textarea className='p-2 pl-6 w-full h-48 dark:bg-secondary/80 text-black  bg-primary-background/5 border-secondary dark:focus:bg-secondary placeholder:text-primary border-[5px] focus:border-primary focus:outline-none duration-500 outline-transparent focus:outline-transparent  transition-all rounded-[8px]' placeholder='Leave a message for what you want' />
                    <a href='mailto:hossamahmed8862@gmail.com' className='w-full text-center bg-primary py-2 rounded-[8px] text-black hover:bg-primary/50 hover:-skew-x-6 hover:sdcale-110  transition ' type='submit'>Submit</a>


                </form>

            </div>
        </section>
    )
}

export default Contact