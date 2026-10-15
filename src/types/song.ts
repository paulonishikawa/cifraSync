type Section = {
    id: string
    name: string
    bars: number
    lines: LyricLine[]
}

type Chord = {
    root: number
    suffix: string
}

type ChordPlacement = {
    position: number
    chord: Chord
}

type LyricLine = {
    text: string
    chords: ChordPlacement[]
}

type Song = {
    title: string
    bpm: number
    beatsPerBar: number
    sections: Section[]
}

export type { Song, Section, Chord, ChordPlacement, LyricLine }