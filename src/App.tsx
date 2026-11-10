import type { Song } from './types/song'
import SongInfo from './components/SongInfo'
import SectionList from './components/SectionList'
import { calculateSectionDuration } from './utils/songTiming'
import { useEffect, useState } from 'react'
import LyricLineView from './components/LyricLineView'
import Metronome from './components/Metronome'


const song: Song = {
  id: 'mais-que-vencedores',
  title: 'Mais Que Vencedores',
  bpm: 82,
  beatsPerBar: 4,

  sections: [
    {
      id: 'intro',
      name: 'Intro',
      bars: 4,
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
      content: '',
    },
    {
      id: 'refrao',
      name: 'Refrão',
      bars: 8,
      content: '',
    },
  ],

  arrangement: [
    {
      id: 'occurrence-1',
      sectionId: 'intro',
      dynamics: 'Piano e voz'
    },
    {
      id: 'occurrence-2',
      sectionId: 'verso',
      dynamics: 'Baixo entra',
    },
    {
      id: 'occurrence-3',
      sectionId: 'refrao',
      dynamics: 'Todos entram forte',
    },
  ],
}

function App() {
  const [currentOccurrenceIndex, setCurrentOccurrenceIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)
  const [metronomeSubdivision, setMetronomeSubdivision] = useState<
    'quarter' | 'eighth'
  >('quarter')  

  const currentOccurrence = song.arrangement[currentOccurrenceIndex]

  const currentSectionData = song.sections.find(
    (section) => section.id === currentOccurrence.sectionId
  )

  if (!currentSectionData) {
    throw new Error('Seção não encontrada no arranjo da música.')
  }

  const currentSectionDuration = calculateSectionDuration(
    song,
    currentSectionData,
  )

  useEffect(() => {
    if (!isPlaying) {
      return
    }

    const timer = setTimeout(() => {
      if (currentOccurrenceIndex < song.arrangement.length - 1) {
        setCurrentOccurrenceIndex(currentOccurrenceIndex + 1)
      } else {
        setIsPlaying(false)
      }
    }, currentSectionDuration * 1000)

    return () => {
      clearTimeout(timer)
    }
  }, [isPlaying, currentOccurrenceIndex, currentSectionDuration])

  return (
    <>
      <h1>CifraSync</h1>

      <SongInfo song={song} />

      <div className="playback-controls">
        {isPlaying ? (
          <button onClick={() => setIsPlaying(false)}>
            Pausar
          </button>
        ) : (
          <button onClick={() => setIsPlaying(true)}>
            Play
          </button>
        )}
      </div>

      <div className="performance-info">
        <h2 className="section-title">
          {currentSectionData.name}
        </h2>

        <div className="performance-controls">
          <span className="dynamics-label">
            {currentOccurrence.dynamics}
          </span>

          <Metronome
            bpm={song.bpm}
            subdivision={metronomeSubdivision}
            isPlaying={isPlaying}
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

      <div className="performance-display">
        <LyricLineView
          content={currentSectionData.content}
        />
      </div>

      <button 
        onClick={() => {
          if (currentOccurrenceIndex < song.arrangement.length -1) {
            setCurrentOccurrenceIndex(currentOccurrenceIndex + 1)
          }
        }}
      >
        Próxima seção
      </button>

      <SectionList 
        sections={song.sections}
        arrangement={song.arrangement}
        currentOccurrenceIndex={currentOccurrenceIndex}
        onSelectOccurrence={setCurrentOccurrenceIndex}
      />
    </>
  )
}


export default App