import WordSearchGame from "../word-search/WordSearchGame"

const words = [
"TORAJA",
"TONGKONAN",
"MINAHASA",
"KABASARAN",
"MAKASSAR"
]

export default function Page(){
  return <WordSearchGame words={words}/>
}