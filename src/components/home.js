import React, { useEffect, useState } from 'react'
import Hero from './hero'
import Skills from './Skills'
import LatestProjects from './LatestProjects.jsx'
import Contact from './Contact.jsx'
import About from './About.jsx'
import { FaArrowAltCircleUp } from 'react-icons/fa'


const Home = () => {
    const [isInTop, setIsInTop] = useState(true)
    const handlGoTo = () => {
        document.documentElement.scrollTop = 0;
    }

    const handleScroll = () => {
        if (window.scrollY >= 800) {
            setIsInTop(false)
        } else setIsInTop(true)
    }
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <main className=' relative'>
            <Hero />
            <About />
            <Skills />
            <LatestProjects />
            <Contact />
            <FaArrowAltCircleUp onClick={handlGoTo} className={`UpArrow ${isInTop ? " opacity-0" : 'opacity-100'} duration-1000 fixed  w-6 md:w-10 h-6 md:h-10 right-4 text-primary transition hover:text-primary/50 cursor-pointer bottom-4`} />
        </main>
    )
}

export default Home