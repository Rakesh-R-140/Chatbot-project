import { useEffect, useRef } from 'react'
export function useAutoScroll(dependency) {

    const containerRef = useRef(null);

    useEffect(() => {

        const containerelem = containerRef.current

        if (containerelem) {
            containerelem.scrollTop = containerelem.scrollHeight
        }
    }, dependency)
    return containerRef
}