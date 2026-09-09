import type { Song } from './types/song'
import SongInfo from './components/SongInfo'
import SectionList from './components/SectionList'
import { useState } from 'react'


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
  
  return (
    <>
      <h1>CifraSync</h1>

      <SongInfo song={song} />

      <p>Seção atual: {song.sections[currentSection].name}</p>

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