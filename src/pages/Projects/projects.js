import React from 'react'
import projects from '../../data/projects.json'
import { Link } from 'react-router-dom';
import { IoCodeWorking } from 'react-icons/io5';

const Projects = () => {
    console.log(projects.all);
    return (
        <div className=' flex items-center justify-center flex-col gap-4 min-h-[300px]'>
            <div className=' flex flex-wrap items-center justify-center'>
                <IoCodeWorking className='text-primary' size={200} />
            </div>
            <h1 className=' text-[30px]'>Page Coming Soon!</h1>
            <p>We are working on it and will be launching soon. Stay tuned!</p>
            <Link to='/' className='transition bg-primary/50 hover:bg-primary text-white p-2 rounded' >Home</Link>
        </div>
    )
}

export default Projects


{/* <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2'>
                {projects.all.map((project, index) => {
                    return (
                        <div key={index} className='group w-full rounded-[8px] gap-2 flex flex-col  bg-primary/60 text-white relative' >
                            <img src={project.image} className='rounded-tl-[8px] rounded-tr-[8px]' alt='project preview' />
                            <div className='center_custmized group-hover:hidden  duration-1000 text-center gap-10 flex flex-col items-center justify-center z-[1]' >
                                <h1 className='text-primary font-bold text-[30px]'>{project.name}</h1>
                                <p className='text-[20px] text-black'>{project.description}</p>
                            </div>
                            <div className='absolute left-2 group-hover:opacity-100 transition duration-1000 opacity-0 flex flex-wrap items-center justify-center gap-2'>
                                <Link to={project.Demo_version} target="_blank" className=' flex items-center gap-1 bg-primary hover:bg-primary/80 p-2 rounded-sm my-2 cursor-pointer   text-[20px]'>
                                    <FaExternalLinkAlt />
                                </Link>

                                <Link to={project.GitHubRepo} target="_blank" className=' flex items-center gap-1 bg-primary hover:bg-primary/80 p-2 rounded-sm my-2 cursor-pointer   text-[20px]'>
                                    <FaGithub />
                                </Link>
                            </div>
                        </div>
                    )
                })}
                
            </div> */}