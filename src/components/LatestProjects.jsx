import React from 'react'
import projects from '../data/projects.json'
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { Link } from 'react-router-dom';

const ImageSide = ({ project, Position }) => {
    return (<div className='col-span-2 overflow-hidden'>
        <Link to={project.Demo_version} target="_blank">

            <img src={project.image} className={`object-cover   duration-300 ${Position} rotate-0 md:group-hover:rotate-0 rounded-none hover:rounded-none `} alt='project preview' />
        </Link>
    </div>)
}

const TextSide = ({ project }) => {
    return (<div className='flex items-center justify-center flex-col'>
        <div className='text-center'>
            <h1 className='font-bold my-4 text-[30px]'>{project.name}</h1>
            <p className='text-[12px] my-4 mx-4 '>{project.description}</p>
        </div>
        <div className='  left-2 group-hover:opacity-100 transition duration-1000 opacity-0 flex flex-wrap items-center justify-center gap-2'>
            <Link to={project.Demo_version} target="_blank" className=' flex items-center gap-1 bg-primary hover:bg-primary/80 p-2 rounded-sm my-2 cursor-pointer   text-[20px]'>
                <FaExternalLinkAlt />
            </Link>

            <Link to={project.GitHubRepo} target="_blank" className=' flex items-center gap-1 bg-primary hover:bg-primary/80 p-2 rounded-sm my-2 cursor-pointer   text-[20px]'>
                <FaGithub />
            </Link>
        </div>
    </div>)
}
const LatestProjects = () => {
    return (
        <section className=' bg-secondary dark:bg-secondary-dark p-8' id='LatestProjects'>
            <div className='contaidner'>
                <div className='mx-0 md:mx-16 flex flex-wrap justify-between mb-4 items-center py-4'>
                    <h1 className=' text-[22px]'>My latest projects</h1>
                    <Link to='/projects' className='bg-primary text-white p-2 rounded'>More</Link>
                </div>
                <div className='mx-0 md:mx-16 flex flex-col gap-3'>
                    {projects.latest?.map((project, index) => {
                        return (
                            <div key={index} className='group w-full rounded-[8px] flex flex-col gap-2 md:grid grid-cols-1 md:grid-cols-3 hover:bg-primary/50 transition duration-500 bg-primary/10   mb-4' >
                                {index % 2 === 0 ?
                                    <>
                                        <TextSide project={project} />
                                        <ImageSide project={project} Position="origin-top-right md:-rotate-[10deg] md:rounded-tl-[10px] md:translate-x-[100px] md:group-hover:translate-x-[50px] " />
                                    </> :
                                    <>
                                        <ImageSide project={project} Position="origin-top-left md:rotate-[10deg] md:rounded-tr-[10px] md:translate-x-[-100px] md:group-hover:translate-x-[-50px] " />
                                        <TextSide project={project} />
                                    </>
                                }
                            </div>
                        )
                    })}
                </div>
            </div >
        </section >
    )
}

export default LatestProjects

