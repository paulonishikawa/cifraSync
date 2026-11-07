import type { 
    Section as SectionType,
    SectionOccurrence,
} from '../types/song'

import Section from './Section'

type SectionListProps = {
    sections: SectionType[]
    arrangement: SectionOccurrence[]
    currentOccurrenceIndex: number
    onSelectOccurrence: (index: number) => void
}

function SectionList({
    sections,
    arrangement,
    currentOccurrenceIndex,
    onSelectOccurrence,
 }: SectionListProps) {
    return (
        <>
            <h3>Seções</h3>

            <ul>
                {arrangement.map((occurrence, index) => {
                    const section = sections.find(
                        (item) => item.id === occurrence.sectionId
                    )

                if (!section) {
                    return null
                }

                return (
                    <Section
                        key={occurrence.id}
                        section={section}
                        isActive={index === currentOccurrenceIndex}
                        onSelect={() => onSelectOccurrence(index)}
                    />
                )
                })}
            </ul>
        </>
    )
}

export default SectionList