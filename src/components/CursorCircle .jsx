import React, { useState, useEffect } from 'react';

const CursorCircle = () => {
    const [position, setPosition] = useState({ x: -100, y: 0 });

    useEffect(() => {
        const updateMousePosition = (e) => {
            setPosition({ x: e.clientX, y: e.clientY });
        };

        document.addEventListener('mousemove', updateMousePosition);

        return () => {
            document.removeEventListener('mousemove', updateMousePosition);
        };
    }, []);

    return (
        <div className={`cursor hidden md:block`}
            style={{ left: position.x, top: position.y }}  >
            <div className='w-4 h-4 hidden md:block'>

            </div>

        </div>
    );
};

export default CursorCircle;
