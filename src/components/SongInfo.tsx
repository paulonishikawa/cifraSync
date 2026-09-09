import type { Song } from '../types/song'

type SongInfoProps = {
    song: Song
}

function SongInfo({ song }: SongInfoProps) {
    return (
        <>
            <h2>{song.title}</h2>

            <p>BPM: {song.bpm}</p>
            <p>Compasso: {song.beatsPerBar}/4</p>
        </>
    )
}

export default SongInfo