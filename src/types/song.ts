type Section = {
    id: string
    name: string
    bars: number
    content: string
}

type SectionOccurrence = {
    id: string
    sectionId: string
    dynamics: string
}

type Song = {
    id: string
    title: string
    bpm: number
    beatsPerBar: number
    sections: Section[]
    arrangement: SectionOccurrence[]
}

export type { 
    Song,
    Section,
    SectionOccurrence,
 }