import type { LyricLine } from '../types/song'
import { getNoteName } from '../utils/noteNames'

type LyricLineViewProps = {
    line: LyricLine
}

function LyricLineView({ line }: LyricLineViewProps) {
    return (
        <div className="lyric-line">
            <div className="lyric-line-chords">
                {line.chords.map((placement) => (
                    <span 
                        key={placement.position}
                        className="chord"
                        style={{
                            left: `${placement.position}ch`,
                        }}
                    >
                        {getNoteName(placement.chord.root)}
                        {placement.chord.suffix}
                    </span>
                ))}
            </div>

            <div className="lyric-line-text">
                {line.text}
            </div>
        </div>
    )
}

export default LyricLineView