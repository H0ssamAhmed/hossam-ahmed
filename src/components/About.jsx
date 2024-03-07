import React from 'react'

const About = () => {
    return (
        <section className=' bg-secondary dark:bg-secondary-dark  w-full flex items-center justify-center' id='About'>
            <div className='mx-4 md:mx-32 container text-center md:text-start'>
                <p className='about leading-8 my-4 first-letter:text-primary first-letter:text-[40px] first-letter:font-semibold'>Since i was student, I’m passionate about transforming static design into interactive user-interface,
                    <br />I am committed to continuous growth and delivering high-quality web application solutions that meet the needs of my clients. My passion for programming is evident in every project I undertake as it allows me to combine creativity with technical skills to produce a unique solution that exceeds expectations.
                </p>
                <hr className='bg-primary w-4/5  md:mx-auto' />
            </div>
        </section>
    )
}

export default About