import type { Song } from './types/song'
import SongInfo from './components/SongInfo'
import SectionList from './components/SectionList'
import { calculateSectionDuration } from './utils/songTiming'
import { useEffect, useState } from 'react'
import LyricLineView from './components/LyricLineView'
import Metronome from './components/Metronome'


const song: Song = {
  title: 'Mais Que Vencedores',
  bpm: 82,
  beatsPerBar: 4,
  sections: [
    {
      id: 'intro',
      name: 'Intro',
      bars: 4,
      dynamics: 'Suave',
      content:
`C                     G
Quando estou em Tua presença
Am              F
Encontro paz e direção`,
    },
    {
      id: 'verso',
      name: 'Verso',
      bars: 8,
      dynamics: 'Suave',
      content: '',
    },
    {
      id: 'refrao',
      name: 'Refrão',
      bars: 8,
      dynamics: 'Forte',
      content: '',
    },
  ],
}

function App() {
  const [currentSection, setCurrentSection] = useState(0)
  const [metronomeSubdivision, setMetronomeSubdivision] = useState<
    'quarter' | 'eighth'
  >('quarter')  

  const currentSectionDuration = calculateSectionDuration(
    song,
    song.sections[currentSection],
  )

  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentSection < song.sections.length - 1) {
        setCurrentSection(currentSection + 1)
      }
    }, currentSectionDuration * 1000)

    return () => {
      clearTimeout(timer)
    }
  }, [currentSection, currentSectionDuration])

  return (
    <>
      <h1>CifraSync</h1>

      <SongInfo song={song} />

      <div className="performance-info">
        <span>{song.sections[currentSection].name}</span>

        <div className="performance-controls">
          <span>{song.sections[currentSection].dynamics}</span>

          <Metronome
            bpm={song.bpm}
            subdivision={metronomeSubdivision}
          />

          <select
            value={metronomeSubdivision}
            onChange={(event) => {
              setMetronomeSubdivision(
                event.target.value as 'quarter' | 'eighth'
              )
            }}
          >
            <option value="quarter">Semínima</option>
            <option value="eighth">Colcheia</option>
          </select>
        </div>
      </div>

      <LyricLineView
        content={song.sections[currentSection].content}
      />

      <button 
        onClick={() => {
          if (currentSection < song.sections.length -1) {
            setCurrentSection(currentSection + 1)
          }
        }}
      >
        Próxima seção
      </button>

      <SectionList 
        sections={song.sections}
        currentSection={currentSection}
      />
    </>
  )
}


export default App