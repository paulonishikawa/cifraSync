import type { Section as SectionType } from '../types/song'
import Section from './Section'

type SectionListProps = {
    sections: SectionType[]
    currentSection: number
}

function SectionList({ sections, currentSection }: SectionListProps) {
    return (
        <>
            <h3>Seções</h3>

            <ul>
                {sections.map((section, index) => (
                    <Section
                        key={section.name}
                        section={section}
                        isActive={index === currentSection} />
                ))}
            </ul>
        </>
    )
}

export default SectionList