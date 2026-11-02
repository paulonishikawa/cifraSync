type LyricLineViewProps = {
    content: string
}

function LyricLineView({ content }: LyricLineViewProps) {
    const lines = content.split('\n')

    return (
        <div className="lyrics">
            {lines.map((line, index) => (
                <div
                    key={index}
                    className={index % 2 === 0 ? 'chord-line' : 'lyric-line'}
                >
                    {line || '\u00A0'}
                </div>
            ))}
        </div>
    )
}

export default LyricLineView