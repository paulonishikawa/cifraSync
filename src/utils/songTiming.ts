import type { Song, Section } from '../types/song'

function calculateSectionDuration(
    song: Song,
    section: Section,
) : number {
    const totalBeats = song.beatsPerBar * section.bars
    const secondsPerBeat = 60 / song.bpm

    return totalBeats * secondsPerBeat
}

export { calculateSectionDuration }