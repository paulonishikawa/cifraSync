import type { Section as SectionType } from '../types/song'

type SectionProps = {
    section: SectionType
    isActive: boolean
}

function Section({ section, isActive }: SectionProps) {
    return (
        <li className={isActive ? 'section active' : 'section'}>
            {section.name} - {section.bars} compassos
            {isActive && ' ← atual'}
        </li>
    )
}

export default Section