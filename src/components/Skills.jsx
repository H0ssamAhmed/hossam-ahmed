import React from 'react'
import { FaBootstrap, FaCss3, FaGithub, FaHtml5, FaReact, FaGit, FaSass } from "react-icons/fa6";
import { IoLogoJavascript, IoLogoNodejs } from 'react-icons/io5';
import { SiAxios, SiExpress, SiJquery, SiNextdotjs, SiReactquery, SiTailwindcss, SiTypescript } from "react-icons/si";
import { TbBrandRedux, TbSql } from 'react-icons/tb';
import { DiMongodb } from 'react-icons/di';
import SectionHeader from './SectionHeader';



const Skills = () => {
    const skills = [
        { skill: 'HTML', Logo: FaHtml5 },
        { skill: 'CSS', Logo: FaCss3 },
        { skill: 'JavaScript', Logo: IoLogoJavascript },
        { skill: 'TypeScript', Logo: SiTypescript },
        { skill: 'React.JS', Logo: FaReact },
        { skill: 'Next.JS', Logo: SiNextdotjs },
        { skill: 'Redux ', Logo: TbBrandRedux },
        { skill: 'React Query', Logo: SiReactquery },
        { skill: 'Tailwind CSS', Logo: SiTailwindcss },
        { skill: 'Bootstrap', Logo: FaBootstrap },
        { skill: 'Git', Logo: FaGit },
        { skill: 'Github', Logo: FaGithub },
        { skill: 'SASS', Logo: FaSass },
        { skill: 'Axios', Logo: SiAxios },
        { skill: 'JQuery', Logo: SiJquery },
        { skill: 'Node.JS', Logo: IoLogoNodejs },
        { skill: 'Express.JS', Logo: SiExpress },
        { skill: 'MongoDB', Logo: DiMongodb },
        { skill: 'SQL', Logo: TbSql },
    ]
    return (
        <section className='py-4  mx-auto' id='skills'>
            <div className='container  mx-auto' >
                <div className='md:mx-8'>
                    <div className=' flex justify-between items-center'>
                        <SectionHeader text='Technologies I Love Working With' />
                    </div>
                    <ul className='lg:mx-32 mx-0 flex flex-wrap  justify-center items-center gap-8'>
                        {skills.map(({ Logo, skill }, index) => {
                            return <li className='bg-secondary/30 cursor-pointer hover:text-primary flex flex-col items-center px-4 hover:bg-secondary transition rounded-md' key={index}>
                                <Logo className='bg-transparent  transition text-[40px] m-4 rounded-md' />
                                {skill}
                            </li>
                        })}
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Skills