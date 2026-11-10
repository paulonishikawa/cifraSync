import { useEffect, useState } from 'react'

type MetronomeProps = {
    bpm: number
    subdivision: 'quarter' | 'eighth'
    isPlaying: boolean
}

function Metronome({ bpm, subdivision, isPlaying }: MetronomeProps) {
    const [isActive, setIsActive] = useState(false)
    
    const interval = 60000 / bpm / (
        subdivision === 'eighth' ? 2 : 1
    )

    useEffect(() => {
        if (!isPlaying) {
            setIsActive(false)
            return
        }

        let pulseTimer: ReturnType<typeof setTimeout>
        
        const timer = setInterval(() => {
            setIsActive(true)
            
            pulseTimer = setTimeout(() => {
                setIsActive(false)
            }, 100)
        }, interval)

        return () => {
            clearInterval(timer)
            clearTimeout(pulseTimer)
        }
    }, [interval, isPlaying])

    return (
        <div className="metronome">
            <div 
                className={`metronome-dot ${isActive ? 'active' : ''}`} 
            />
        </div>
    )
}

export default Metronome