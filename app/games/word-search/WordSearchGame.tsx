"use client";

import { useState, useEffect } from "react";
import WordGrid from "./WordGrid";
import WordList from "./WordList";
import { generateGrid } from "./generateGrid";

type Props = {
  words: string[]
}

export default function WordSearchGame({ words = [] }: Props) {

  const [grid, setGrid] = useState<string[][]>([])
  const [isDragging, setIsDragging] = useState(false)

  const [selectedCells, setSelectedCells] = useState<string[]>([])
  const [selectedLetters, setSelectedLetters] = useState<string[]>([])
  const [foundWords, setFoundWords] = useState<string[]>([])
  const [foundCells, setFoundCells] = useState<string[]>([])

  const [timeLeft, setTimeLeft] = useState(100)
  const [gameOver, setGameOver] = useState(false)

  useEffect(() => {
    startNewGame()
  }, [])

  useEffect(() => {

    if(gameOver) return

    const timer = setInterval(() => {

      setTimeLeft(prev => {

        if(prev <= 1){
          setGameOver(true)
          return 0
        }

        return prev - 1
      })

    },1000)

    return () => clearInterval(timer)

  },[gameOver])

  function startNewGame(){

    setGrid(generateGrid(words))

    setSelectedCells([])
    setSelectedLetters([])
    setFoundWords([])
    setFoundCells([])

    setTimeLeft(100)
    setGameOver(false)
  }

  function resetSelection(){
    setSelectedCells([])
    setSelectedLetters([])
  }

  function processCell(row:number,col:number,letter:string){

    const key = `${row}-${col}`

    if(selectedCells.includes(key)) return

    const newCells = [...selectedCells, key]
    const newLetters = [...selectedLetters, letter]

    setSelectedCells(newCells)
    setSelectedLetters(newLetters)

    const word = newLetters.join("")

    if(words.includes(word) && !foundWords.includes(word)){

      const updatedWords = [...foundWords, word]

      setFoundWords(updatedWords)
      setFoundCells([...foundCells, ...newCells])

      setSelectedCells([])
      setSelectedLetters([])

      const audio = new Audio("/sounds/correct.mp3")
      audio.play()

      if(updatedWords.length === words.length){
        setGameOver(true)
      }
    }
  }

  function handleMouseDown(row:number,col:number,letter:string){
    if(gameOver) return

    setIsDragging(true)
    resetSelection()
    processCell(row,col,letter)
  }

  function handleMouseEnter(row:number,col:number,letter:string){
    if(!isDragging || gameOver) return
    processCell(row,col,letter)
  }

  function handleMouseUp(){
    setIsDragging(false)
  }

  if(grid.length === 0){
    return <div className="text-white text-center">Loading puzzle...</div>
  }

  return (
    <div
      className="flex flex-col items-center gap-6"
      onMouseUp={handleMouseUp}
    >

      <div className="text-white text-xl font-bold">
        Waktu: {timeLeft}s
      </div>

      {gameOver && (
        <div className="text-yellow-400 text-lg font-semibold">
          {foundWords.length === words.length
            ? "Selamat! Puzzle selesai!"
            : "Waktu habis!"}
        </div>
      )}

      <div className="flex gap-4">

        <button
          onClick={startNewGame}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
        >
          Puzzle Baru
        </button>

        <button
          onClick={resetSelection}
          className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
        >
          Reset Pilihan
        </button>

      </div>

      <div className="flex gap-10 justify-center">

        <WordGrid
          grid={grid}
          onMouseDownCell={handleMouseDown}
          onMouseEnterCell={handleMouseEnter}
          selectedCells={selectedCells}
          foundCells={foundCells}
        />

        <WordList
          words={words}
          foundWords={foundWords}
        />

      </div>

    </div>
  )
}