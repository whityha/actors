import { useEffect, useState } from "react";

const useWindowWidth = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const handleWindowWidth = () => {
        setWindowWidth(window.innerWidth)
    }

    useEffect(() => {
        window.addEventListener('resize', handleWindowWidth)
        return () => window.removeEventListener('resize', handleWindowWidth)
    }, [])

    return windowWidth
}

export default useWindowWidth