import type { Song } from './types/song'
import SongInfo from './components/SongInfo'
import SectionList from './components/SectionList'
import { calculateSectionDuration } from './utils/songTiming'
import { useEffect, useState } from 'react'
import LyricLineView from './components/LyricLineView'


const song: Song = {
  title: 'Mais Que Vencedores',
  bpm: 82,
  beatsPerBar: 4,
  sections: [
    {
      id: 'intro',
      name: 'Intro',
      bars: 4,
      lines: [
        {
          text: 'Quando estou',
          chords: [
            {
              position: 0,
              chord: {
                root: 0,
                suffix: '',
              },
            },
            {
              position: 8,
              chord: {
                root: 7,
                suffix: '',
              },
            },
          ],
        },
      ],
    },
    {
      id: 'verso',
      name: 'Verso',
      bars: 8,
      lines: []
    },
    {
      id: 'refrao',
      name: 'Refrão',
      bars: 8,
      lines: [],
    },
  ],
}

function App() {
  const [currentSection, setCurrentSection] = useState(0)
  const [elapsedTime, setElapsedTime] = useState(0)

  const currentSectionDuration = calculateSectionDuration(
    song,
    song.sections[currentSection],
  )

  const progress = Math.min(
    elapsedTime / currentSectionDuration,
    1,
  )

  useEffect(() => {
    setElapsedTime(0)
  }, [currentSection])

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

  useEffect(() => {
    const startTime = Date.now()

    const interval = setInterval(() => {
      const elapsed = (Date.now() - startTime) / 1000

      if (elapsed >= currentSectionDuration) {
        setElapsedTime(currentSectionDuration)
        clearInterval(interval)
        return
      }

      setElapsedTime(elapsed)
    }, 100)

    return () => {
      clearInterval(interval)
    }
  }, [currentSection, currentSectionDuration])
  
  
  return (
    <>
      <h1>CifraSync</h1>

      <SongInfo song={song} />

      <p>Seção atual: {song.sections[currentSection].name}</p>
      <LyricLineView
        line={song.sections[0].lines[0]}
      />

      <div className="progress-bar">
        <div
          className="progress-bar-fill"
          style={{ width: `${progress * 100}%` }}
        />
      </div>

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