const noteNames = [
    'C',
    'C#',
    'D',
    'D#',
    'E',
    'F',
    'F#',
    'G',
    'G#',
    'A',
    'A#',
    'B',
]

function getNoteName(root: number): string {
    return noteNames[root]
}

export { getNoteName }