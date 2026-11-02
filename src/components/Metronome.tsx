import { useEffect, useState } from 'react'

type MetronomeProps = {
    bpm: number
    subdivision: 'quarter' | 'eighth'
}

function Metronome({ bpm, subdivision }: MetronomeProps) {
    const [isActive, setIsActive] = useState(false)
    
    const interval = 60000 / bpm / (
        subdivision === 'eighth' ? 2 : 1
    )

    useEffect(() => {
        const timer = setInterval(() => {
            setIsActive((previous) => !previous)
        }, interval)

        return () => {
            clearInterval(timer)
        }
    }, [interval])

    return (
        <div className="metronome">
            <div 
                className={`metronome-dot ${isActive ? 'active' : ''}`} 
            />
        </div>
    )
}

export default Metronome