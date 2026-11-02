type Section = {
    id: string
    name: string
    bars: number
    content: string
    dynamics: string
}

type Song = {
    title: string
    bpm: number
    beatsPerBar: number
    sections: Section[]
}

export type { Song, Section }