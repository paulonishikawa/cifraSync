import type { Section as SectionType } from '../types/song'

type SectionProps = {
    section: SectionType
    isActive: boolean
    onSelect: () => void
}

function Section({ section, isActive, onSelect }: SectionProps) {
    return (
        <li className={isActive ? 'section active' : 'section'}>
            <button
                type="button"
                className="section-button"
                onClick={onSelect}
            >
            {section.name} - {section.bars} compassos
            {isActive && ' ← atual'}
            </button>
        </li>
    )
}

export default Section