import { useEffect, useState } from 'react'

const ThemProvider = () => {
    const [theme, setTheme] = useState('light')


    const handleToogler = () => {
        console.log('theme', theme);
        if (theme === 'light') {
            setTheme('dark')
            localStorage.setItem('theme', 'dark');
        } else if (theme === 'dark') {
            setTheme('light')
            localStorage.setItem('theme', 'light');
        }
    }
    useEffect(() => {
        (localStorage.getItem("theme")) ? setTheme(localStorage.getItem("theme")) : localStorage.setItem("theme", theme)
    }, [])
    useEffect(() => {
        if (theme === 'dark') {
            document.documentElement.classList.add('dark')
        } else {
            document.documentElement.classList.remove('dark')
        }
    }, [theme])
    return { theme, handleToogler }

}

export default ThemProvider