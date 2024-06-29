import React, { useState } from 'react'
import LgNav from './LgNav';
import MdNav from './mdNav';

const Navbar = () => {
    const [showNav, setShowNav] = useState(false)
   
    return (
        <div className='md:h-[10vh]'>
            <LgNav setShowNav={setShowNav} showNav={showNav} />
            <MdNav setShowNav={setShowNav} showNav={showNav} />
        </div>

    )
}

export default Navbar