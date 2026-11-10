import { useState } from 'react'

type LyricLineViewProps = {
    content: string
}

function LyricLineView({ content }: LyricLineViewProps) {
    const lines = content.split('\n')
    const [scrollPosition, setScrollPosition] = useState(0)

    return (
        <>
        <button onClick={() => setScrollPosition(-50)}>
            testar rolagem
        </button>        
        <div className="lyrics">
            <div className="lyrics-content"
                style={{
                    transform: `translateY(${scrollPosition}px)`,
                }}>
                {lines.map((line, index) => (
                    <div
                    key={index}
                    className={index % 2 === 0 ? 'chord-line' : 'lyric-line'}
                    >
                        {line || '\u00A0'}
                    </div>
                ))}
            </div>
        </div>
        </>
    )
}

export default LyricLineView