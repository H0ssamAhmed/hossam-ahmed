
import React from 'react'
import { IoDocumentText } from 'react-icons/io5'
import { Link } from 'react-router-dom'

const Articles = () => {
    return (
        <div className=' flex items-center justify-center flex-col gap-4 min-h-[300px]'>
            <div className=' flex flex-wrap items-center justify-center'>

                <IoDocumentText className='text-primary' size={200} />
            </div>
            <h1 className=' text-[30px]'>Page Coming Soon!</h1>
            <p>We are working on it and will be launching soon. Stay tuned!</p>
            <Link to='/' className='transition bg-primary/50 hover:bg-primary text-white p-2 rounded'   >Home</Link>
        </div>
    )
}

export default Articles