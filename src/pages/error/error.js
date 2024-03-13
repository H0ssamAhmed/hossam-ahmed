import React from 'react'
import { TbError404 } from "react-icons/tb";
import { Link } from 'react-router-dom';

const Error = () => {

    return (
        <>
            <div className=' flex items-center justify-center flex-col gap-4 min-h-[300px]'>
                <div className=' flex flex-wrap items-center justify-center'>
                    <TbError404 className='text-primary' size={200} />
                </div>
                <h1 className=' text-[30px]'>Someting went wrong!</h1>
                <p>This page not found !</p>
                <Link to='/' className='transition bg-primary/50 hover:bg-primary text-white p-2 rounded' >Home</Link>
            </div>

        </>

    )
}

export default Error