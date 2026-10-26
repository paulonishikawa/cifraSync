import type { LyricLine } from '../types/song'

type LyricLineViewProps = {
    line: LyricLine
}

function LyricLineView({ line }: LyricLineViewProps) {
    return (
        <div className="lyric-line">
            <div className="lyric-line-chords">
                {/*Os acordes serão exibidos aqui */}
            </div>

            <div className="lyric-line-text">
                {line.text}
            </div>
        </div>
    )
}

export default LyricLineView