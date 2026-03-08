export function generateGrid(words: string[], size: number = 10) {

  const grid: string[][] = Array.from({ length: size }, () =>
    Array(size).fill("")
  )

  const directions = [
    { dr: 0, dc: 1 },   // kanan
    { dr: 0, dc: -1 },  // kiri
    { dr: 1, dc: 0 },   // bawah
    { dr: -1, dc: 0 }   // atas
  ]

  function canPlace(word: string, row: number, col: number, dr: number, dc: number) {

    for (let i = 0; i < word.length; i++) {

      const r = row + dr * i
      const c = col + dc * i

      if (r < 0 || r >= size || c < 0 || c >= size) return false

      const cell = grid[r][c]

      if (cell !== "" && cell !== word[i]) return false
    }

    return true
  }

  function placeWord(word: string) {

    const attempts = 100

    for (let attempt = 0; attempt < attempts; attempt++) {

      const dir = directions[Math.floor(Math.random() * directions.length)]

      const row = Math.floor(Math.random() * size)
      const col = Math.floor(Math.random() * size)

      if (canPlace(word, row, col, dir.dr, dir.dc)) {

        for (let i = 0; i < word.length; i++) {

          const r = row + dir.dr * i
          const c = col + dir.dc * i

          grid[r][c] = word[i]
        }

        return true
      }
    }

    return false
  }

  words.forEach(word => placeWord(word))

  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

  for (let r = 0; r < size; r++) {
    for (let c = 0; c < size; c++) {

      if (grid[r][c] === "") {
        grid[r][c] = alphabet[Math.floor(Math.random() * alphabet.length)]
      }

    }
  }

  return grid
}