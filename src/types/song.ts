type Section = {
    name: string
    bars: number
}

type Song = {
    title: string
    bpm: number
    beatsPerBar: number
    sections: Section[]
}

export type { Song, Section }