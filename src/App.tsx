import type { Song } from './types/song'
import SongInfo from './components/SongInfo'
import SectionList from './components/SectionList'
import { calculateSectionDuration } from './utils/songTiming'
import { useEffect, useState } from 'react'


const song: Song = {
  title: 'Mais Que Vencedores',
  bpm: 82,
  beatsPerBar: 4,
  sections: [
    {
      name: 'Intro',
      bars: 4,
    },
    {
      name: 'Verso',
      bars: 8,
    },
    {
      name: 'Refrão',
      bars: 8,
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