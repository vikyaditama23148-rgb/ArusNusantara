import WordSearchGame from "../word-search/WordSearchGame"

const words = [
"BATIK",
"WAYANG",
"REOG",
"GAMELAN",
"KERIS"
]

export default function Page(){
  return <WordSearchGame words={words}/>
}