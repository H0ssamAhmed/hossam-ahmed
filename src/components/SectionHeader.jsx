import React from 'react'

const SectionHeader = ({ text }) => {
    return (
        <div className='py-8'>
            <h1 className='text-[20px] md:text-[32px]'>{text}</h1>
        </div>
    )
}

export default SectionHeader