import WordSearchGame from "./WordSearchGame"
import { wordData } from "./wordData"

export default function Page(){

  return (
    <main className="min-h-screen bg-[#1a120b] text-white p-10">

      <h1 className="text-3xl font-bold text-center mb-6">
        Word Search Budaya Nusantara
      </h1>

      <WordSearchGame words={wordData} />

    </main>
  )
}